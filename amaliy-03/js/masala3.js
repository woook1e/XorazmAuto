// 3-masala: Massivlar - osont
// Funksiya: ikkinchiEngKatta(arr)
// Ikki elementdan iborat massiv berilgan. Ikkinchi eng katta elementni topish.
// Asl massiv o'zgarmasligi kerak. 0 qaytsin, agar ikkita yoki undan ko'p unikal qiymatlar bo'lmasa.

function ikkinchiEngKatta(arr) {
  // Asl massivni o'zgartirishdan himoya qilish uchun copy yaratamiz
  const surtilingan = [...arr].sort((a, b) => b - a);

  // Unikal qiymatlarni topamiz
  const unikal = [];
  for (let i = 0; i < surtilingan.length; i++) {
    if (unikal.length === 0 || unikal[unikal.length - 1] !== surtilingan[i]) {
      unikal.push(surtilingan[i]);
    }
  }

  // Agar 2 ta unikal qiymat bo'lsa, ikkinchisini qaytaramiz
  if (unikal.length >= 2) {
    return unikal[1];
  }

  // Aks holda 0 qaytaramiz
  return 0;
}

// Testlar
console.log(ikkinchiEngKatta([4, 5, 3, 1]));    // kutilgan: 4
console.log(ikkinchiEngKatta([7, 9]));           // kutilgan: 7
console.log(ikkinchiEngKatta([5, 5, 5]));        // kutilgan: 0 (faqat bitta unikal qiymat)
console.log(ikkinchiEngKatta([10, 20, 15, 5])); // kutilgan: 15
