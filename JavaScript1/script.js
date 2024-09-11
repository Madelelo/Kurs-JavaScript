//Oppgave 1
let message = "Hello World";
console.log(message);

//Oppgave 2
let myName = "Madeleine";
console.log("Hello " + myName);

//Oppgave 3
let radius = 5;
let pi = 3.14;
let omkrets = 2 * radius * pi;

let nameOfPerson = "jjaj";

//Vanlig løsning
console.log("For radius " + radius + " er omkretsen " + omkrets);

//Løsning med avrundet tall
console.log("For radius " + radius + " er omkretsen " + Math.round(omkrets));

//Oppgave 4
let person = {
  fornavn: "Madeleine",
  etternavn: "Lorås",
  alder: 33,
  bursdag: "19.01.91",
  over18: true,
  favorittFarge: "Blue",
};

console.log(person);
console.log("Hallo " + person.fornavn + " " + person.etternavn);

//Oppgave 5
let navnLengde = 9;
console.log(
  "Hallo " + person.fornavn + " ditt navn har " + navnLengde + " bokstaver."
);

//Oppgave 6
let fultNavn = person.fornavn + " " + person.etternavn;
console.log(fultNavn);

//Oppgave 7
let message2 = `Hei, mitt navn er ${person.fornavn} ${person.etternavn}. Jeg er ${person.alder} år gammel og har bursdag ${person.bursdag}`;

console.log(message2);

//Oppgave 10
let passswordInput = prompt("Skriv inn passord?");

passwordInput == "passord1234"
  ? console.log("Tilgang innvilget")
  : console.log("Nope");

//Oppgave 11
let today = new Date();

if (today.getDay() == 3) {
  console.log("Det er fredag!");

  if (today.getHours() >= 15) {
    if (today.getMinutes() >= 30) {
      console.log("God helg vi sees på mandag");
    }
  }
} else {
  console.log("Det er ikke fredag... :(");
}

//Oppgave 12

function handleClickCounter() {
  console.log(clickCounter);
}

//Oppgave 13
function handleClickColor(color) {
  console.log(color);
  document.body.style.backgroundColor = color;
}

//Oppgave 14

function chooseFont(font) {
  console.log(font);
  document.getElementById("valgfriTekst").style.fontFamily = font;
}
function chooseFontSize(fontSize) {
  console.log(fontSize);
  document.getElementById("valgfriTekst").style.fontSize = `${fontSize}px`;
}
function writeInText() {
  let inputedText = prompt("Skriv inn din text her: ");
  document.getElementById("valgfriTekst").innerHTML = inputedText;
}
