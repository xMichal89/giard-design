// ----------------------------------------- sekcja slajd -----------------------------------------
let arrowL = document.querySelector(".arrowLeft");
let arrowR = document.querySelector(".arrowRight");
let slider = document.querySelector("#slider");

let sectionIndex = 0;

arrowR.addEventListener("click", function () {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 0;
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
});

arrowL.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 2;
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
});

// ----------------------------------------- sekcja oferta -------------------------------------
let offerItem = document.querySelectorAll(".offer-item");

// ------------------------------------------ sekcja projekt ----------------------------------
for (const item of offerItem) {
  item.addEventListener("click", function () {
    location.href = "#project";
  });
}

const masonry = new Macy({
  container: ".images",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    576: 1,
    768: 2,
    992: 3,
  },
  margin: {
    x: 20,
    y: 20,
  },
});

let projectBtn = document.querySelector(".projectBtn");
let project = document.querySelector("#project");
let images = document.querySelector(".images");

projectBtn.addEventListener("click", function () {
  document.getElementById("imgSection").classList.remove("images");
  project.style.height = "100%";
  project.style.overflow = "visible";
  projectBtn.style.display = "none";
});
// ------ popup --------------
const imageItems = document.querySelectorAll(".image-item");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup__img");
const popupArrowLeft = document.querySelector(".popup__arrow--left");
const popupArrowRight = document.querySelector(".popup__arrow--right");

let currentPopupImgIndex;

imageItems.forEach((imageitem, index) => {
  imageitem.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popupImg.src = e.target.src;
    currentPopupImgIndex = index;
  });
});

const popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", function () {
  popup.classList.add("hidden");
});

popupArrowRight.addEventListener("click", function () {
  if (currentPopupImgIndex === imageItems.length - 1) {
    currentPopupImgIndex = 0;
  } else {
    currentPopupImgIndex++;
  }
  popupImg.src = imageItems[currentPopupImgIndex].src;
});

popupArrowLeft.addEventListener("click", function () {
  if (currentPopupImgIndex === 0) {
    currentPopupImgIndex = imageItems.length - 1;
  } else {
    currentPopupImgIndex--;
  }
  popupImg.src = imageItems[currentPopupImgIndex].src;
});
