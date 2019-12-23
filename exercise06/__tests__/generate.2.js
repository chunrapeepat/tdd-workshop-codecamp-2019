import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: jest.fn(), mockReturnValueOnce
  const expected = {min: 1, max: 3, avg: 2};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
})