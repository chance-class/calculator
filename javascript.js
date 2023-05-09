let n1, operator, n2;

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

let test = operate(5, "+", 3);
console.log(test);

const screen = document.querySelector('#screen');

document.addEventListener('keydown', (event) => {
    if (!isNaN(Number(event.key))) {
      screen.textContent += event.key;
    } else if (event.key === "/" || event.key === "x" || event.key === "+" || event.key === "-" ) {
      operator = event.key;
      screen.textContent += event.key;
      console.log(operator);
    } else if (event.key === ".") {
      screen.textContent += event.key;
    }
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  screen.textContent += "1";
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    screen.textContent += "2";
  });
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    screen.textContent += "3";
  });
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    screen.textContent += "4";
  });
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    screen.textContent += "5";
  });
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    screen.textContent += "6";
  });
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    screen.textContent += "7";
  });
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    screen.textContent += "8";
  });
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    screen.textContent += "9";
  });
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    screen.textContent += "0";
  });
