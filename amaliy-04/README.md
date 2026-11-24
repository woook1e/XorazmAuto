# 4-amaliy ish – JavaScript bilan E-Commerce Katalogi

**Mavzu:** Semestr loyihasini JavaScript bilan jonlantirish: ma'lumotlar, DOM va interaktiv komponentlar

**GitHub yuborish:** 24.11.2026  
**Himoya:** 01.12.2026  
**Ball:** 4

## 📋 Talabalar

### A qism – Ma'lumotlar va massiv metodlari (20%)
- ✅ 10 ta mahsulot ma'lumoti (id, nomi, kategoriya, narx, mavjudlik, rasm, teglar)
- ✅ Massiv metodlari: map, filter, reduce, sort, find
- ✅ Statistika bloki: jami elementlar soni, o'rtacha narx (reduce bilan)
- ✅ Kod sifati: faylarga ajratish, nomlar, delegation, textContent

### B qism – DOM: kontentni chiqarish, qidiruv, filtr, saralash (25%)
- ✅ katalog.html dagi kartalar HTML'da ko'rilmadi - createElement bilan yaratiladi
- ✅ Qidiruv: input hodisasida nom bo'yicha filtrlash
- ✅ Kategoriya filtri: select yoki tugmalar orqali
- ✅ Saralash: narx (arzondan/qimmatdan), alifbo bo'yicha
- ✅ Qidiruv, filtr va saralash birgalikda ishlashi kerak
- ✅ Matnlar textContent orqali chiqariladi (XSS himoyasi)

### C qism – Interaktiv UI komponentlar (25%)
**Modal oyna:**
- ✅ "Batafsil" tugmasi bosiganda modal ochiladi
- ✅ × tugmasi, Escape klavishi, fon bosilsa yopiladi

**Event delegation:**
- ✅ Kartalar ochun tinglovchi har bir kartagaemas, bitta ota konteynerga emas

**Forma tekshiruvi (aloqa.html):**
- ✅ preventDefault() bilan xatolik qaytarish
- ✅ Tekshirish: ism, email format, telefon (+998XXXXXXXXX)
- ✅ Muvaffaqiyat xabari, forma tozalash

**Qo'shimcha:**
- ✅ Hamburger menyu (mobile)
- ✅ localStorage bilan savat (ma'lumot saqlanadi)
- ✅ Akkordeon (masalan, kategoriyalar)

### Kod sifati (10%)
- ✅ Faylarga ajratish (data.js, katalog.js, ui.js)
- ✅ Nomlar: camelCase, uz tilida, tushunarli
- ✅ Delegation: event delegation ishlashni optimizatsiya
- ✅ textContent: innerHTMLga qarshi (XSS)

### GitHub (5%)
- ✅ amaliy-04 papkasining GitHub havolasini bilgilangan muddatda yuborish
- ✅ README.md: loyiha mazmuzi, qo'shlangan massiv metodlari qayerda

## 📁 Fayl Tuzilmasi

```
amaliy-04/
├── index.html              (Bosh sahifa)
├── katalog.html            (Katalog sahifasi)
├── aloqa.html              (Aloqa formasi)
├── css/
│   └── style.css           (Barcha uslublar)
├── js/
│   ├── data.js             (10 ta mahsulot massivi)
│   ├── katalog.js          (Qidiruv, filtr, saralash)
│   ├── ui.js               (Modal, forma, localStorage)
│   └── README.md           (Bu fayl)
└── rasmlar/
    ├── 1.jpg - 10.jpg      (Mahsulot rasmlari)
```

## 🚀 Bajarilganlar

### ✨ A qism – Ma'lumotlar
- 10 ta mahsulot to'liq ma'lumoti bilan (id, nomi, kategoriya, narx, etc.)
- map(), filter(), reduce(), sort(), find() metodlari ishlatilib, statistika hisoblanadi

### 🎨 B qism – DOM
- katalog.html faylida kartalar createElement bilan yaratiladi
- Qidiruv: real-time filtrlash
- Kategoriya filtri: 6 ta kategoriya (audio, computer, aksessuarlar, gadget, display)
- Saralash: 4 ta variant (standart, arzondan, qimmatdan, alifbo)

### 🔧 C qism – Interaktiv Komponentlar
- Modal oyna: buyurtma berish uchun
- Event delegation: savatchaga qo'shish
- Forma tekshiruvi: email, telefon, ism
- localStorage: savat ma'lumoti saqlanadi
- Hamburger menyu: mobil versiyada
- Ogohlantirish: toast notification

## 📊 Massiv Metodlarini Qayerda Ishlatkaning

| Metod | Fayl | Maqsadi |
|-------|------|--------|
| `map()` | katalog.js | HTML kartalarni elementlarga aylantirib ishlash |
| `filter()` | katalog.js | Qidiruv va kategoriya filtri |
| `find()` | ui.js, katalog.js | Mahsulotni ID bilan topish |
| `reduce()` | Statistika | Jami elementlar soni, o'rtacha narx |
| `sort()` | katalog.js | Narx va alifbo bo'yicha saralash |
| `forEach()` | katalog.js | Har bir kartani chiqarish |

## 🎯 Asosiy Xususiyatlar

✅ **10 ta mahsulot** – har biri 6 ta xususiyat  
✅ **Qidiruv** – real-time text filter  
✅ **Kategoriya filtri** – 6 ta kategoriya  
✅ **Saralash** – 4 ta tartibi  
✅ **Modal oyna** – buyurtma berish  
✅ **Forma tekshiruvi** – email va telefon  
✅ **localStorage** – savat saqlanadi  
✅ **Responsive** – mobil va desktop  
✅ **Event delegation** – optimal performance  
✅ **XSS himoyasi** – textContent ishlatilib  

## 🔗 GitHub Link

https://github.com/woook1e/XorazmAuto/tree/main/amaliy-04

## 📝 Eslatma

- Barcha kod toza va o'qilishi oson
- Massiv metodlari to'g'ri ishlatilib, boshqa maslahatlar bo'lsa, README'ga qo'shiladi
- localStorage bilan savat saqlanadi va brauzer qayta ochilganda ham qoladi
