"use strict";
const remove = (elemet) => {
    if (elemet && elemet.parentNode) {
        elemet.parentNode.removeChild(elemet);
    }
};
let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));
const historyItems = document.getElementById("historyItems");
const item = document.getElementsByClassName("item");
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        const input = e.target;
        const textnode = document.createTextNode(`${result.innerText}`);
        switch (input.innerText) {
            case "C":
                result.innerText = "";
                break;
            case "=":
                try {
                    let list = document.createElement("li");
                    list.classList = "item";
                    const trash = document.createElement("img");
                    trash.src = "trash.svg";
                    trash.id = "trash";
                    trash.addEventListener("click", function () {
                        remove(list);
                    });
                    const answer = document.createTextNode(`${result.innerText} =  ${eval(result.innerText)}`);
                    list.appendChild(answer);
                    list.appendChild(trash);
                    historyItems === null || historyItems === void 0 ? void 0 : historyItems.insertBefore(list, historyItems.childNodes[""]);
                }
                catch (_a) {
                    result.innerText = "Error";
                }
                break;
            default:
                result.innerText += input.innerText;
        }
    });
});
