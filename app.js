
const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) => {
        if(res.status != 200){
            console.log(res)
            pokeImage('assets/pokeball.png ')
        }
        else{ 
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        console.warn('PokeData');

        let pokemonName = data.name;
        pokeName1(`Name:${pokemonName.toUpperCase()}`);

        let pokemonType = data.types[0].type.name;
        pokeType(`Type:${pokemonType.toUpperCase()}`);

        let pokemonHP = data.stats[0].base_stat;
        pokeHP(`Hp:${pokemonHP}`);

        let pokemonAttack = data.stats[1].base_stat;
        pokeAttack(`Attack:${pokemonAttack}`);

        let pokemonDefense = data.stats[2].base_stat;
        pokeDefense(`Defense:${pokemonDefense}`);

        let pokemonSpa = data.stats[3].base_stat;
        pokeSTa(`Sp.Atk:${pokemonSpa}`);

        let pokemonSpd = data.stats[4].base_stat;
        pokeSTd(`Sp.Def:${pokemonSpd}`);

        let pokemonSpeed = data.stats[5].base_stat;
        pokeSpeed(`Speed:${pokemonSpeed}`);

        let pokemonMove1 = data.moves[0].move.name;
        pokeMove1(`Move1:${pokemonMove1}`);

        let pokemonMove2 = data.moves[1].move.name;
        pokeMove2(`Move2:${pokemonMove2}`);

    })
}
//fetchPokemon();
 const pokeImage = (url ) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
 }
//Name
const pokeName1 = (valor) => {
    const pokeNames = document.getElementById('pokeNames');
    pokeNames.innerHTML = valor;
}

//infoTipo
const pokeType = (valor) => {
    const pokeTypes = document.getElementById('pokeType');
    pokeTypes.innerHTML = valor;
}
//Hp
const pokeHP = (valor) => {
    const pokehp = document.getElementById('pokeHp');
    pokehp.innerHTML = valor;
}
//Attack
const pokeAttack = (valor) => {
    const pokeattack = document.getElementById('pokeAttack');
    pokeattack.innerHTML = valor;
}
//Defense
const pokeDefense = (valor) => {
    const pokedefense = document.getElementById('pokeDefense');
    pokedefense.innerHTML = valor;
}

//ST Attack
const pokeSTa = (valor) => {
    const pokesta = document.getElementById('pokeSpa');
    pokesta.innerHTML = valor;
}

//Defense
const pokeSTd = (valor) => {
    const pokespd = document.getElementById('pokeSpd');
    pokespd.innerHTML = valor;
}
//Speed
const pokeSpeed = (valor) => {
    const pokespeed = document.getElementById('pokeSpeed');
    pokespeed.innerHTML = valor;
}
//move1
const pokeMove1 = (valor) => {
    const pokeMove1 = document.getElementById('pokeMove1');
    pokeMove1.innerHTML = valor;
}

const pokeMove2 = (valor) => {
    const pokeMove2 = document.getElementById('pokeMove2');
    pokeMove2.innerHTML = valor;
}

 

 
 
