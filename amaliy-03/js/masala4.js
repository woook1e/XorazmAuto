// 4-masala: Satrlar va sonlar - o'rtacha
// Funksiya: tubSonlariyigindi()
// Bank karta raqami satr ko'rinishida berilgan (bo'sh joy kerak bo'lishi mumkin).
// Luhn algoritmi bilan tekshiring: o'ngdan boshlab har ikkinchi raqamni 2 ga ko'paytiramiz.
// Natija 10 dan katta bo'lsa 9 dan ayiramiz; barcha raqamlar yig'indisini 10 ga bo'lsak true qaytarish.

function tubSonlariyigindi(raqam) {
  // Raqamdan faqat raqamlarni olamiz
  const tozalangan = raqam.toString().replace(/\D/g, '');

  // Agar raqam mavjud bo'lmasa
  if (tozalangan.length === 0) {
    return 0;
  }

  let yigindi = 0;
  let ikkinchi = false;

  // O'ngdan chapga qarab aylanib chiqamiz
  for (let i = tozalangan.length - 1; i >= 0; i--) {
    let raqam = parseInt(tozalangan[i]);

    // Har ikkinchi raqamni 2 ga ko'paytiramiz
    if (ikkinchi) {
      raqam *= 2;

      // Agar 10 dan katta bo'lsa, 9 dan ayiramiz
      if (raqam > 9) {
        raqam -= 9;
      }
    }

    yigindi += raqam;
    ikkinchi = !ikkinchi; // Keyingi raqam uchun flagi o'zgartiramiz
  }

  // Agar yig'indi 10 ga bo'linsa true, aks holda false
  return yigindi % 10 === 0;
}

// Testlar
console.log(tubSonlariyigindi("4539 1488 0343 6467"));  // kutilgan: true
console.log(tubSonlariyigindi("1234 5678 9012 3456"));  // kutilgan: false
console.log(tubSonlariyigindi("79927398713"));          // kutilgan: true (valid VISA)
