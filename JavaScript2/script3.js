let pokemonObject = { 

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



for (const pokemon in pokemonObject) {
    let p = document.createElement("p");
    p.innerText = pokemon;
    document.body.appendChild(p);
    
    console.log(pokemon)
}
