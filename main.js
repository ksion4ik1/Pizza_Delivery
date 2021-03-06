const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



// day 1

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const passInput = document.querySelector("#password");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");


let login = localStorage.getItem("Delivery");




function toogleModalAuth() {
  loginInput.style.borderColor = "";
  passInput.style.borderColor = "";
  modalAuth.classList.toggle("is-open");
}


function autorized(){

    function logOut(){
        login = null;
        localStorage.removeItem("Delivery");
        buttonAuth.style.display = "";
        userName.style.display = "";
        buttonOut.style.display = "";
        buttonOut.removeEventListener("click", logOut);
        checkAuth();
    }


  console.log("Авторизирован");

  userName.textContent = login;

  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";
  buttonOut.addEventListener("click", logOut);
}

 function maskInput(string){
  return !!string.trim("")
 }

function notautorized(){
  console.log("Не авторизирован");
  
  
  function logIn(event){
    event.preventDefault();
   //trim-удаление пробелов
    if   (maskInput(loginInput.value.trim())){     
    login = loginInput.value;
    localStorage.setItem("Delivery", login);
    toogleModalAuth();
    logInForm.reset()
    buttonAuth.removeEventListener("click", toogleModalAuth);
    closeAuth.removeEventListener("click", toogleModalAuth);
    logInForm.removeEventListener("submit", logIn);
    checkAuth();
  } else{
    loginInput.style.borderColor = "red";
    passInput.style.borderColor = "red";
  }
}

  
  buttonAuth.addEventListener("click", toogleModalAuth);
  closeAuth.addEventListener("click", toogleModalAuth);
  logInForm.addEventListener("submit", logIn);
}

function checkAuth(){

    if (login) {
      autorized();
    } else{
      notautorized();
    }
}

checkAuth();