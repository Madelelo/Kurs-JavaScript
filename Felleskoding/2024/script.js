// console.log("YOLO");

// // Oppgave 1
// //Lag en variabel som inneholder strengen «Hello World!»
// //og skriv den ut til konsollen.

// // Oppgave 2
// // Lag en variabel med navnet ditt.
// // Skriv ut «Hallo (ditt navn)» ved å kombinere
// // «Hallo» med ditt navn.

let yourForm = document.createElement("form")

let yourInput = document.createElement("input")
yourInput.type = "text" 
yourInput.id = "myInput"
yourInput.value = "Text"

let yourInputLabel = document.createElement("label")
yourInputLabel.for = "myInput" //Samme som <input> id
yourInputLabel.innerHTML = "Din text her: "

yourForm.appendChild(yourInputLabel) //Legger label inn i yourForm
yourForm.appendChild(yourInput) //Legger input inn i yourForm
document.getElementById("form1").appendChild(yourForm) //Legger yourForm inn i HTML-dok
// Klarer du å legge til en send-knapp?


function confirmButton(){
    let choiceYes = document.getElementById("radioYes").checked;
    let choiceNo = document.getElementById("radioNo").checked;

    if (choiceNo) {
        alert("Artig vits")
    }
    
}