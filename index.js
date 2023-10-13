const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"],
];
const whereIsWaldo = (matrix) => {
  const waldo = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== waldo) {
        let diffarr = [i + 1, j + 1]
        console.log(diffarr)
        return diffarr;
      }
    }
  }
  return waldo;
};
whereIsWaldo(example);







