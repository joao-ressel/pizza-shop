import { expect, test } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "Customer 1", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "Customer 10", exact: true }),
  ).toBeVisible();
});

test("paginate orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 11", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "Customer 20", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Última página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 51", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "Customer 60", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Página anterior" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 41", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "Customer 50", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Primeira página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 1", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "Customer 10", exact: true }),
  ).toBeVisible();
});

test("filter orders by id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });
  await page.waitForTimeout(8000);

  await page.getByPlaceholder("ID do pedido").fill("order-6");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(
    page.getByRole("cell", { name: "order-6", exact: true }),
  ).toBeVisible();

  await page.waitForTimeout(2000);
});

test("filter orders by costumer name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });
  await page.waitForTimeout(8000);

  await page.getByPlaceholder("Nome do cliente").fill("Customer 1");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 1", exact: true }),
  ).toBeVisible();

  await page.waitForTimeout(8000);
});

test("filter orders by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByRole("option", { name: "Pendente" }).click();
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(
    page.getByRole("cell", { name: "Pendente"})
  ).toHaveCount(10);
});
