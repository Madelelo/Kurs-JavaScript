
function skrivMelding(){
   let melding = "Heihei"
   return melding 
}

console.log(skrivMelding())

minFunksjon(argument) // Printer argument

minFunksjon() //Printer yolo til konsollen

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