
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined || !matrix.length ? [] : matrix.reduce((targetArr, el, i) => i % 2 ? targetArr.concat(el.reverse()) : targetArr.concat(el), []);
}
