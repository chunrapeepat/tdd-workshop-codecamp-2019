// jest.spyOn and mockImplementation
import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  const spy = jest.spyOn(utils, 'fetchNumberFromAPI');
  utils.fetchNumberFromAPI.mockImplementation(() => 10)
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(spy).toHaveBeenCalledTimes(3);

  utils.fetchNumberFromAPI.mockRestore();
})