import { expect, test } from "@playwright/test";

test("display total receipt metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 20,00", { exact: true })).toBeVisible();
  await expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();
});

test("display month orders metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("200", { exact: true })).toBeVisible();
  await expect(page.getByText("+7%em relação ao mês passado")).toBeVisible();
});

test("display day orders metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true })).toBeVisible();
  await expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display canceled orders metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("5", { exact: true })).toBeVisible();
  await expect(page.getByText("-5% em relação ao mês passado")).toBeVisible();
});
