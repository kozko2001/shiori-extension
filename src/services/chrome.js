
const getCurrentUrl = () => new Promise((success, reject) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    if (!tabs) {
      reject();
      return;
    }

    const tab = tabs[0];
    success({
      url: tab.url,
      title: tab.title,
    });
  });
});

export { getCurrentUrl };
