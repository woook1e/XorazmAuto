let filtrlashlanganMahsulotlar = [...mahsulotlar];

function chiqarish(royxat) {
  const konteyner = document.getElementById("katalog");
  konteyner.innerHTML = "";

  royxat.forEach(m => {
    const karta = document.createElement("article");
    karta.className = "karta";
    karta.dataset.id = m.id;

    const h3 = document.createElement("h3");
    h3.textContent = m.nomi;

    const rasm = document.createElement("img");
    rasm.src = m.rasm;
    rasm.alt = m.nomi;

    const narx = document.createElement("p");
    narx.className = "narx";
    narx.textContent = m.narx.toLocaleString('uz-UZ') + " so'm";

    const holat = document.createElement("p");
    holat.className = m.mavjud ? "mavjud" : "sotilgan";
    holat.textContent = m.mavjud ? "Mavjud" : "Sotilgan";

    const tugma = document.createElement("button");
    tugma.textContent = m.mavjud ? "Savatchaga qo'sh" : "Narxni kuting";
    tugma.disabled = !m.mavjud;
    tugma.onclick = () => savatchagaQosh(m.id);

    karta.append(rasm, h3, narx, holat, tugma);
    konteyner.append(karta);
  });

  const soni = document.getElementById("soni");
  soni.textContent = royxat.length;
}

function qidiruv(text) {
  if (!text.trim()) {
    filtrlashlanganMahsulotlar = [...mahsulotlar];
  } else {
    filtrlashlanganMahsulotlar = mahsulotlar.filter(m =>
      m.nomi.toLowerCase().includes(text.toLowerCase())
    );
  }
  chiqarish(filtrlashlanganMahsulotlar);
}

function kategoriyaBoychiFiltrlash(kat) {
  if (kat === "hammasi") {
    filtrlashlanganMahsulotlar = [...mahsulotlar];
  } else {
    filtrlashlanganMahsulotlar = mahsulotlar.filter(m => m.kategoriya === kat);
  }
  chiqarish(filtrlashlanganMahsulotlar);
  document.querySelectorAll("select")[0].value = kat;
}

function saralash(tartibi) {
  if (tartibi === "arzondan") {
    filtrlashlanganMahsulotlar.sort((a, b) => a.narx - b.narx);
  } else if (tartibi === "qimmatdan") {
    filtrlashlanganMahsulotlar.sort((a, b) => b.narx - a.narx);
  } else if (tartibi === "alifbo") {
    filtrlashlanganMahsulotlar.sort((a, b) => a.nomi.localeCompare(b.nomi));
  }
  chiqarish(filtrlashlanganMahsulotlar);
}

document.addEventListener("DOMContentLoaded", () => {
  chiqarish(mahsulotlar);

  const qidiruvInput = document.getElementById("qidiruv");
  if (qidiruvInput) {
    qidiruvInput.addEventListener("input", (e) => qidiruv(e.target.value));
  }

  const kategoriyaSelect = document.querySelectorAll("select")[0];
  if (kategoriyaSelect) {
    kategoriyaSelect.addEventListener("change", (e) => kategoriyaBoychiFiltrlash(e.target.value));
  }

  const saralashSelect = document.querySelectorAll("select")[1];
  if (saralashSelect) {
    saralashSelect.addEventListener("change", (e) => saralash(e.target.value));
  }
});
