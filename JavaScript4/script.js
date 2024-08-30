// // // //Lister

// // // //const minListe = [] // tom liste
// // // const minAndreListe = [1, 2, 3, 4, 5] // liste med tall

// // // // Legge til elementer i en liste

// // // const minListe = ["epler", "pærer", "bananer"]

// // // console.log(minListe[0]) // Printer første element i listen

// // // minListe[1] = "appelsiner" // Endrer andre element i listen

// // // // Liste med frukt
// // // let frukt = ["Eple","Pære","Kiwi"]

// // // //liste med bær
// // // let bær = ["Jordbær","Blåbær","Bringebær"]

// // // //funksjon som kombinderer frukt og bær, annenhver gang
// // // function kombinerLister(liste1,liste2){
// // //     let nyListe = []
// // //     for (let i = 0; i < liste1.length; i++) {
// // //         nyListe.push(liste1[i])
// // //         nyListe.push(liste2[i])
// // //     }
// // //     return nyListe
// // // }

// // // let nyListe = kombinerLister(frukt,bær)
// // // console.log(nyListe)

// // // //funksjon som printer en liste til html
// // // function printListe(liste){
// // //     let html = "<ul>"
// // //     for (const element of liste) {
// // //         html += `<li>${element}</li>`
// // //     }
// // //     html += "</ul>"
// // //     document.getElementById("liste").innerHTML = html
// // // }

// // // printListe(nyListe)

// // const minePokemon = ["pikatcju", "charmander", "bulbasaur"];
// // console.log(minePokemon);

// // for (let i = 0; i < minePokemon.length; i++) {
// //   document.getElementById("liste").innerHTML += minePokemon[i];
// // }

// // //Bruker map() til å legge til 1 på alle elementene i lista MED ARROW-FUNCTION
// // const numbers = [1, 2, 3, 4, 5];
// // const numbersAdded = numbers.map((num) => {
// //   return num + 1;
// // });

// // //Bruker map() til å legge til 1 på alle elementene i lista MED FAT ARROW
// // const numbers2 = [1, 2, 3, 4, 5];
// // const numbersAdded2 = numbers.map(addOne);

// // function addOne(num) {
// //   return num + 1;
// // }

// // console.log(numbers, numbersAdded);

// // for (let frukt = 0; frukt < fruits.length; frukt++) {}

// const fruits = [
//   {
//     name: "apple",
//     color: "red",
//   },
//   {
//     name: "banana",
//     color: "yellow",
//   },
//   {
//     name: "grape",
//     color: "purple",
//   },
//   {
//     name: "orange",
//     color: "orange",
//   },
//   {
//     name: "kiwi",
//     color: "green",
//   },
// ];

// let elevListe = [];

// function printElevListe() {
//   let printListe = "";
//   for (let index = 0; index < elevListe.length; index++) {
//     printListe += `<li> ${elevListe[index]} </li>`;
//   }
//   document.getElementById("liste").innerHTML = printListe;
// }

// function registrerElev() {
//   let elevNavn = document.getElementById("input").value;
//   console.log(elevNavn);

//   elevListe.push(elevNavn);
//   console.log(elevListe);
//   printElevListe();
// }

//Bruker map() til å lage en ny liste med alle forbokstaver
const fruktliste = ["eple", "banan", "pære"];

const fruktBokstav = fruktliste.map((frukt) => {
  return frukt[0];
});

console.log(fruktliste, fruktBokstav);

//Bruker map() til å lage en ny liste som dobler alle tallene i tallListe
const tallListe = [3, 2, 1];

const nyTallListe = tallListe.map((tall) => {
  console.log(tall);
  return tall * 2;
});

console.log(nyTallListe);
