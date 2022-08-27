var remove = function (elemet) {
    if (elemet && elemet.parentNode) {
        elemet.parentNode.removeChild(elemet);
    }
};
//Get numbers and operators and show the result
var result = document.getElementById("result");
var buttons = Array.from(document.getElementsByClassName("button"));
var historyItems = document.getElementById("historyItems");
var item = document.getElementsByClassName("item");
buttons.map(function (button) {
    button.addEventListener("click", function (e) {
        var input = e.target;
        var textnode = document.createTextNode("".concat(result.innerText));
        switch (input.innerText) {
            case "C":
                result.innerText = "";
                break;
            case "=":
                try {
                    var list_1 = document.createElement("li");
                    list_1.className = "item";
                    var trash = document.createElement("img");
                    trash.src = "trash.svg";
                    trash.id = "trash";
                    trash.addEventListener("click", function () {
                        remove(list_1);
                    });
                    var answer = document.createTextNode("".concat(result.innerText, " =  ").concat(eval(result.innerText)));
                    list_1.appendChild(answer);
                    list_1.appendChild(trash);
                    historyItems === null || historyItems === void 0 ? void 0 : historyItems.insertBefore(list_1, historyItems.childNodes[""]);
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
