function ikkinchiEngKatta(arr) {
  const surtilingan = [...arr].sort((a, b) => b - a);

  const unikal = [];
  for (let i = 0; i < surtilingan.length; i++) {
    if (unikal.length === 0 || unikal[unikal.length - 1] !== surtilingan[i]) {
      unikal.push(surtilingan[i]);
    }
  }

  if (unikal.length >= 2) {
    return unikal[1];
  }

  return 0;
}

console.log(ikkinchiEngKatta([4, 5, 3, 1]));
console.log(ikkinchiEngKatta([7, 9]));
console.log(ikkinchiEngKatta([5, 5, 5]));
console.log(ikkinchiEngKatta([10, 20, 15, 5]));
