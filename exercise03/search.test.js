const search = require("./search");

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
      if (result !== expected)
        throw new Error(`${result} is not equal to ${expected}`)
    }
  }
}

test("when array empty shoud always return -1", () => {
  expect(search([], 10)).toBe(-1);
  expect(search([], 20)).toBe(-1);
});

test("when element is not in array shoud return -1", () => {
  expect(search([1, 2, 3, 4], 10)).toBe(-1);
});

test("when element is in array shoud return index correctly", () => {
  expect(search([1, 2, 3, 4], 3)).toBe(2);
});
