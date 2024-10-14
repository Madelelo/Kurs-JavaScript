function regnUtAreal(lengde, bredde){
  let areal = lengde*bredde;
  return areal
}

console.log("Arealet er: ",regnUtAreal(3,2))


const regnUtOmkrets = (lengde,bredde) => {return (2*lengde)+(2*bredde)}


console.log("Omkretsen er: ",regnUtOmkrets(3,2))






























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
  

let pokemon = { 

    pikachu: { 
    
      name: "Pikachu", 
    
      type: "Electric", 
    
      abilities: ["Static", "Lightning Rod"], 
    
      healthPoints: 35, 
    
      attackPoints: 55 
    
    }, 
    
    charmander: { 
    
      name: "Charmander", 
    
      type: "Fire", 
    
      abilities: ["Blaze", "Solar Power"], 
    
      healthPoints: 39, 
    
      attackPoints: 52 
    
    }, 
    
    squirtle: { 
    
      name: "Squirtle", 
    
      type: "Water", 
    
      abilities: ["Torrent", "Rain Dish"], 
    
      healthPoints: 44, 
    
      attackPoints: 48 
    
    }, 
    
    bulbasaur: { 
    
      name: "Bulbasaur", 
    
      type: "Grass/Poison", 
    
      abilities: ["Overgrow", "Chlorophyll"], 
    
      healthPoints: 45, 
    
      attackPoints: 49 
    
    }, 
    
    jigglypuff: { 
    
      name: "Jigglypuff", 
    
      type: "Fairy/Normal", 
    
      abilities: ["Cute Charm", "Friend Guard"], 
    
      healthPoints: 115, 
    
      attackPoints: 45 
    
    }, 
    
    raichu: { 
    
      name: "Raichu", 
    
      type: "Electric", 
    
      abilities: ["Static", "Lightning Rod"], 
    
      healthPoints: 60, 
    
      attackPoints: 90 
    
    }, 
    
    blastoise: { 
    
      name: "Blastoise", 
    
      type: "Water", 
    
      abilities: ["Torrent", "Rain Dish"], 
    
      healthPoints: 79, 
    
      attackPoints: 83 
    
    }, 
    
    venusaur: { 
    
      name: "Venusaur", 
    
      type: "Grass/Poison", 
    
      abilities: ["Overgrow", "Chlorophyll"], 
    
      healthPoints: 80, 
    
      attackPoints: 82 
    
    }, 
    
    charizard: { 
    
      name: "Charizard", 
    
      type: "Fire/Flying", 
    
      abilities: ["Blaze", "Solar Power"], 
    
      healthPoints: 78, 
    
      attackPoints: 84 
    
    }, 
    
    clefairy: { 
    
      name: "Clefairy", 
    
      type: "Fairy", 
    
      abilities: ["Cute Charm", "Magic Guard"], 
    
      healthPoints: 70, 
    
      attackPoints: 45 
    
    } 
    
    }; 

 let pokemonHeading = document.createElement("h1")
 pokemonHeading.innerHTML = "Electric pokemons"
 pokemonHeading.style.color = "yellow"
 document.getElementById("pokemon").appendChild(pokemonHeading)
 

 for (const p in pokemon) {
    let pokemonList = document.createElement("p")

    if (pokemon[p].type =="Electric") {
        pokemonList.innerHTML = pokemon[p].name +pokemon[p].healthPoints
        document.getElementById("pokemon").appendChild(pokemonList)
    }


    
 }