let n1, operator, n2, result;

function toAdd (n1, n2) {
  result = (n1 + n2);
  return result;
}

function toSub (n1, n2) {
  result = (n1 - n2);
  return result;
}

function toDiv (n1, n2) {
  result = (n1 / n2);
  return result;
}

function toMult (n1, n2) {
  result = (n1 * n2);
  return result;
}

function firstStep (input) {
  input = String(screen.textContent);
  let newInput = input.split(" ");
  n1 = newInput[0];
  operator = newInput[1];
  n2 = newInput[2];
  console.log(n1, operator, n2);
  return (n1, operator, n2);
}

function operate (n1, operator, n2) {
  if (operator === "+") {
    toAdd(n1, n2);
    return result;
  } else if (operator === "-") {
    toSub(n1, n2);
    return result;
  } else if (operator === "/") {
    toDiv(n1, n2);
    return result;
  } else if (operator === "x") {
    toMult(n1, n2);
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
      screen.textContent += ` ${event.key} `;
      firstStep();
    } else if (event.key === ".") {
      screen.textContent += event.key;
    } else if (event.key === "=") {
      firstStep();
      operate();
      screen.textContent = result;
    }
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  screen.textContent += 1;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    screen.textContent += 2;
  });
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    screen.textContent += 3;
  });
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    screen.textContent += 4;
  });
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    screen.textContent += 5;
  });
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    screen.textContent += 6;
  });
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    screen.textContent += 7;
  });
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    screen.textContent += 8;
  });
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    screen.textContent += 9;
  });
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    screen.textContent += 0;
  });
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
  screen.textContent += " / ";
  firstStep();
});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
  screen.textContent += " x ";
  firstStep();
});
const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
  screen.textContent += " - ";
  firstStep();
});
const add = document.querySelector('#add');
add.addEventListener('click', () => {
//  operator = "+";
  screen.textContent += " + ";
  firstStep();
});
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
  screen.textContent += ".";
});
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  console.log(screen.textContent);
  operate();
  console.log(operator);
  console.log(result);
  screen.textContent = result;
});
const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  screen.replaceChildren();
});
const del = document.querySelector('#delete');
del.addEventListener('click', () => {
  screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
})

