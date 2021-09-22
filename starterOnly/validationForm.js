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

const citys = document.querySelector("#villes");

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


    //Numero d'erreur 
    let numberError = 0;

    //Date d'aujourd'hui
    let dateNow = new Date();
    let completedDate = dateNow.getFullYear() + '-' + '0' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
    //tableau de tout les valeurs mises pour les villes
    let locationchecked = [location1.checked, location2.checked, location3.checked, location4.checked, location5.checked, location6.checked];
    //tableau qui contiendra les valeurs des villes selectionnees
    let locationsValues = [];

    //verification du prenom, il ne peut pas etre vide et il doit etre superieur à 2

    if (first.value == "") {
        incorrectEntriesFirst.textContent = "Veuillez ne pas laissez le champ vide";
        numberError++;


    } else if (!first.value.match(/^[^0-9]+$/i)) {
        incorrectEntriesFirst.textContent = "Votre prénom doit pas contenir des chiffres";
        numberError++;
    } else if (!first.value.match(/^[a-z0-9._-]{2,12}$/i)) {
        incorrectEntriesFirst.textContent = "Mettez plus d'un caractere";
        numberError++;
    }


    //verification du nom,  il ne peut pas etre vide et il doit etre superieur à 2

    if (last.value == "") {
        incorrectEntriesLast.textContent = "Veuillez ne pas laissez le champ vide";
        numberError++;

    } else if (!last.value.match(/^[^0-9]+$/i)) {
        incorrectEntriesLast.textContent = "Votre prénom doit pas contenir des chiffres";
        numberError++;
    } else if (!last.value.match(/^[a-z0-9._-]{2,12}$/i)) {
        incorrectEntriesLast.textContent = "Mettez plus d'un caractere";
        numberError++;
    }
    //verification de l'email,  il doit être valide


    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        incorrectEntriesEmail.textContent = "Veuillez ne pas laisser l'email vide et mettre un email valide";
        numberError++;
    }




    //Verification si la personne n'a pas mis une date trop recente
    if (birthdate.value >= completedDate) {
        incorrectEntriesBirthdate.textContent = "La date que vous avez introduit est trop récente";
        numberError++;
    }
    //verification de la date d'anniversaire
    if (!birthdate.value.match(/^([0-9]{2,4})\-([0-9]{2})\-([0-9]{2,4})$/)) {
        incorrectEntriesBirthdate.textContent = "Remplissez le mois, l'année et le jour";
        numberError++;


    }

    for (let i = 0; i < locationchecked.length; i++) {
        if (locationchecked[i] == true) {
            locationsValues.push(locationchecked[i]);
        }
    }

    //Empecher l'utilisateur de choisir plus de villes que de tournois participés 
    if (quantity.value < locationsValues.length) {
        incorrectEntriesLocation.textContent = "Vous ne pouvez pas choisir plus de villes que de tournois";
        numberError++;
    }

    //Empecher de choisir une ville quand la personne n'a fait aucun tournois
    if (quantity.value == 0) {
        incorrectEntriesLocation.textContent = "Vous ne pouvez pas choisir une ville sans choisir un numero de tournois participés";
        numberError++;
    }

    //verification des fois ou la personne est allé à un concours 


    if (!quantity.value.match(/^\d+$/)) {
        incorrectEntriesQuantity.textContent = "Veuillez introduire que des chiffres et ne pas laisser le champ vide";
        numberError++;

    }

    //verification si une ville a ete choisie 
    if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
        incorrectEntriesLocation.textContent = "Vous devez choisir une ville";
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