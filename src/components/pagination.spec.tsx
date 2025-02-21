import { beforeEach, describe } from "node:test";
import { Pagination } from "./pagination";
import { expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

/*
Spies são utilizadas para verificar interações dentro do código, ou seja, garantir que funções foram executadas corretamente
 sem modificar seu comportamento. Diferente de mocks, que substituem a implementação de uma função, os spies apenas registram 
 chamadas e argumentos.

 Quando usar Spies?
 - Para garantir que um método foi chamado sem modificar sua implementação.
 - Para testar efeitos colaterais, como logs, chamadas de API ou manipulação de DOM.
 - Quando queremos verificar argumentos passados para funções.

 Exemplo:

 const meuModulo = {
  minhaFuncao: () => "Executado!"
};

test("Verifica se minhaFuncao foi chamada", () => {
  const spy = jest.spyOn(meuModulo, "minhaFuncao");

  meuModulo.minhaFuncao(); // Chama a função

  expect(spy).toHaveBeenCalled(); // Verifica se foi chamada
  expect(spy).toHaveBeenCalledTimes(1); // Verifica quantas vezes foi chamada

  spy.mockRestore(); // Restaura a implementação original
}); 
 */

const onPageChangeCallback = vi.fn();
describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });
  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const user = userEvent.setup();
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
  it("should be able to navigate to the previous page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });
  it("should be able to navigate to the first page", async () => {
    const user = userEvent.setup();
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });
  it("should be able to navigate to the last page", async () => {
    const user = userEvent.setup();
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
