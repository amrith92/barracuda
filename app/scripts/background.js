browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
  browser.browserAction.setBadgeText({
    text: `Hey!`
  })
})

function openHomePage() {
   browser.tabs.create({
     "url": "../pages/app.html"
   });
}

browser.browserAction.onClicked.addListener(openHomePage);
