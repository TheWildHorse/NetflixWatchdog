chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'pause') {
        document.querySelector('button[aria-label=Pause]').click();
    }
    else if (msg.text === 'play') {
        document.querySelector('button[aria-label=Play]').click();
    }
});
