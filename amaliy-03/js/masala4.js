function tubSonlariyigindi(raqam) {
  const tozalangan = raqam.toString().replace(/\D/g, '');

  if (tozalangan.length === 0) {
    return 0;
  }

  let yigindi = 0;
  let ikkinchi = false;

  for (let i = tozalangan.length - 1; i >= 0; i--) {
    let raqam = parseInt(tozalangan[i]);

    if (ikkinchi) {
      raqam *= 2;

      if (raqam > 9) {
        raqam -= 9;
      }
    }

    yigindi += raqam;
    ikkinchi = !ikkinchi;
  }

  return yigindi % 10 === 0;
}

console.log(tubSonlariyigindi("4539 1488 0343 6467"));
console.log(tubSonlariyigindi("1234 5678 9012 3456"));
console.log(tubSonlariyigindi("79927398713"));
