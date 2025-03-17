import { test, expect } from '@playwright/test';

// Define a single test case that includes all the steps described
test('Login with correct and incorrect credentials', async ({ page }) => {
    // Step 1: Navigate to the sample site URL
    await page.goto('https://www.samplesite.com');

    // Step 2: Click on the 'Login' button located at the top right corner of the homepage
    await page.click('text=Login');

    // Step 3: Enter your username in the 'Username' field
    await page.fill('input[name="username"]', 'your_username');

    // Step 4: Enter your password in the 'Password' field
    await page.fill('input[name="password"]', 'your_password');

    // Step 5: Click on the 'Submit' button to log in
    await page.click('text=Submit');

    // Check for correct credentials redirect (optional, depending on how you handle redirects and assertions)
    if (page.url().includes('/dashboard')) {
        console.log('Successfully logged in!');
    } else {
        console.error('Failed to log in or incorrect URL after login');
    }

    // Step 6: If the credentials are incorrect, an error message will be displayed (optional assertion)
    const errorMessage = page.locator('.error-message');
    if (await errorMessage.isVisible()) {
        console.log('Error message is visible:', await errorMessage.innerText());
    } else {
        console.log('No error message, likely logged in successfully or incorrect credentials.');
    }
});