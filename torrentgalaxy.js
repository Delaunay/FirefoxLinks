
let magnetLink = document.querySelector("a.btn-danger")

if (magnetLink !== undefined) {
    browser.runtime.sendMessage({'action': 'AddLink', 'link': magnetLink.href})
}
