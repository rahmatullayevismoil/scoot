const elHumbergerBtn = document.querySelector(".hamburger-btn");
const elHeader = document.querySelector(".header");

const elFaqsBtn = document.querySelector(".faqs__btn");
const elFaqsItem = document.querySelector(".faqs__item");

elHumbergerBtn.addEventListener("click", function () {
  elHeader.classList.toggle("header--adoptive");
});

elFaqsBtn.addEventListener("click", function () {
  elFaqsItem.classList.toggle("faqs__item--active");
});
