function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbgs = document.querySelectorAll(".bground");
const modalbg = modalbgs[0];
const modalbgConfirm = modalbgs[1];

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButtons = document.querySelectorAll(".close"); //bouton pour fermer la modale


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

closeButtons.forEach((btn, i) => {

    btn.addEventListener("click", () => { //au clique sur le bouton pour fermer 
        modalbgs[i].style.display = "none"; //tout le bloc du formulaire disparrait 
    });


});