



function UpdateLinks () {
    browser.runtime.sendMessage({ action: "GetLinks" }, (response) => {

        if (response && response.data) {
            const dataList = document.getElementById("dataList");
            dataList.innerHTML = ""; 

            const links = response.data;
            const count = links.length;

            const btn = document.getElementById("linkCount");
            btn.innerHTML = count;

            if (count > 0) {
                function AddElement(item) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    dataList.appendChild(li);
                }

                AddElement(links[count - 1])
            }
        }
    });
}


const actions = {
    'copy2clipboard': () => browser.runtime.sendMessage({ action: "PutInClipboard" }),
    'clearLinks': () =>  browser.runtime.sendMessage({ action: "ClearLinks" })
}

for (const [key, value] of Object.entries(actions)) {
    const btn = document.getElementById(key);
    btn.addEventListener("click", value);
}


UpdateLinks()