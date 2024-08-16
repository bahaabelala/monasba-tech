document.querySelectorAll(".faq-item .toggle-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    // Close all other items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== icon.closest(".faq-item")) {
        item.classList.remove("active");
        item.querySelector(".toggle-icon").src = "images/plus.png";
      }
    });

    // Toggle the clicked item
    const faqItem = icon.closest(".faq-item");
    faqItem.classList.toggle("active");
    const isActive = faqItem.classList.contains("active");
    icon.src = isActive ? "images/minus.png" : "images/plus.png";
  });
});
const langBtns = document.querySelectorAll(".lang-btn");
const elementsToTranslate = document.querySelectorAll("[data-en][data-ar]");
const content = document.querySelector(".content");
const dotsImage = document.getElementById("dotsImage");
const Mob1_Image = document.getElementById("Mobile1");
const Mob2_Image = document.getElementById("Mobile2");
const cardf = document.getElementById("card-footer");
const back_footer = document.getElementById("back");
const pho1 = document.getElementById("pho1");
const container = document.querySelectorAll(".container");
langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.id === "en-btn" ? "en" : "ar";
    elementsToTranslate.forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
    content.style.direction = lang === "ar" ? "rtl" : "ltr";
    if (lang === "ar") {
      dotsImage.classList.add("arabic");
      pho1.classList.add("arabic");
      Mob1_Image.classList.add("arabic");
      Mob2_Image.classList.add("arabic");
      cardf.classList.add("arabic");
      back_footer.classList.add("arabic");
      container.forEach((c) => c.classList.add("arabic"));
    } else {
      dotsImage.classList.remove("arabic");
      Mob1_Image.classList.remove("arabic");
      Mob2_Image.classList.remove("arabic");
      pho1.classList.remove("arabic");
      cardf.classList.remove("arabic");
      back_footer.classList.remove("arabic");
      container.forEach((c) => c.classList.remove("arabic"));
    }
  });
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "100vw") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "100vw";
  }
}
