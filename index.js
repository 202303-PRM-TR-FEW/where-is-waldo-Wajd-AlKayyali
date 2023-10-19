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
        let solution = [i + 1, j + 1]
        console.log(solution)
        return solution;
      }
      else if (
        (matrix[0][1] !== waldo && matrix[0][2] !== waldo) ||
        (matrix[0][2] === undefined && matrix[1][1] !== waldo)
      ) {
        //Dealt with my edge case here.
        let solution = [i + 1, j + 1];
        return solution;
      }
    }
  }
};
whereIsWaldo(example);



// function wheresWaldo(array) {
//   const first = array[0][0];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] !== first) {
//         let solution = [i + 1, j + 1];
//         return solution;
//       } else if (
//         (array[0][1] !== first && array[0][2] !== first) ||
//         (array[0][2] === undefined && array[1][1] !== first)
//       ) {
//         //Dealt with my edge case here.
//         let solution = [i + 1, j + 1];
//         return solution;
//       }
//     }
//   }
// }




