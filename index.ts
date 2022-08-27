
const remove = (elemet: HTMLElement): void => {
  if (elemet && elemet.parentNode) {
    elemet.parentNode.removeChild(elemet);
  }
};
//Get numbers and operators and show the result
let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));

const historyItems = document.getElementById("historyItems");
const item =document.getElementsByClassName("item")


buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const input =e.target as HTMLElement;
    const textnode = document.createTextNode(`${result!.innerText}`);
    switch (input.innerText) {
      case "C":
        result!.innerText = "";
        break;
        case "=":
        try {
          let list:HTMLElement = document.createElement("li");
          list.className= "item"
          const trash = document.createElement("img");
          trash.src = "trash.svg";
          trash.id = "trash";
          trash.addEventListener("click", function () {
              remove(list)  
          });
        const answer = document.createTextNode(`${result!.innerText} =  ${eval(result!.innerText)}`);
        list.appendChild(answer);
        list.appendChild(trash);
        historyItems?.insertBefore(list, historyItems.childNodes[""]);
        result?.innerText = eval(result?.innerText);
              
        
        } catch {
          result!.innerText = "Error";
        }
        break;
      default:
        result!.innerText += input.innerText;     
    }
    
  });
});


