import generateMinMaxAverage from "../generate"
import * as utilsMock from "../utils"

// TODO: jest.mock

test('returns max min average values', () => {
  const expected = {min: 1, max: 3, avg: 2};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(utilsMock.fetchNumberFromAPI).toHaveBeenCalledTimes(3);
})