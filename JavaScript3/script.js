//Scope
let farge = "grønn"

function endreFarge(nyFarge){
    farge = nyFarge
}
endreFarge("rød")

console.log(farge) //Hva printes her?

// Arrow functions
const printMessage = (nameOfPerson) => { return `Hello ${nameOfPerson}`}

console.log(printMessage("Madde"))


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

//Oppgave UTFORDRING
const aksjeListe = [
        {navn: 'TechCorp', prisPerAksje: 80, sektor: 'teknologi', antallAksjerTilgjengelig: 1000},
        {navn: 'HealthMed', prisPerAksje: 150, sektor: 'helse', antallAksjerTilgjengelig: 5000},
        {navn: 'EduLearn', prisPerAksje: 40, sektor: 'utdanning', antallAksjerTilgjengelig: 0},
        {navn: 'FoodYum', prisPerAksje: 200, sektor: 'mat', antallAksjerTilgjengelig: 3000},
        {navn: 'EcoPower', prisPerAksje: 60, sektor: 'energi', antallAksjerTilgjengelig: 1500},
        {navn: 'AutoDrive', prisPerAksje: 120, sektor: 'transport', antallAksjerTilgjengelig: 2500},
        {navn: 'FinWealth', prisPerAksje: 90, sektor: 'finans', antallAksjerTilgjengelig: 4000},
        {navn: 'BioLife', prisPerAksje: 130, sektor: 'bioteknologi', antallAksjerTilgjengelig: 2000},
        {navn: 'InnoTech', prisPerAksje: 85, sektor: 'teknologi', antallAksjerTilgjengelig: 1800},
        {navn: 'MediCare', prisPerAksje: 140, sektor: 'helse', antallAksjerTilgjengelig: 4500},
        {navn: 'TeachSmart', prisPerAksje: 35, sektor: 'utdanning', antallAksjerTilgjengelig: 300},
        {navn: 'TasteGood', prisPerAksje: 220, sektor: 'mat', antallAksjerTilgjengelig: 2800}
    ];
    
  
  const hentSektorer = (aksjeListe) => {
    let sektorListe = aksjeListe.map((aksje) => {return aksje.sektor})
    return sektorListe
  }
  
  console.log(hentSektorer(aksjeListe))

// Lag en liste med alle frukt
const vareListe = [
    { navn: 'Eple', type: 'frukt' },
    { navn: 'Gulrot', type: 'grønnsak' },
    { navn: 'Blåbær', type: 'bær' },
    { navn: 'Banan', type: 'frukt' },
    { navn: 'Brokkoli', type: 'grønnsak' }
];

const fruktListe = []

vareListe.map((vare) => {
    //sjekke om type == frukt og legge til den varen i fruktliste
    if (vare.type =="frukt") {
        fruktListe.push(vare.navn)
    }
})

console.log(fruktListe)

//SLIDES
// Bruker map() til å lage en ny liste med tallene pluss 1
const tallListe = [1,2,3,4,5];

//Med vanlig funksjon
const nyTallListe1 = tallListe.map(dobling)
function dobling(tall){return tall+1}

//Med "arrow functions"
const nyTallListe2 = tallListe.map((tall) => {return tall+1})



console.log(tallListe, nyTallListe2);
