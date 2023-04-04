// !=================================import libraries ==================================
import throttle from 'lodash.throttle';
// !=================  Block "Declare of constants & variables"==========================
let data = {
  email:   "",
  message: "",
};
const KEY_DATA = "feedback-form-state";
const Form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const inputTextArea = document.querySelector("textarea");

// !======================= Block "Main programm" ===================================
repairForLocalStorage();
Form.addEventListener("input", throttle(writeInputToLocalStorage,500));
Form.addEventListener("submit", sendForm);

// !===================== Block "Declare of functions" =============================

function repairForLocalStorage() {
const repairData = JSON.parse(localStorage.getItem(KEY_DATA));
  if (repairData === null) {
    return;
  } else {
    inputEmail.value = repairData.email || "";
    inputTextArea.textContent = repairData.message || "";
    data.email = repairData.email || "";
    data.message = repairData.message || "";
    }
}
function writeInputToLocalStorage(event) {
  // if (event.target.value = "") { return; }
  console.log("event.target.value:", event.target.value);
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY_DATA, JSON.stringify(data));
};

function sendForm(event) {
  event.preventDefault();

  if (data.email === "" || data.message === "")
  { return };

  localStorage.removeItem(KEY_DATA);
  event.currentTarget.reset();

  data = {
     email:   "",
     message: "",
  };

  console.log("data after clear of feedback-form",data);
};

// !================================= EOF =========================================
