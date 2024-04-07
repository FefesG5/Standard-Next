import { test, expect } from "@playwright/test";

test.describe("Home Page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test.describe("Navigation Tests", () => {
    test("navigation links are correctly set", async ({ page }) => {
      const aboutLink = page.locator('[data-testid="nav-about"]');
      await expect(aboutLink).toHaveAttribute("href", "/about");

      const contactLink = page.locator('[data-testid="nav-contact"]');
      await expect(contactLink).toHaveAttribute("href", "/contact");
    });
  });

  test("Home Page document title is Create Next App", async ({ page }) => {
    await expect(page).toHaveTitle(/Create Next App/i);
  });

  test("Home Page has correct h1 heading", async ({ page }) => {
    const heading = page.locator("h1", { hasText: "Home Page" });
    await expect(heading).toBeVisible();
  });
});
