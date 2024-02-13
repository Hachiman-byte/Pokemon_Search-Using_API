const imageDisplay = document.getElementById("pokemonImage");
const inputtedName = document.getElementById("inputtedName");
const fetchBTN = document.getElementById("fetchBTN");

async function getData(){
    try{
       const pokemonNAME = document.getElementById("inputtedName").value.toLowerCase(); 
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNAME}`); 
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        imageDisplay.src = pokemonSprite;
    }
    catch(error){
        console.log(error);
    }

}