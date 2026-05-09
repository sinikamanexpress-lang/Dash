// POPUP

const popup = document.getElementById("popup");

function showPopup(){

  popup.classList.add("show");

  setTimeout(() => {

    popup.classList.remove("show");

  },2000);

}

// ACTION BUTTONS

const actionButtons =
document.querySelectorAll(".action-btn");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    showPopup();

    if(navigator.vibrate){
      navigator.vibrate(40);
    }

  });

});

// NAV BUTTONS

const navButtons =
document.querySelectorAll(".nav-btn");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    showPopup();

  });

});

// CENTER BUTTON

const centerBtn =
document.querySelector(".center-btn");

centerBtn.addEventListener("click", () => {

  showPopup();

});

// DARK MODE

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});
