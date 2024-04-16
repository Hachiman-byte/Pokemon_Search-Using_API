const imageDisplay = document.getElementById("pokemonImage");
const inputtedName = document.getElementById("inputtedName");
const fetchBTN = document.getElementById("fetchBTN");
const contents = document.getElementById("main_content");
const displayhealth = document.getElementById("healthtxt");
const displayattack = document.getElementById("attacktxt");
const displaydefense = document.getElementById("defensetxt");
const criesAudio = document.getElementById("cries_audio");
const displaySpecialAttack = document.getElementById("specialattacktxt");
const displaySpecialDefense = document.getElementById("specialdefensetxt");
const displaySpeed = document.getElementById("speedtxt");

async function getData(){
    try{
       const pokemonNAME = document.getElementById("inputtedName").value.toLowerCase(); 
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNAME}`); 
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        contents.style.display = "block";
        imageDisplay.src = pokemonSprite;
        
        //Display STATS
        displayhealth.innerText = data.stats[0].base_stat;
        displayattack.innerText = data.stats[1].base_stat;
        displaydefense.innerText = data.stats[2].base_stat;
        displaySpecialAttack.innerText = data.stats[3].base_stat;
        displaySpecialDefense.innerText = data.stats[4].base_stat;
        displaySpeed.innerText = data.stats[5].base_stat;

        //Audio
        criesAudio.src = data.cries.latest;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
}