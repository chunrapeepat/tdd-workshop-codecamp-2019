import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: monkey-patching
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
})