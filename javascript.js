let n1, operator, n2, result, num, lastPress;

function toAdd (n1, n2) {
  return (+n1 + +n2);
}

function toSub (n1, n2) {
  return (n1 - n2);
}

function toDiv (n1, n2) {
  return (n1 / n2);
}

function toMult (n1, n2) {
  return (n1 * n2);
}


function firstStep (input) {
  input = String(screen.textContent);
  let newInput = input.split(" ");
  if (newInput[0].toString().includes(".")) {
    n1 = parseFloat(newInput[0]).toFixed(4).replace(/0+$/, "");
  } else {
    n1 = parseFloat(newInput[0]).toFixed();
  }
  
  operator = newInput[1];
  n2 = parseFloat(newInput[2]).toFixed(4);
  screen.textContent = `${n1} ${operator} `;
  return (n1, operator, n2);
}

function operate (n1, operator, n2) {
  if (operator === "+") {
    num = toAdd(n1, n2);
    if (num.toString().includes(".")) {
      result = num.toFixed(4).replace(/0+$/, "");
    } else {
      result = num.toFixed();
    }
    n1 = null;
    n2 = null;
    return result;
  } else if (operator === "-") {
    num = toSub(n1, n2);
    if (num.toString().includes(".")) {
      result = num.toFixed(4).replace(/0+$/, "");
    } else {
      result = num.toFixed();
    }
    n1 = null;
    n2 = null;
    return result;
  } else if (operator === "/") {
    num = toDiv(n1, n2);
    if (num === Infinity) {
      alert("Nice try!");
      if (n1.toString().includes(".")) {
        result = n1.toFixed(4).replace(/0+$/, "");
      } else {
        result = n1.toFixed();
      }
      return result;
    } else {
      if (num.toString().includes(".")) {
        result = num.toFixed(4).replace(/0+$/, "");
      } else {
        result = num.toFixed();
      }
      n1 = null;
      n2 = null;
      return result;
    }
  } else if (operator === "x") {
    num = toMult(n1, n2);
    if (num.toString().includes(".")) {
      result = num.toFixed(4).replace(/0+$/, "");
    } else {
      result = num.toFixed();
    }
    n1 = null;
    n2 = null;
    return result;
  } else {
    return "error";
  }
}

const screen = document.querySelector('#screen');
let findOp, secondDec;

document.addEventListener('keydown', (event) => {
    if (!isNaN(Number(event.key))) screen.textContent += event.key;
    switch (event.key) {
      case "/":
      case "x":
      case "+":
      case "-":
        if (operator === undefined) {
          screen.textContent += ` ${event.key} `;
          firstStep();
        } else {
          firstStep();
          operate(n1, operator, n2);
          operator = event.key;
          screen.textContent = result + ` ${operator} `;
        };
        break;

      case ".":
        if (lastPress === equal) {
          screen.replaceChildren();
          lastPress = undefined;
        }
        if (operator !== undefined) {
          if (operator === "\+") {
            myString = screen.textContent.replace(/\+/g, "M")
            findOp = myString.search("M");
            secondDec = myString.substring(findOp, myString.length);
            if (secondDec.includes(".")) {
              console.log(secondDec);
              return;
            } else {
              screen.textContent += ".";
            }
          } else {
            findOp = screen.textContent.search(operator);
            secondDec = screen.textContent.substring(findOp, screen.textContent.length);
            if (secondDec.includes(".")) {
              console.log(secondDec);
              return;
            } else {
              screen.textContent += ".";
            }
          }
         } else if (operator === undefined && !(screen.textContent.includes("."))) {
          screen.textContent += ".";
        } 
        break;

      case "Backspace":
        screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
        break;

      case "=":
      case "Enter":
        if (screen.textContent === "" || operator === undefined) {
          return;
        } else {
          firstStep();
          operate(n1, operator, n2);
          screen.textContent = result;
          lastPress = equal;
          operator = undefined;
          n1 = null;
          n2 = null;
          screen.value = null;
        }
        break;

      default:
        return;
    }
 });



const intButtons = document.querySelectorAll('.int');
intButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (lastPress === equal) {
      screen.replaceChildren();
      lastPress = undefined;
    }
    screen.textContent += button.textContent;
  })
});

const opButtons = document.querySelectorAll('.oper');
opButtons.forEach((button) => {
  button.addEventListener('click', () => {
    lastPress = undefined;
    if (operator === undefined) {
      screen.textContent += ` ${button.textContent} `;
      firstStep();
    } else {
      firstStep();
      operate(n1, operator, n2);
      operator = button.textContent;
      screen.textContent = result + ` ${operator} `;
    }
  });
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
  if (lastPress === equal) {
     screen.replaceChildren();
     lastPress = undefined;
   }
  if (operator !== undefined) {
    if (operator === "\+") {
      myString = screen.textContent.replace(/\+/g, "M")
      findOp = myString.search("M");
      secondDec = myString.substring(findOp, myString.length);
      if (secondDec.includes(".")) {
        console.log(secondDec);
        return;
      } else {
        screen.textContent += ".";
      }
    } else {
      findOp = screen.textContent.search(operator);
      secondDec = screen.textContent.substring(findOp, screen.textContent.length);
      if (secondDec.includes(".")) {
        console.log(secondDec);
        return;
      } else {
        screen.textContent += ".";
      }
    }
   } else if (operator === undefined && !(screen.textContent.includes("."))) {
    screen.textContent += ".";
  } 
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  if (screen.textContent === "" || operator === undefined) {
    return;
  } else {
    firstStep();
    operate(n1, operator, n2);
    screen.textContent = result;
    lastPress = equal;
    operator = undefined;
    n1 = null;
    n2 = null;
    screen.value = null;
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  n1 = null;
  operator = undefined;
  n2 = null;
  screen.replaceChildren();
  screen.value = null;
});

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
  screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
});
