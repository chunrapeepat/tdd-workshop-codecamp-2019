const evaluate = require("./eval")

test("evaluate single literal number", () => {
  expect(evaluate("1")).toBe(1);
  expect(evaluate("2")).toBe(2);
})

test("evaluate a + b", () => {
  expect(evaluate("1 + 2")).toBe(3);
})

test("evaluate a - b", () => {
  expect(evaluate("5 - 3")).toBe(2);
})

test("evaluate sum of number that >= 10", () => {
  expect(evaluate("11 + 11")).toBe(22);
})

test("evaluate substract of number that >= 10", () => {
  expect(evaluate("14 - 15")).toBe(-1);
})

test("evaluate 3 numbers sum", () => {
  expect(evaluate("1 + 1 + 1")).toBe(3);
})

test("evaluate 3 numbers with sum and substract", () => {
  expect(evaluate("11 + 12 - 13")).toBe(10);
})

test("evaluate n numbers with sum and substract", () => {
  expect(evaluate("1 + 1 + 1 - 1 - 1 - 1")).toBe(0);
})

