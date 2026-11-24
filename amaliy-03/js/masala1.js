function raqamlarSoni(n) {
  let yigindi = 0;
  for (let i = 1; i <= n; i++) {
    yigindi += i;
  }
  return yigindi;
}

console.log(raqamlarSoni(5));
console.log(raqamlarSoni(1));
console.log(raqamlarSoni(100));
console.log(raqamlarSoni(0));
