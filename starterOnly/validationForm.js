//ELEMENTS DU DOM

//Elements du formulaire

//Bouton submit 

const buttonSubmit = document.querySelector(".btn-submit");
//prenom et span pour l'affichage des erreurs
const first = document.querySelector("#first");

let incorrectEntriesFirst = document.querySelector("#incorrect-entries-first");
//nom et span pour l'affichage des erreurs
const last = document.querySelector("#last");
let incorrectEntriesLast = document.querySelector("#incorrect-entries-last");
//email et span pour l'affichage des erreurs
const email = document.querySelector("#email");
let incorrectEntriesEmail = document.querySelector("#incorrect-entries-email");
//date d'annniversaire et span pour l'affichage des erreurs
const birthdate = document.querySelector("#birthdate");
let incorrectEntriesBirthdate = document.querySelector("#incorrect-entries-birthdate");
// numero de participation dans les tournois et span pour l'affichage des erreurs
const quantity = document.querySelector("#quantity");
let incorrectEntriesQuantity = document.querySelector("#incorrect-entries-quantity");
//evenement qui permet de declancher la function qui permet de valider le formulaire
//au clic sur le bouton submit du formulaire
//checkbox

const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
let incorrectEntriesLocation = document.querySelector("#incorrect-entries-location");

//Recuperation de l'id crée pour les villes 
const locations = document.querySelector("#locations");
//
const villes = document.querySelector("#villes");

//conditions d'utilisation.
//prise des deux elements d'une meme classe
const checkboxLabel = document.querySelector("#checkbox1");
let incorrectEntriesCheckboxLabel = document.querySelector("#incorrect-entries-checkboxLabel");

//Ajout de la couleur pour les messages d'erreur
function addColor() {
    incorrectEntriesFirst.classList.add("incorrect-entries-color");
    incorrectEntriesLast.classList.add("incorrect-entries-color");
    incorrectEntriesEmail.classList.add("incorrect-entries-color");
    incorrectEntriesBirthdate.classList.add("incorrect-entries-color");
    incorrectEntriesQuantity.classList.add("incorrect-entries-color");
    incorrectEntriesLocation.classList.add("incorrect-entries-color");
    incorrectEntriesCheckboxLabel.classList.add("incorrect-entries-color");
}
addColor();





buttonSubmit.addEventListener('click', validationForm);


//fonction de validation de formulaire
function validationForm(e) {
    //bloquer l'envoie du formulaire
    e.preventDefault();
    //Le textContent de chaque variable est vide de base pour que 
    //le message d'erreur  disparraissent
    incorrectEntriesFirst.textContent = "";
    incorrectEntriesLast.textContent = "";
    incorrectEntriesEmail.textContent = "";
    incorrectEntriesBirthdate.textContent = "";
    incorrectEntriesQuantity.textContent = "";
    incorrectEntriesLocation.textContent = "";
    incorrectEntriesCheckboxLabel.textContent = "";



    let numberError = 0;

    // console.log(completedDate);
    //verification du prenom, il ne peut pas etre vide et il doit etre superieur à 2
    if (!first.value.match(/^(?=.{2,20}$)[a-z]+(?:['\s][a-z]+)*$/i)) {
        incorrectEntriesFirst.textContent = "Prénom non valide";
        numberError++;
    }
    //verification du nom,  il ne peut pas etre vide et il doit etre superieur à 2
    if (!last.value.match(/^(?=.{2,20}$)[a-z]+(?:['\s][a-z]+)*$/i)) {
        incorrectEntriesLast.textContent = "nom non valide";
        numberError++;
    }
    //verification de l'email,  il doit être valide

    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        incorrectEntriesEmail.textContent = "email non valide";
        numberError++;
    }


    // console.log(birthdate.value);


    // let dateNow = new Date();
    // let completedDate = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
    // console.log(dateNow);
    // console.log(birthdate.value);

    // if (birthdate.value == completedDate) {
    //     console.log("ok");

    // }
    //verification de la date d'anniversaire
    if (!birthdate.value.match(/^([0-9]{2,4})\-([0-9]{2})\-([0-9]{2,4})$/)) {
        incorrectEntriesBirthdate.textContent = "date d'anniversaire non valide";
        numberError++;


    }


    //Empecher de choisir la ville quand la personne n'a fait aucun tournois

    if (quantity.value == 0) {
        locations.style.display = 'none';
        villes.style.display = 'none';
    } else {
        locations.style.display = 'block';
    }
    //verification des fois ou la personne est allé à un concours 

    if (!quantity.value.match(/^\d+$/)) { //si ce n'est un numero
        incorrectEntriesQuantity.textContent = "numero non valide";
        numberError++;

    }

    //verification si une ville a ete choisie 
    if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
        incorrectEntriesLocation.textContent = "ville non valide";
        numberError++;
    }


    //verification des conditions d'utilisation.
    if (!checkboxLabel.checked) { //si les conditions ne sont pas coches
        incorrectEntriesCheckboxLabel.textContent = "vérifiez que vous acceptez les termes et conditions d'utilisation";
        numberError++;

    }
    //appartion ou disparition de modal ou celle de la confirmation en fonction du numero d'erreur
    if (numberError == 0) {
        modalbgConfirm.style.display = "block";
        modalbg.style.display = "none";
    }
}


// var ladate = new Date();
// console.log("Nous sommes le : ");
// console.log(ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear());