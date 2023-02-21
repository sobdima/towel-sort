
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix === undefined) {
    return []
  } else {
    const arr = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnIdx = i % 2 === 0 ? j : (matrix[i].length - 1 - j);

        arr.push(matrix[i][columnIdx])
      }
    }
    return arr;
  }
}


/* const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

towelSort(matrix) */