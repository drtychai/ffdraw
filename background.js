async function instrumentActiveTab() {
    await browser.tabs.insertCSS({file: "/content/draw.css"});
    await browser.tabs.executeScript({file: "/content/draw.js"});
}
browser.browserAction.onClicked.addListener(instrumentActiveTab);
