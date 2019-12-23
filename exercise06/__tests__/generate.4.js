// jest.mock
import generateMinMaxAverage from "../generate"
import * as utilsMock from "../utils"

jest.mock('../utils', () => {
  return {
    fetchNumberFromAPI: jest.fn().mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3),
  }
})

test('returns max min average values', () => {
  const expected = {min: 1, max: 3, avg: 2};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(utilsMock.fetchNumberFromAPI).toHaveBeenCalledTimes(3);
})