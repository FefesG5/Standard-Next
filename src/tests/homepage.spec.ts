import { test, expect } from "@playwright/test";

test("home page has correct heading", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Create Next App/i);

  const heading = page.locator("h1", { hasText: "Home Page" });

  await expect(heading).toBeVisible();
});
