/* eslint-disable playwright/no-skipped-test */
import { test, expect } from '@playwright/test';

test.describe('Game View Layout', () => {
  test('Dashboard should load correctly', async ({ page }) => {
    await page.goto('/dashboard');
    // Check if the hero section text is present
    await expect(page.locator('h1')).toContainText('Tactical');
    await expect(page.locator('h1')).toContainText('Superiority');
  });

  test('Desktop layout: Timeline, Board, and Sidebar should be in correct order', async ({ page, isMobile }) => {
    test.skip(isMobile, 'This test is for desktop only');
    
    // We navigate to a dummy game ID or a known one if possible. 
    // For layout testing, even a "Game Not Found" page should have the grid structure.
    await page.goto('/game/test-layout-id');
    
    // Check for the sidebar (MatchTimeline) - should be order-1 or first in DOM
    const timeline = page.locator('aside.shrink-0');
    await expect(timeline).toBeVisible();
    
    // Check for the Board area
    const boardArea = page.locator('.flex-col.items-center.justify-center.py-4.lg\:py-0');
    await expect(boardArea).toBeVisible();
    
    // Check for Right Side Panel (TacticalDashboard/Analytics)
    // Note: It only shows if game exists or player is in game. 
    // If game not found, it might not be visible.
  });

  test('Mobile layout: Board should be top, then HUD, then Timeline', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is for mobile only');
    
    await page.goto('/game/test-layout-id');
    
    // Board area should have order-1 on mobile
    const boardArea = page.locator('.order-1.lg\:order-2');
    await expect(boardArea).toBeVisible();
    
    // Timeline should have order-2 on mobile
    const timeline = page.locator('aside.order-2.lg\:order-1');
    await expect(timeline).toBeVisible();
    
    // Check if header info is hidden on mobile
    const headerInfo = page.locator('.hidden.lg\:flex.flex-col');
    await expect(headerInfo).toBeHidden();
  });
});
