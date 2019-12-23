const sortNumber = require("./sortNumber");

let result, expected;

function isEqual(result, expected) {
  if (result[0] === expected[0] && result[1] === expected[1] && result[2] === expected[2]) {
    return true;
  }
  return false;
}

expected = [1, 2, 3];

// a > b > c
result = sortNumber(3, 2, 1);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// b > a > c
result = sortNumber(2, 3, 1);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// b > c > a
result = sortNumber(1, 3, 2);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// a > c > b
result = sortNumber(3, 1, 2);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// c > a > b
result = sortNumber(2, 1, 3);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// c > b > a
result = sortNumber(1, 2, 3);
if (!isEqual(result, expected)) {
  throw new Error(`${result} is not equal to ${expected}`);
}
