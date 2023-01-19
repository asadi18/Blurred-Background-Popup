const containerEl = document.querySelector(".container");
const popupEl = document.querySelector(".popup-container");
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");

const btnClick = () => {
  containerEl.classList.add("active");
  popupEl.classList.remove("active");
};

const closePopup = () => {
  containerEl.classList.remove("active");
  popupEl.classList.add("active");
};
btnEl.addEventListener("click", btnClick);
closeIconEl.addEventListener("click", closePopup);
