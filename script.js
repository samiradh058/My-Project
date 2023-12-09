const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");
const ellipsisIcon = document.querySelector(".fa-ellipsis");
const optionsThree = document.querySelector(".options-three");
const gifImage = document.querySelector(".gif");
const investText = document.querySelector(".hover-text");
const rateBox = document.querySelector(".rate-box");
const rate = document.querySelector(".rateus");
const emo = document.querySelector(".emo");
const skip = document.querySelector(".skip");
const searchField = document.querySelector(".search-field");  // Main
const searchFieldTop = document.querySelector('.search-input');
const searchBox = document.querySelector('.search');
const searchIcon  = document.querySelector('.search i');

export { signupModal, formContainer, loginModal };


// Remove and add login and signup page

signupBtn.addEventListener("click", () => {
  signupModal.classList.add("display");
  formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("display");
  formContainer.classList.add("disable");
});

signupX.addEventListener("click", () => {
  signupModal.classList.remove("display");
  formContainer.classList.remove("disable");
});

loginX.addEventListener("click", () => {
  loginModal.classList.remove("display");
  formContainer.classList.remove("disable");
});

formContainer.addEventListener("click", function (e) {
  const checkInside =
    !signupModal.contains(e.target) && !loginModal.contains(e.target);
  const checkContain =
    signupModal.classList.contains("display") ||
    loginModal.classList.contains("display");
  const checkTarget = e.target !== signupModal && e.target !== loginModal;

  if (checkContain && checkInside && checkTarget) {
    signupModal.classList.remove("display");
    loginModal.classList.remove("display");
    formContainer.classList.remove("disable");
  }
});

ellipsisIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  optionsThree.classList.toggle("make-visible");
});

document.addEventListener("click", function (e) {
  if (
    optionsThree.classList.contains("make-visible") &&
    !optionsThree.contains(e.target)
  ) {
    optionsThree.classList.remove("make-visible");
  }

  if (
    rateBox.classList.contains("make-visible") &&
    (e.target === skip ||
      e.target.classList.contains("emo") ||
      e.target === rate)
  ) {
    rateBox.classList.remove("make-visible");
  }
});

rate.addEventListener("click", function (e) {
  e.stopPropagation();
  rateBox.classList.toggle("make-visible");
});

// Main Page search: edit
const placeholderText = searchField.getAttribute("placeholder");

searchField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    this.value = "";
    this.blur();
  }
});

document.addEventListener("click", function (e) {
  if (!searchField.contains(e.target)) {
    searchField.value = "";
    searchField.placeholder = placeholderText;
  }
});

// Top search
searchIcon.addEventListener('click', (e) => {
  searchBox.classList.add('change')
  e.target.previousElementSibling.focus();
})

searchFieldTop.addEventListener('focusout', () => {
  searchBox.classList.remove('change');
})