import {fetchNumberFromAPI} from './utils'

function generateMaxMinAverage() {
  const numbers = [
    fetchNumberFromAPI(),
    fetchNumberFromAPI(),
    fetchNumberFromAPI(),
  ];
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const avg = numbers.reduce((a, b) => a + b) / 3;

  return {min, max, avg};
}

export default generateMaxMinAverage;
