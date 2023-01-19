chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.status === 'complete' && tab.url === 'https://twitter.com/home') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['./contentScript.js']
    });
  }
})