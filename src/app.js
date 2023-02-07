import User from "./User.js";

const getPersonnes = async () => {
    
const res = await fetch("https://randomuser.me/api/?results=20");
const data = await res.json();
console.log(data);
const utilisateur1 = donneeImportante(data.results[0]);
console.log(utilisateur1);
}

const board = document.querySelector("#board");

const donneeImportante = (donnee) => {
const titre = donnee.name.title;
const prenom = donnee.name.first;
const nom = donnee.name.last;
const ville = donnee.location.city;
const pays = donnee.location.country;
const age = donnee.dob.age;
const email = donnee.email;
const photo = donnee.picture.large;
console.log(titre)
}

getPersonnes();