import generateMinMaxAverage from "../generate"
import * as utilsMock from "../utils"

// TODO: using __mocks__ folder

test('returns max min average values', () => {
  const expected = {min: 4, max: 6, avg: 5};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(utilsMock.fetchNumberFromAPI).toHaveBeenCalledTimes(3);
})