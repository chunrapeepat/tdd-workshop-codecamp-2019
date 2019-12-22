function evaluate(expr) {
  expr = expr.split(" ");
  let result = +expr[0];
  for (let i = 1; i < expr.length - 1; i += 2) {
    if (expr[i] == '+') {
      result += +expr[i + 1];
    }
    if (expr[i] == '-') {
      result -= +expr[i + 1];
    }
  }
  return result;
}

module.exports = evaluate;