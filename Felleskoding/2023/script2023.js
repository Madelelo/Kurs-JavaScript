// function sendInn(){
//     let passord = document.getElementById("passord").value
    
//     for (const b of passord) {
//         if (b=="e" || b=="E") {
//             passord = passord.replace(b,"3")
//         }
//     }
//     console.log(passord)

// }

// //Scope


// function foo(){
//     let variabel = "Yolo"
//     return variabel
// }

// let variabel = foo()
// console.log(variabel)
//Lag en funksjon "setToColor()" med ett parameter en farge som en streng.


function setToColor(farge){
    document.body.style.backgroundColor = farge
    console.log(farge)
}

