function diagonallar(matritsa) {
  const diagonal = [];

  for (let i = 0; i < matritsa.length; i++) {
    if (matritsa[i] && matritsa[i][i] !== undefined) {
      diagonal.push(matritsa[i][i]);
    }
  }

  return diagonal;
}

console.log(diagonallar([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(diagonallar([["html", "css"], ["js"]]));

console.log(diagonallar([[1, 2], [3, 4], [5, 6]]));

console.log(diagonallar([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]));
