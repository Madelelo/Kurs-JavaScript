//Oppgave 1
function printMelding(navn){
    console.log("hello ", navn)
}

printMelding("Madeleine") // kaller funksjonen

//Oppgave 2
function kastTerning(antallSider){
    return Math.floor(Math.random()*(antallSider+1))
}
console.log(kastTerning(6))

//Oppgave 3
function generererHisotrie(navn, adjektiv1, adjektiv2, adjektiv3, adjektiv4){
    return `Det var en gang en ${adjektiv1} IM-elev som het ${navn}. I det ${adjektiv2} JavaScript-kurset lærte ${navn} om variabler og funksjoner sammen med ${adjektiv3} klassekamerater. Læreren i kurset er veldig ${adjektiv4}, noe som gjør kursdagene ekstra spennende. `
}

console.log(generererHisotrie("Madde", "glitrende", "morsomme", "skummle","fabelaktive"))

//Oppgave 4



const printMessage = (nameOfPerson) => { return `Hello ${nameOfPerson}`}

console.log(printMessage("Madde"))

//Oppgave 6
function erPalindrom(ord){
    let counter =0; // bruker en counter for å telle hvor mange bokstaver som er like

    for (let bokstavIndex = 0; bokstavIndex < ord.length; bokstavIndex++) {
        if (ord[bokstavIndex] == ord[ord.length-1-bokstavIndex]) {
        counter++ // hvis første og siste bokstav er lik, pluss en
        }
    }
if (counter == ord.length) {
    return true;
}else {
    return false;
}

}

console.log(erPalindrom("level"))




function skrivMelding(){
   let melding = "Heihei"
   return melding 
}

console.log(skrivMelding())

//minFunksjon(argument) // Printer argument

//minFunksjon() //Printer yolo til konsollen

function klikkMeg(){
    console.log("Klikk!")
}

function plussSammen(tall1,tall2){
    let tall3 = tall1 + tall2
    return tall3
}

let sum = plussSammen(3,5)


function dele(tall1,tall2){
    return tall1/tall2
}



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

function printName(person){
    console.log(person.firstName + person.lastName)
}

printName(person)