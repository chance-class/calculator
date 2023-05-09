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