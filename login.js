import { signupModal, formContainer, loginModal } from "./script.js";

const loginButton = document.querySelector(".login-button");
const signinButton = document.querySelector(".signup-button");
const loginInputUser = document.querySelector(".login-input-user");
const loginInputPass = document.querySelector(".login-input-pass");
const signupInputPass = document.querySelector(".sign-pass");
const signupInputUser = document.querySelector(".sign-user");
const signupInputGmail = document.querySelector(".sign-gmail");
const mainPage = document.querySelector(".main-page");
const mainContainer = document.querySelector(".main-container");

const quit = document.querySelector(".quit");

const account1 = {
  owner: "Samir",
  gmail_acc: "hello12@gmail.com",
  password: "098",
};

const account2 = {
  owner: "Ram Panta",
  gmail_acc: "helloworld12@gmail.com",
  password: "hello123",
};

const accounts = [account1, account2];

let currentAccount;

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.owner === loginInputUser.value);
  if (currentAccount?.password === loginInputPass.value) {
    loginInputUser.value = "";
    loginInputPass.value = "";
    formContainer.classList.add("hide-page");
    mainContainer.classList.add("hide-page");
    mainPage.classList.remove("hide-page");
    loginModal.classList.remove("display");
  } else {
    loginInputUser.value = "";
    loginInputPass.value = "";
    setTimeout(() => {
      loginModal.classList.remove("display");
      formContainer.classList.remove("disable");
    }, 1000);
  }
});

signinButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    signupInputGmail.value &&
    signupInputPass.value &&
    signupInputUser.value
  ) {
    const newAccount = {
      owner: signupInputUser.value,
      gmail_acc: signupInputGmail.value,
      password: signupInputPass.value,
    };
    accounts.push(newAccount);
    setTimeout(() => {
      signupModal.classList.remove("display");
      formContainer.classList.remove("disable");
    }, 1000);
  }
});

quit.addEventListener("click", function () {
  formContainer.classList.remove("hide-page");
  mainContainer.classList.remove("hide-page");
  mainPage.classList.add("hide-page");
  formContainer.classList.remove("disable");
});
