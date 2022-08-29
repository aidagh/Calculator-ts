"use strict";
//Remove function to removing list items from the history
const remove = (elemet) => {
    if (elemet && elemet.parentNode) {
        elemet.parentNode.removeChild(elemet);
    }
};
//Get numbers and operators and show the result
let result = document.getElementById('result');
let btnArray = document.getElementsByClassName('button');
let buttons = [...btnArray];
// //Get numbers and operators and show the result
// let result = document.getElementById("result");
// let buttons = Array.from(document.getElementsByClassName("button"));
const historyItems = document.getElementById("historyItems");
// const item =document.getElementsByClassName("item")
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
                    list.className = "item";
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
                    result === null || result === void 0 ? void 0 : result.innerText = eval(result === null || result === void 0 ? void 0 : result.innerText);
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
// 
