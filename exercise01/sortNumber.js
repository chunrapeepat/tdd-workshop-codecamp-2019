function sortNumber(a, b, c) {
  const result = [a, b, c];
  if (result[0] > result[2]) {
    [result[2], result[0]] = [result[0], result[2]];
  }
  if (result[1] > result[2]) {
    [result[1], result[2]] = [result[2], result[1]];
  }
  if (result[0] > result[1]) {
    [result[1], result[0]] = [result[0], result[1]];
  }
  return result;
}

module.exports = sortNumber;
