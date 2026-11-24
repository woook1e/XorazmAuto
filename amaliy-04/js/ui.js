let savat = JSON.parse(localStorage.getItem("savat")) || [];

function savatchagaQosh(id) {
  const mahsulot = mahsulotlar.find(m => m.id === id);
  const mavjud = savat.find(item => item.id === id);

  if (mavjud) {
    mavjud.soni++;
  } else {
    savat.push({ ...mahsulot, soni: 1 });
  }

  localStorage.setItem("savat", JSON.stringify(savat));
  savatSoniniYangilash();
  ogohlantir("✅ Savatchaga qo'shildi!");
}

function savatSoniniYangilash() {
  const jami = savat.reduce((sum, item) => sum + item.soni, 0);
  const badge = document.getElementById("savat-soni");
  if (badge) {
    badge.textContent = jami;
    badge.style.display = jami > 0 ? "block" : "none";
  }
}

function hamburgerMenuniOchish() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("ochiq");
}

function ogohlantir(xabar) {
  const alert = document.createElement("div");
  alert.className = "ogohlantir";
  alert.textContent = xabar;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.classList.add("ko-rinish");
  }, 10);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}

function modalni(amal) {
  const modal = document.getElementById("modal");
  if (amal === "ochish") {
    modal.classList.add("ochiq");
  } else {
    modal.classList.remove("ochiq");
  }
}

function modalni(amal) {
  const modal = document.getElementById("modal");
  const fon = modal?.querySelector(".modal-fon");

  if (amal === "ochish") {
    modal?.classList.add("ochiq");
  } else {
    modal?.classList.remove("ochiq");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  savatSoniniYangilash();

  const formaBitta = document.getElementById("forma");
  if (formaBitta) {
    formaBitta.addEventListener("submit", (e) => {
      e.preventDefault();

      const ism = document.getElementById("ism")?.value;
      const email = document.getElementById("email")?.value;
      const telefon = document.getElementById("telefon")?.value;

      if (!ism || !email || !telefon) {
        ogohlantir("❌ Barcha maydonlarni to'ldiring!");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        ogohlantir("❌ Email noto'g'ri!");
        return;
      }

      ogohlantir("✅ Buyurtma qabul qilindi!");
      formaBitta.reset();
      modalni("yopish");
    });
  }

  const closeModalBtn = document.querySelector(".modal-close");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => modalni("yopish"));
  }

  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modalni("yopish");
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalni("yopish");
    }
  });
});
