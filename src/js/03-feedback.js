// !=================================import libraries ==================================
import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';
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
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY_DATA, JSON.stringify(data));
};

function sendForm(event) {
  event.preventDefault();

  if (data.email === "")
  { return Notiflix.Notify.failure(`❌ Please fill the field Email`);
  };
  if (data.message === "") {
    Notiflix.Notify.success(`✅ Оnly your Email has been received`);
  } else {
    Notiflix.Notify.success(`✅ Your request has been received successfully`)
  };
  // Clear data of localStorage
  localStorage.removeItem(KEY_DATA);

  // Clear date of form
  event.currentTarget.reset();
  inputEmail.value = "";
  inputTextArea.textContent = "";

  console.log("data of feedback-form SENT on back-end!!!", data);

  // Clear data of script for NEXT USE!!!
  data = {
     email:   "",
     message: "",
  };
  console.log("data of feedback-form CLEAR AFTER SENT on back-end!!!", data);


};

// !================================= EOF =========================================
