//ELEMENTS DU DOM

//Elements du formulaire

//Bouton submit 

let buttonSubmit = document.querySelector(".btn-submit");
//prenom et span pour l'affichage des erreurs
let first = document.querySelector("#first");
let incorrectEntriesFirst = document.querySelector("#incorrect-entries-first");
//nom et span pour l'affichage des erreurs
let last = document.querySelector("#last");
let incorrectEntriesLast = document.querySelector("#incorrect-entries-last");
//email et span pour l'affichage des erreurs
let email = document.querySelector("#email");
let incorrectEntriesEmail = document.querySelector("#incorrect-entries-email");
//date d'annniversaire et span pour l'affichage des erreurs
let birthdate = document.querySelector("#birthdate");
let incorrectEntriesBirthdate = document.querySelector("#incorrect-entries-birthdate");
// numero de participation dans les tournois et span pour l'affichage des erreurs
let quantity = document.querySelector("#quantity");
let incorrectEntriesQuantity = document.querySelector("#incorrect-entries-quantity");
//evenement qui permet de declancher la function qui permet de valider le formulaire
//au clic sur le bouton submit du formulaire
//checkbox


let location1 = document.querySelector("#location1");
let location2 = document.querySelector("#location2");
let location3 = document.querySelector("#location3");
let location4 = document.querySelector("#location4");
let location5 = document.querySelector("#location5");
let location6 = document.querySelector("#location6");
let incorrectEntriesLocation = document.querySelector("#incorrect-entries-location");

//conditions d'utilisation.
//prise des deux elements d'une meme classe
let checkboxLabel = document.querySelectorAll(".checkbox2-label");

let incorrectEntriesCheckboxLabel = document.querySelector("#incorrect-entries-checkboxLabel");


buttonSubmit.addEventListener('click', validationForm);


//fonction de validation de formulaire
function validationForm(e) {
    // let checkboxValidation = false;
    e.preventDefault();
    //Le textContent de chaque variable est vide de base pour que 
    //le message d'erreur disparraissent
    incorrectEntriesFirst.textContent = "";
    incorrectEntriesLast.textContent = "";
    incorrectEntriesEmail.textContent = "";
    incorrectEntriesBirthdate.textContent = "";
    incorrectEntriesQuantity.textContent = "";
    incorrectEntriesLocation.textContent = "";
    incorrectEntriesCheckboxLabel.textContent = "";



    //verification du prenom, il ne peut pas etre vide et il doit etre superieur à 2
    if (!first.value.match(/^(?=.{2,20}$)[a-z]+(?:['\s][a-z]+)*$/i)) {
        incorrectEntriesFirst.textContent = "Prénom non valide";
        incorrectEntriesFirst.style.color = "red";
    }
    //verification du nom,  il ne peut pas etre vide et il doit etre superieur à 2
    if (!last.value.match(/^(?=.{2,20}$)[a-z]+(?:['\s][a-z]+)*$/i)) {
        incorrectEntriesLast.textContent = "nom non valide";
        incorrectEntriesLast.style.color = "red";
    }
    //verification de l'email,  il doit être valide

    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        incorrectEntriesEmail.textContent = "email non valide";
        incorrectEntriesEmail.style.color = "red";
    }
    //verification de la date d'anniversaire
    if (!birthdate.value.match(/^([0-9]{2,4})\-([0-9]{2})\-([0-9]{2,4})$/)) {
        incorrectEntriesBirthdate.textContent = "date d'anniversaire non valide";
        incorrectEntriesBirthdate.style.color = "red";
        console.log(birthdate.value); //permet de voir la valeur sur la console
    }

    //verification des fois ou la personne est allé à un concours 
    if (!quantity.value.match(/^[0-9]*$/)) {
        incorrectEntriesQuantity.textContent = " non valide";
        incorrectEntriesQuantity.style.color = "red";
        console.log(quantity.value);

    }

    //verification si une ville a ete choisie 
    if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
        incorrectEntriesLocation.textContent = "ville non valide";
        incorrectEntriesLocation.style.color = "red";
    }
    //verification des conditions d'utilisation.

    if (checkboxLabel[0].checked) {
        incorrectEntriesCheckboxLabel.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
        incorrectEntriesCheckboxLabel.style.color = "red";
    }
}

// let button = document.querySelector("#button");
// let form = document.querySelector("#form");



// button.addEventListener('click', changeContent);


// function changeContent() {

//     form.style.display = "none";
//     console.log(form);

//     let thankyou = document.createElement("p"); // <p></p>
//     let text = document.createTextNode("Merci ! Votre réservation a été reçue");
//     thankyou.appendChild(text); // <p>TEST TEXT</p>
//     let modalBody = document.querySelector(".modal-body");
//     modalBody.appendChild(thankyou); // <body> <p>TEST TEXT</p> </body>

// }