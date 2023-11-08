const { chromium } = require('@playwright/test');

// Jestのテストブロックを定義します。
test('Welcome#indexがページに表示されている', async () => {
    // ブラウザインスタンスを起動します。
    const browser = await chromium.launch({ headless: true });

    // 新しいページを開きます。
    const page = await browser.newPage();

    // localhost:3000にナビゲートします。
    await page.goto('http://localhost:3000/');

    // ページ内に特定の文字列が含まれていることを確認します。
    const isVisible = await page.isVisible('text="Welcome#index"');

    // Jestのアサーションを使用して、文字列が見えることを確認します。
    expect(isVisible).toBeTruthy();

    // ブラウザを閉じます。
    await browser.close();
});
