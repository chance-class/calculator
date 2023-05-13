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
  n1 = parseFloat(newInput[0]).toFixed(4);
  operator = newInput[1];
  n2 = parseFloat(newInput[2]).toFixed(4);
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


document.addEventListener('keydown', (event) => {
    if (!isNaN(Number(event.key))) {
      screen.textContent += event.key;
    } else if (event.key === "/" || event.key === "x" || event.key === "+" || event.key === "-" ) {
      if (operator === undefined) {
        screen.textContent += ` ${event.key} `;
        firstStep();
      } else {
        firstStep();
        operate(n1, operator, n2);
        operator = event.key;
        screen.textContent = result + ` ${operator} `;
      };
    } else if (event.key === ".") {
      screen.textContent += event.key;
    } else if (event.key === "Backspace") {
      screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    } else if (event.key === "=" || event.key === "Enter") {
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
    }
});


const one = document.querySelector('#one');
one.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
  screen.textContent += 1;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 2;
  });

const three = document.querySelector('#three');
three.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 3;
  });

const four = document.querySelector('#four');
four.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 4;
  });

const five = document.querySelector('#five');
five.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 5;
  });

const six = document.querySelector('#six');
six.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 6;
  });

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 7;
  });

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 8;
  });

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 9;
  });

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  if (lastPress === equal) {
    screen.replaceChildren();
    lastPress = undefined;
  }
    screen.textContent += 0;
  });


const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    lastPress = undefined;
  if (operator === undefined) {
    screen.textContent += " / ";
    firstStep();
  } else {
    firstStep();
    operate(n1, operator, n2);
    operator = "/";
    screen.textContent = result + ` ${operator} `;
  }
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    lastPress = undefined;
  if (operator === undefined) {
    screen.textContent += " x ";
    firstStep();
  } else {
    firstStep();
    operate(n1, operator, n2);
    operator = "x";
    screen.textContent = result + ` ${operator} `;
  }
});

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    lastPress = undefined;
  if (operator === undefined) {
    screen.textContent += " - ";
    firstStep();
  } else {
    firstStep();
    operate(n1, operator, n2);
    operator = "-";
    screen.textContent = result + ` ${operator} `;
  }
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    lastPress = undefined;
  if (operator === undefined) {
    screen.textContent += " + ";
    firstStep();
  } else {
    firstStep();
    operate(n1, operator, n2);
    operator = "+";
    screen.textContent = result + ` ${operator} `;
  }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
  if (operator !== undefined && !(n2.includes("."))) {
    screen.textContent += ".";
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
