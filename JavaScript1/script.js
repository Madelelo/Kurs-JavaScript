//Din JavaScript kode her


//Oppgave 1
let text = "Hello world"
console.log(text)

//Oppgave 2
let myName = "Madeleine"
console.log("Hello " + myName)

//Oppgave 3
let radius = 5
const pi = 3.14
let omkrets = 2*radius*pi
console.log("For en radius på ", radius ," er omkretsen "+omkrets)

let omkretsRund = omkrets.toFixed(2)
console.log(omkretsRund)

//Oppgave 4.1
const myFullName = {
    firstname:"Madeleine",
    lastname:"Lorås",
    age: 32,
    dob: new Date("1991-01-19"),
    over18: true
}
console.log("Hello", myFullName.firstname, myFullName.lastname)
console.log(myFullName)

//Oppgave 5
let count=0

function handleOnClick(){
    console.log("Klikk!")
    count = count+1
    console.log(count)
    
}

var minStreng = "Dette er en streng"
console.log(minStreng.length) // denne returnerer 16



//var userName = prompt("Please enter your name:");
//console.log(userName)

let kurs="S"

if (kurs == "JavScript"){
    console.log("Jippi")
} else if (kurs == "Python"){
    console.log("Okeida")
}else{
    console.log("NOOO")
}

switch (new Date().getDay()) {
  case 0:
    console.log("Søndag - Ikke JavaScript kurs :/ ");
    break;
  case 1:
    console.log("Mandag - Jippi,  JavaScript kurs");
    break;
  case 2:
     console.log("Tirsdag - Jippi,  JavaScript kurs");
    break;
  case 3:
    console.log("Onsdag - Jippi,  JavaScript kurs");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Saturday - Ikke JavaScript kurs :/");
}


document.getElementById("minKnapp").addEventListener("click", knappTrykket2);

function knappTrykket2() {
   alert ("Klikk!");
}


document.getElementById("tekst").innerHTML = "Hello World!";






window.addEventListener("resize", function(){
    document.getElementById("tekst").innerHTML = Math.random();
    document.getElementById("tekst").style.color ="Red";

  });

