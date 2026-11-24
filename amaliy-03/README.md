# 3-amaliy ish – JavaScript asoslari

**Talaba:** Hudoyberganov Azizbek Hikmat o'g'li  
**Guruh:** 941-24  
**Variant:** 15

## Masalalar

| # | Funksiya | Holati |
|---|----------|--------|
| 1 | raqamlarSoni(n) | bajarildi |
| 2 | engUzunSoz(s) | bajarildi |
| 3 | ikkinchiEngKatta(arr) | bajarildi |
| 4 | tubSonlariyigindi(raqam) | bajarildi |
| 5 | diagonallar(matritsa) | bajarildi |

## Ishga tushirish

```bash
# Faylni brauzerda ochish:
# index.html ni ochib, F12 → Console'ga qarang

# Yoki Node.js orqali:
node js/masala1.js
node js/masala2.js
node js/masala3.js
node js/masala4.js
node js/masala5.js
```

## Fayl tuzilmasi

```
amaliy-03/
├── index.html      (barcha masalalarni ishga tushirish)
├── README.md       (bu fayl)
└── js/
    ├── masala1.js  (1-masala: Sonlar - raqamlarSoni)
    ├── masala2.js  (2-masala: Satrlar - engUzunSoz)
    ├── masala3.js  (3-masala: Massivlar - ikkinchiEngKatta)
    ├── masala4.js  (4-masala: Satrlar va sonlar - tubSonlariyigindi)
    └── masala5.js  (5-masala: Massivlar va ob'yektlar - diagonallar)
```

## Masalalar tavsifi

### 1. Sonlar - raqamlarSoni(n)
n soni berilgan. 1 dan n gacha bo'lgan raqamlarni qo'shib hisoblang.

**Misol:**
- raqamlarSoni(5) → 15 (1+2+3+4+5)
- raqamlarSoni(100) → 5050

### 2. Satrlar - engUzunSoz(s)
Satrda eng uzun so'zni topib qaytaring.

**Misol:**
- engUzunSoz("Kitob") → "Kitob"
- engUzunSoz("JavaScript asoslari") → "JavaScript"

### 3. Massivlar - ikkinchiEngKatta(arr)
Massivda ikkinchi eng katta elementni topamiz. Agar 2 ta unikal qiymat bo'lmasa, 0 qaytaramiz.

**Misol:**
- ikkinchiEngKatta([4, 5, 3, 1]) → 4
- ikkinchiEngKatta([5, 5, 5]) → 0

### 4. Satrlar va sonlar - tubSonlariyigindi(raqam)
Bank karta raqamini Luhn algoritmi bo'yicha tekshiramiz.

**Misol:**
- tubSonlariyigindi("4539 1488 0343 6467") → true (valid karta)

### 5. Massivlar va ob'yektlar - diagonallar(matritsa)
Matritsa asosiy diagonalining elementlarini qaytaramiz.

**Misol:**
- diagonallar([[1,2,3],[4,5,6],[7,8,9]]) → [1, 5, 9]
