//Fra Slides
function sendInn() {
  let inputtekst = document.getElementById("minInput").value;
  console.log(inputtekst);
}

let signupBox = document.createElement("div"); //Lager en div vi kan legge alle inputfeltene inni

//Lager en epost input
let emailInput = document.createElement("input"); // Lager nytt  input-element
let emailInputLabel = document.createElement("label"); // Lager nytt  label-element
emailInput.id = "emailInput";
emailInput.type = "text";
emailInputLabel.innerHTML = "Skriv inn din epostadresse: ";
emailInputLabel.for = "emailInput"; //Samme som <input> id
signupBox.appendChild(emailInputLabel); //Legger label inn i signupBox
signupBox.appendChild(emailInput); //Legger input inn i signupBox

//Lager en påmeldingsknapp
let signupButton = document.createElement("input");
signupButton.type = "button";
signupButton.value = "Meld deg på nyhetsbrevet";
signupButton.onclick = function () {
  console.log("Du er nå påmeldt nyhetsbrevet!");
};
signupBox.appendChild(signupButton);

document.body.appendChild(signupBox); //Legger signingBox-diven inn i HTML-dokumentet

//Oppgave 1 - Kan du øvelseskjøre?
function sjekkTrafikkalt() {
  let alder = document.getElementById("alder").value;
  let harTrafikkalt = document.getElementById("harTraffikalt").checked;

  if ((alder > 17 && harTrafikkalt) || alder > 24) {
    document.getElementById("svar").innerHTML = "Du kan øvelsesskjøre";
  } else {
    document.getElementById("svar").innerHTML = "Du kan ikke øvelsesskjøre";
  }
}
//Oppgave 2 - Kontaktskjema
function sendInnKontaktskjema() {
  let henvendelse = {};
  let userName = document.getElementById("name").value;
  henvendelse.navn = userName;
  let userEmail = document.getElementById("email").value;
  henvendelse.epost = userEmail;
  let topic = document.getElementById("topic").value;
  henvendelse.tema = topic;
  let message = document.getElementById("message").value;
  henvendelse.melding = message;

  console.log(henvendelse);
}

//Oppgave 3 - Enkel logg inn (med kun JavaScript)
let loginForm = document.createElement("form");

let inputUsername = document.createElement("input");
inputUsername.type = "text";
inputUsername.id = "username";
inputUsername.name = "username";

let labelUsername = document.createElement("label");
labelUsername.for = "username";
labelUsername.innerHTML = "Username: ";

loginForm.appendChild(labelUsername);
loginForm.appendChild(inputUsername);

let inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.id = "password";
inputPassword.name = "password";

let labelPassword = document.createElement("label");
labelPassword.for = "password";
labelPassword.innerHTML = "Password: ";

loginForm.appendChild(labelPassword);
loginForm.appendChild(inputPassword);

let checkButton = document.createElement("button");
checkButton.type = "button";

checkButton.onclick = function () {
  if (document.getElementById("password").value == "1") {
    console.log("yolo");
  }
};
checkButton.innerHTML = "Check password";
loginForm.appendChild(checkButton);

//Add the form to the HTML-page
document.getElementById("form1").appendChild(loginForm);

//LØKKER

//Oppgave 4
console.log("Opg4: ");
for (let i = 0; i < 11; i++) {
  console.log(i); //Printer alle tall 0 til 4
}

let i = 0;
while (i < 11) {
  console.log(i); //Printer alle tall 0 til 4
  i++;
}

//Oppgave 5
console.log("Opg5: ");
let inputTall = 2;
// inputTall = parseInt(prompt("Skriv inn et tall under 20"))

if (inputTall < 20) {
  for (let index = 0; index < inputTall + 1; index++) {
    console.log(index);
  }
}
//Oppgave 6
console.log("Opg6: ");
const person = { fnavn: "Madeleine", enavn: "Lorås", alter: 32 };
let personInfo = "";

for (let e in person) {
  personInfo += person[e];
}

console.log(personInfo);

let navn = "Madeleine";
for (let b of navn) {
  console.log(b); //Skriver ut alle bokstavene i Madeleine
}

//Oppgave 7
console.log("Opg7: ");
let passord = "hettegenser";
// passord = prompt("Skriv inn et ord")

for (let b of passord) {
  if (b == "o") {
    console.log(passord);
    passord = passord.replace("o", "0");
  } else if (b == "e") {
    passord = passord.replace(b, "3");
  }
}
console.log("new", passord);

//Oppgave 8
console.log("Opg8: ");
let maxStars = 5;

for (let i = 1; i <= maxStars; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
//UTFORDRING Pokemon-nettside
let pokemon = {
  pikachu: {
    name: "Pikachu",
    type: "Electric",
    abilities: ["Static", "Lightning Rod"],
    healthPoints: 35,
    attackPoints: 55,
  },
  charmander: {
    name: "Charmander",
    type: "Fire",
    abilities: ["Blaze", "Solar Power"],
    healthPoints: 39,
    attackPoints: 52,
  },
  squirtle: {
    name: "Squirtle",
    type: "Water",
    abilities: ["Torrent", "Rain Dish"],
    healthPoints: 44,
    attackPoints: 48,
  },
  bulbasaur: {
    name: "Bulbasaur",
    type: "Grass/Poison",
    abilities: ["Overgrow", "Chlorophyll"],
    healthPoints: 45,
    attackPoints: 49,
  },
  jigglypuff: {
    name: "Jigglypuff",
    type: "Fairy/Normal",
    abilities: ["Cute Charm", "Friend Guard"],
    healthPoints: 115,
    attackPoints: 45,
  },
  raichu: {
    name: "Raichu",
    type: "Electric",
    abilities: ["Static", "Lightning Rod"],
    healthPoints: 60,
    attackPoints: 90,
  },
  blastoise: {
    name: "Blastoise",
    type: "Water",
    abilities: ["Torrent", "Rain Dish"],
    healthPoints: 79,
    attackPoints: 83,
  },
  venusaur: {
    name: "Venusaur",
    type: "Grass/Poison",
    abilities: ["Overgrow", "Chlorophyll"],
    healthPoints: 80,
    attackPoints: 82,
  },
  charizard: {
    name: "Charizard",
    type: "Fire/Flying",
    abilities: ["Blaze", "Solar Power"],
    healthPoints: 78,
    attackPoints: 84,
  },
  clefairy: {
    name: "Clefairy",
    type: "Fairy",
    abilities: ["Cute Charm", "Magic Guard"],
    healthPoints: 70,
    attackPoints: 45,
  },
};

const para = document.createElement("p");

//Lager en liste med Pokemon
for (const p in pokemon) {
  console.log(pokemon[p].name);
  para.innerHTML += pokemon[p].name + "<br>";
  document.body.appendChild(para);
}
