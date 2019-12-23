// mock return value
import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  const originalFetchAPI = utils.fetchNumberFromAPI;
  utils.fetchNumberFromAPI = jest.fn();
  utils.fetchNumberFromAPI.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3);
  const expected = {min: 1, max: 3, avg: 2};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  utils.fetchNumberFromAPI = originalFetchAPI;
})