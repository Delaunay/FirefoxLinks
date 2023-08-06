
browser.runtime.sendMessage({ action: "GetLinks" }, (response) => {
    
    if (response && response.data) {
        const dataList = document.getElementById("dataList");
        dataList.innerHTML = ""; 


        const links = response.data;
        links.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            dataList.appendChild(li);
        });
    }
  });


const btn = document.getElementById("copy2clipboard");
    btn.addEventListener("click", function () {
    browser.runtime.sendMessage({ action: "PutInClipboard" })
});
