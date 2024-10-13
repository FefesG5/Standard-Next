import { test, expect } from "@playwright/test";

// Home Page Tests focusing for mobile view
test.describe("Home Page Tests - Header and Footer (Mobile View)", () => {
  // Before each test, navigate to the home page and set the viewport to mobile size
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.setViewportSize({ width: 375, height: 667 }); // Set to iPhone SE dimensions or similar mobile viewport
  });

  // Header Section
  test.describe("Header Section", () => {
    test("Logo should be visible and navigate to the home page", async ({
      page,
    }) => {
      const logo = page.locator("a[href='/'] img[alt='Next.js Logo']");
      await expect(logo).toBeVisible();

      await logo.click();
      await expect(page).toHaveURL("http://localhost:3000");
    });
  });

  // Page Title and Content Section
  test.describe("Page Title and Content", () => {
    test("Home Page has the correct document title", async ({ page }) => {
      await expect(page).toHaveTitle(/Create Next App/i);
    });

    test("Home Page displays the correct h1 heading", async ({ page }) => {
      const heading = page.locator("h1", { hasText: "Home Page" });
      await expect(heading).toBeVisible();
    });
  });

  // Footer Section
  test.describe("Footer Section", () => {
    test("Footer should be visible on a mobile screen", async ({ page }) => {
      const footer = page.locator("footer");
      await expect(footer).toBeVisible();
    });

    test("Footer should contain a link to Vercel", async ({ page }) => {
      const vercelLink = page.locator("footer a[href='https://vercel.com']");
      await expect(vercelLink).toBeVisible();
      await expect(vercelLink).toHaveAttribute("target", "_blank");

      await vercelLink.click();
      const [newPage] = await Promise.all([
        page.context().waitForEvent("page"),
        vercelLink.click(),
      ]);
      await newPage.waitForLoadState();
      await expect(newPage).toHaveURL(/https:\/\/vercel\.com/);
    });

    test("Footer should display the Vercel logo", async ({ page }) => {
      const vercelLogo = page.locator("footer img[alt='Vercel Logo']");
      await expect(vercelLogo).toBeVisible();
      await expect(vercelLogo).toHaveAttribute("src", "/vercel.svg");
    });
  });
});
