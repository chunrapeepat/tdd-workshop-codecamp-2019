// monkey-patching
import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  const originalFetchAPI = utils.fetchNumberFromAPI;
  utils.fetchNumberFromAPI = () => 10;
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  utils.fetchNumberFromAPI = originalFetchAPI;
})