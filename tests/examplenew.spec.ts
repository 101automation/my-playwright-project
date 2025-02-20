import { test, expect } from '@playwright/test';
test('basic test', async ({ page }) => {
    await page.goto('https://www.example.com');
    await expect(page).toHaveTitle(/Example Domain/);
});

test('login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login'); // Example login page
    await page.locator('#username').fill('tomsmith'); // Example username
    await page.locator('#password').fill('SuperSecretPassword!'); // Example password
    await page.locator('button[type="submit"]').click();
    // Add assertions to check if login was successful
});