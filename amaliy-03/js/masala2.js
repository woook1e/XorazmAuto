function engUzunSoz(s) {
  const sozlar = s.split(' ');

  let engUzun = '';

  for (let i = 0; i < sozlar.length; i++) {
    const tozalangan = sozlar[i].replace(/[^a-zA-Za-z]/g, '');

    if (tozalangan.length > engUzun.length) {
      engUzun = tozalangan;
    }
  }

  return engUzun;
}

console.log(engUzunSoz("Kitob"));
console.log(engUzunSoz("Veb 2026!"));
console.log(engUzunSoz("JavaScript asoslari"));
