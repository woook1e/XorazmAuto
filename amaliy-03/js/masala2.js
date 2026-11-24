// 2-masala: Satrlar - osont
// Funksiya: engUzunSoz(s)
// Satr berilgan. Undagi eng uzun so'zni qaytaring.
// Lotin harflari sonini qaytaring, bo'sh joy va belgili hisoblanmaydi.

function engUzunSoz(s) {
  // So'zlarni bo'sh joy bo'yicha ajratamiz
  const sozlar = s.split(' ');

  let engUzun = '';

  for (let i = 0; i < sozlar.length; i++) {
    // Faqat harflarni saqlash (raqamlar va belgili olib tashlash)
    const tozalangan = sozlar[i].replace(/[^a-zA-Za-z]/g, '');

    if (tozalangan.length > engUzun.length) {
      engUzun = tozalangan;
    }
  }

  return engUzun;
}

// Testlar
console.log(engUzunSoz("Kitob"));           // kutilgan: 3
console.log(engUzunSoz("Veb 2026!"));       // kutilgan: 2
console.log(engUzunSoz("JavaScript asoslari")); // kutilgan: JavaScript
