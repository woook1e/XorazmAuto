// 1-masala: Sonlar - osont
// Funksiya: raqamlarSoni(n)
// n soni va manfiy bo'lmagan butun n berilgan.
// a "n" operatori va Math.pow ishlatmasdan, sikl bilan hisobang.

function raqamlarSoni(n) {
  let yigindi = 0;
  for (let i = 1; i <= n; i++) {
    yigindi += i;
  }
  return yigindi;
}

// Testlar
console.log(raqamlarSoni(5));   // kutilgan: 15
console.log(raqamlarSoni(1));   // kutilgan: 1
console.log(raqamlarSoni(100)); // kutilgan: 5050
console.log(raqamlarSoni(0));   // kutilgan: 0 (chegaraviy holat)
