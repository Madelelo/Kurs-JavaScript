// console.log("YOLO");

// // Oppgave 1
// //Lag en variabel som inneholder strengen «Hello World!»
// //og skriv den ut til konsollen.

// // Oppgave 2
// // Lag en variabel med navnet ditt.
// // Skriv ut «Hallo (ditt navn)» ved å kombinere
// // «Hallo» med ditt navn.

// let yesNoForm = document.createElement("form")

// let inputYes = document.createElement("input")
// inputYes.type = "radio" 
// inputYes.id = "radioeYes"
// inputYes.value = "yes"

// let inputYesLabel = document.createElement("label")
// inputYesLabel.for = "radioYes"
// inputYesLabel.innerHTML = "Ja"

// yesNoForm.appendChild(inputYesLabel)
// yesNoForm.appendChild(inputYes)

// document.body.appendChild(yesNoForm)



function confirmButton(){
    let choiceYes = document.getElementById("radioYes").checked;
    let choiceNo = document.getElementById("radioNo").checked;

    if (choiceNo) {
        alert("Artig vits")
    }
    
}