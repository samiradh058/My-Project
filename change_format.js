const hamBurger = document.querySelector(".hamburger-menu");
const hiddenContent = document.querySelector(".hide");
const xButton = document.querySelector(".x-button");
const mainBlockBody = document.querySelector(".main-block-body");
const changeFormat = document.querySelector(".change-format");

hamBurger.addEventListener("click", function (e) {
  mainBlockBody.classList.add("hide-page");
  changeFormat.classList.remove("hide-page");
});

xButton.addEventListener("click", function () {
  changeFormat.classList.add("hide-page");
  mainBlockBody.classList.remove("hide-page");
});

hamBurger.addEventListener("mouseover", function () {
  hiddenContent.style.display = "block";
  hiddenContent.style.color = "white";
  hiddenContent.style.whiteSpace = "nowrap";
  hiddenContent.style.fontFamily = "Josefin Sans";
  hiddenContent.style.top = '100px';
});

hamBurger.addEventListener("mouseout", function () {
  hiddenContent.style.display = "none";
});
