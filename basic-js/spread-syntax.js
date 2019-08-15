const pikachu = {name: 'Pikachu'};
const stats = {hp:40, attack:60, defense:45}

//Bad Object Code
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;
//OR
const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, {hp: 45});

//Good Object code
const lvl0 = Object.assign(...pikachu, ...stats);
const lvl1 = Object.assign(...pikachu, {hp: 45});

//Array
let pokemon = ['Lugia', 'Houo','Mew2'];

//Bad Array code
pokemon.push('Pikachu');
pokemon.push('Ante');
pokemon.push('Ratta');

//Good Array code
pokemon = [...pokemon, 'Pikachu', 'Ante', 'Ratta'];


