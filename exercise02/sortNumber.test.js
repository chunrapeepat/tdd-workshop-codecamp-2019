const sortNumber = require("../exercise01/sortNumber");

function isEqual(result, expected) {
  if (result[0] === expected[0] && result[1] === expected[1] && result[2] === expected[2]) {
    return true;
  }
  return false;
}

function test(title, callback) {
  try {
    callback();
    console.log(`${title}: ✓ test passed!`)
  } catch (e) {
    console.error(e)
    console.log(`${title}: ✕ test failed!`)
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (!isEqual(result, expected))
        throw new Error(`${result} is not equal to ${expected}`)
    }
  }
}

const expected = [1, 2, 3];

test("a > b > c", () => {
  expect(sortNumber(3, 2, 1)).toBe(expected);
});

test("b > a > c", () => {
  expect(sortNumber(2, 3, 1)).toBe(expected);
});

test("b > c > a", () => {
  expect(sortNumber(1, 3, 2)).toBe(expected);
});

test("a > c > b", () => {
  expect(sortNumber(3, 1, 2)).toBe(expected);
});

test("c > a > b", () => {
  expect(sortNumber(2, 1, 3)).toBe(expected);
});

test("c > b > a", () => {
  expect(sortNumber(1, 2, 3)).toBe(expected);
});

