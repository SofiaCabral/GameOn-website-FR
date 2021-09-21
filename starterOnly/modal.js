function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
//Ancien code
//permettait de prendre qu'une div avec tout le contenu pour les formulaires
// const modalbg = document.querySelector(".bground"); 


const modalbgs = document.querySelectorAll(".bground");
const modalbg = modalbgs[0]; //variable pour la partie du formulaire
const modalbgConfirm = modalbgs[1]; //variable pour la partie du message de confirmation

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButtons = document.querySelectorAll(".close"); //bouton pour fermer la modale


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Fermer le formulaire et inscription
closeButtons.forEach((btn, i) => { //boucle tableau deux paramettres
    //i index de la modal


    btn.addEventListener("click", () => { //au clique sur le bouton pour fermer 
        modalbgs[i].style.display = "none"; //tout le bloc du formulaire disparrait 
    });
});