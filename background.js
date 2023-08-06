
let links = new Set()

const actions = {
  "AddLink": (message, sender, sendResponse) => links.add(message.link),
  "GetLinks": (message, sender, sendResponse) => sendResponse({ data: [...links] }),
  "ClearLinks": (message, sender, sendResponse) => links = new Set(),
  "PutInClipboard": (message, sender, sendResponse) => {
      navigator.clipboard.writeText(
        [...links].join("\n")
      )
  }
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const handler = actions[message.action];
  handler(message, sender, sendResponse);
});

