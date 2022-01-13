const http = new XMLHttpRequest();
const data = new FormData();

const suoliBtn = document.getElementById("souliBtn");
const signUpBtn = document.getElementById("signUpBtn");
const startSuoliBtn = document.getElementById("startSuoli");
const backToMainBtn = document.getElementById("backToMainBtn");
const logInBtn = document.getElementById("logInBtn");

const form = document.querySelector("form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const SUemail = document.getElementById("SUemail");
const SUpassword = document.getElementById("SUpassword");

const souliFormDiv = document.getElementById("suoli");
const souliForms = souliFormDiv.querySelectorAll("div");
const suoliMessenger = document.getElementById("suoliMessenger");
const divMsg = document.querySelector(".signUpMsg");
const mainDiv = document.getElementById("mainDiv");
const suoliDiv = document.getElementById("suoli");

const directToMainDiv = () => {
  suoliMessenger.classList.toggle("visible");
  divMsg.classList.toggle("visible");
  mainDiv.classList.toggle("flex");
  suoliDiv.classList.toggle("flex");
};

const suoliBtnHandler = () => {
  souliForms[0].classList.toggle("visibility");
  souliForms[1].classList.toggle("visibility");
};

const signUpBtnHandler = () => {
  let isTheInputOk = true;
  const val = [firstName, lastName, SUemail, SUpassword];
  for (let i of val) {
    if (i.value === "") {
      i.classList.add("error");
      i.placeholder = `Incorrect ${i.name}`;
      isTheInputOk = false;
    } else {
      i.classList.remove("error");
    }
  }
  if (isTheInputOk === true) {
    divMsg.classList.toggle("visible");
    suoliMessenger.classList.toggle("visible");

    http.open("POST", "/", true);
    http.setRequestHeader("content-type","application/json");

    const uObj = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: SUemail.value,
      password: SUpassword.value,
    };

    const data=JSON.stringify(uObj);

    http.onload = ()=>{
      console.log(http.response);
    };


    http.send(data);
    
    suoliMessenger.addEventListener("click", suoliMessengerHandler);
    backToMainBtn.addEventListener("click", backToMainBtnHandler);

  } else {

    alert("You need to provide us with all the information required !");

  }
};

const suoliMessengerHandler = () => {
  directToMainDiv();
};

const backToMainBtnHandler = () => {
  directToMainDiv();
};

const startSuoliHandler = () => {
  mainDiv.classList.toggle("flex");
  suoliDiv.classList.toggle("flex");
};

const logInBtnHandler = () => {
  http.open('GET','/logIn',ture);
  http.getResponseHeader();
};

suoliBtn.addEventListener("click", suoliBtnHandler);
signUpBtn.addEventListener("click", signUpBtnHandler);
startSuoliBtn.addEventListener("click", startSuoliHandler);
logInBtn.addEventListener("click",logInBtnHandler);
