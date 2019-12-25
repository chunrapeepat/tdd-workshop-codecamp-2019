// 1. Design and Write Tests
// 2. Implement Function
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

// TODO: Write tests

