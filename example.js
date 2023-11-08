const { chromium } = require('playwright'); // Chromiumを使用する場合

(async () => {
    // ブラウザインスタンスを起動します。
    const browser = await chromium.launch({
        headless: true // ヘッドレスモードを無効にする場合はfalseにします。
    });

    // 新しいページを開きます。
    const page = await browser.newPage();

    // localhost:3000にナビゲートします。
    await page.goto('http://localhost:3000/');

    // ページ内に特定の文字列が含まれていることを確認します。
    // 'text="Welcome#index"'はページ内のコンテンツを検索するセレクタです。
    const isVisible = await page.isVisible('text="Welcome#index"');

    // 結果に基づいてアクションを行います。
    // ここではコンソールに結果を出力していますが、テストフレームワークを使ってアサーションを行うことも可能です。
    console.log(`The text "Welcome#index" is visible: ${isVisible}`);

    // ブラウザを閉じます。
    await browser.close();
})();
