import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
// TODO: jest.spyOn, mockImplementation, check fn called 3 times, restore
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
})