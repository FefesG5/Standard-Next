import { test, expect } from "@playwright/test";

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  // Separate tests for each navigation link
  test.describe("Navigation Links", () => {
    test("About link navigates to the correct page", async ({ page }) => {
      const aboutLink = page.locator('[data-testid="nav-about"]');
      await expect(aboutLink).toHaveAttribute("href", "/about");
    });

    test("Contact link navigates to the correct page", async ({ page }) => {
      const contactLink = page.locator('[data-testid="nav-contact"]');
      await expect(contactLink).toHaveAttribute("href", "/contact");
    });

    test("Administrator Access link navigates to the correct page", async ({
      page,
    }) => {
      const adminAccessLink = page.locator(
        '[data-testid="nav-administrator-access"]',
      );
      await expect(adminAccessLink).toHaveAttribute("href", "/admin-access");
    });
  });

  test("Home Page has the correct document title", async ({ page }) => {
    await expect(page).toHaveTitle(/Create Next App/i);
  });

  test("Home Page displays the correct h1 heading", async ({ page }) => {
    const heading = page.locator("h1", { hasText: "Home Page" });
    await expect(heading).toBeVisible();
  });
});
