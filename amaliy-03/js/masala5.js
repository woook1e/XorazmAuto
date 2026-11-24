// 5-masala: Massivlar va ob'yektlar - o'rtacha
// Funksiya: diagonallar(matritsa)
// Ikki o'lchovli massiv (matritsa) berilgan. Uni filterlash kerak.
// Qator indeksi = ustun indeksiga teng bo'lgan elementlarni olamiz (asosiy diagonal).
// Natijaviy massivni qaytaramiz.

function diagonallar(matritsa) {
  // Diagonaldagi elementlarni saqlash uchun massiv
  const diagonal = [];

  // Har bir qator uchun
  for (let i = 0; i < matritsa.length; i++) {
    // Qator mavjud bo'lsa va i-indeksda element bo'lsa
    if (matritsa[i] && matritsa[i][i] !== undefined) {
      diagonal.push(matritsa[i][i]);
    }
  }

  return diagonal;
}

// Testlar
console.log(diagonallar([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// kutilgan: [1, 5, 9]

console.log(diagonallar([["html", "css"], ["js"]]));
// kutilgan: ["html"]

console.log(diagonallar([[1, 2], [3, 4], [5, 6]]));
// kutilgan: [1, 4]

console.log(diagonallar([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]));
// kutilgan: [1, 6, 11]
