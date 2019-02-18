// This is the database
const pokemonDB = [{
    name: 'charmander',
    type: 'fire',
    hp: 39,
    attack: 52,
    defense: 43,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif',
  },
  {
    name: 'bulbasaur',
    type: 'fire',
    hp: 45,
    attack: 49,
    defense: 49,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif',
  },
  {
    name: 'squirtle',
    type: 'water',
    hp: 44,
    attack: 48,
    defense: 65,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif',
  },
];
// state
const gameState = {
  userPokemon: '',
  rivalPokemon: '',
};
console.log(gameState);

// elements
const pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(pokemonsEl);
const battleScreenEl = document.getElementById('battle-screen');
const attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack');
console.log(attackBtnsEl);

// this is the initial loop
const i = 0;
while (i < pokemonsEl.length) {
  // add function to all characters on screen select
  pokemonsEl[i].onclick = function () {
    // current selected pokemons name
    const pokemonName = this.dataset.pokemon;

    // elements for images on battle screen
    const player1Img = document.querySelector('.player1').getElementsByTagName('img');
    const player2Img = document.querySelector('.player2').getElementsByTagName('img');

    // we save the current pokemon
    gameState.userPokemon = pokemonName;

    // cpu picks a pokemon
    cpuPick();
    // change screen to battle scene
    battleScreenEl.classList.toggle('active');

    // select data from current user pokemon
    const currentPokemon = pokemonDB.filter(function (pokemon) {
      return pokemon.name == gameState.userPokemon;
    });
    player1Img[0].src = currentPokemon[0].img;

    // select data from current cpu pokemon
    const currentRivalPokemon = pokemonDb.filter(function (pokemon) {
      return pokemon.name == gameState.rivalPokemon;
    });
    player2Img[0].src = currentRivalPokemon[0].img;


    // user choose attack


    // cpu health goes down

    // cpu attack

    // user health goes down

    // rock > scissors

    // paper > rock

    // scissors > paper

    // depending on pokemon type and defense is how hard the
    // attack is going to be and how much health it will take out


    // then whoever gets to health <= 0 losses


  };
  i++;
}
const a = 0;
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function () {
    const attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName;
    console.log(gameState.currentUserAttack);
  };
  a++;
}
  const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const cpuPick = function () {
    gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
  };











// // pokemon
// // create data for 3 different pokemons, with their names, 
// type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       stamina: 39,
//       level: 1
//     },
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       stamina: 39,
//       level: 1
//     },
//   ]
//   var attack = 20;
//   var level = 10;
//   var stack = 1.3;
//   var defense = 39;
//   // create a formula for attacks
//   console.log((attack * level ) * stack / 7)
//   // create a formula for health
//   //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
//   console.log(((0.20 * Math.sqrt(level)) * defense) * 15)
//   // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
//   // p1 vs p2
//   // when one user loses all his health declare a winner
