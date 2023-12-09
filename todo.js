const addButton = document.querySelector(".add");
const inputFieldInput = document.querySelector(".add-list");
const addingTodos = document.querySelector(".adding-todos");
const remainingListTodos = document.querySelector(".remaining-list-todos");
const doneListTodos = document.querySelector(".done-list-todos");
const listParagraph = document.querySelector(".list");
const remain = document.querySelector(".remain");
const done = document.querySelector(".done");
const todoIcon = document.querySelector(".todo-icon");
const todoBlock = document.querySelector(".todo-block");
const todoContainer = document.querySelector(".todo-container");
const cutTodo = document.querySelector(".cut-todo");
const delTodo = document.querySelector(".del-todo");

// Load todos from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded working");
  const savedTodos = getTodosFromLocalStorage();
  renderTodos(savedTodos);
});

// Function to save todos to localStorage
function saveTodosToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to get todos from localStorage
function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

// Function to render todos on the page
function renderTodos(todos) {
  addingTodos.innerHTML = "";
  todos.forEach((todo) => {
    const html = `
    <div class="remaining-list-todos">
      <i class="fa-regular fa-circle"></i>
      <p class="list">${todo}</p>
      <div class="del-todo">&times;</div>
    </div>`;
    addingTodos.insertAdjacentHTML("afterbegin", html);
  });
}

// Event listener for adding a new todo
addButton.addEventListener("click", function () {
  if (inputFieldInput.value.trim().length > 0) {
    const todos = getTodosFromLocalStorage();
    todos.push(inputFieldInput.value);
    saveTodosToLocalStorage(todos);
    renderTodos(todos);
    inputFieldInput.value = "";
  }
});

// Event listener for cutting and deleting a todo
addingTodos.addEventListener("click", function (e) {
  if (e.target.classList.contains("list")) {
    e.target.classList.toggle("cut-text");
  }
  if (e.target.classList.contains("del-todo")) {
    const parentElement = e.target.parentElement;
    const todoText = parentElement.querySelector(".list").innerText;

    e.stopPropagation();
    let savedTodos = getTodosFromLocalStorage();
    savedTodos = savedTodos.filter((todo) => todo !== todoText);
    saveTodosToLocalStorage(savedTodos);
    renderTodos(savedTodos);
  }
});

const placeholderText = inputFieldInput.getAttribute("placeholder");

inputFieldInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    this.value = "";
    this.blur();
  }
});

document.addEventListener("click", function (e) {
  if (!inputFieldInput.contains(e.target)) {
    inputFieldInput.value = "";
    inputFieldInput.placeholder = placeholderText;
  }
});

todoIcon.addEventListener("click", function () {
  todoContainer.classList.remove("hide-page");
  todoBlock.classList.remove("hide-page");
});

todoContainer.addEventListener("click", function (e) {
  const checkInside = !todoBlock.contains(e.target);
  const checkContain = !todoBlock.classList.contains("hide-page");
  const checkTarget = e.target !== todoBlock;

  if (checkContain && checkInside && checkTarget) {
    todoBlock.classList.add("hide-page");
    todoContainer.classList.add("hide-page");
  }
});

cutTodo.addEventListener("click", function () {
  todoBlock.classList.add("hide-page");
  todoContainer.classList.add("hide-page");
});
