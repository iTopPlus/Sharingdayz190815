
//console.table

const foo = {name: 'tom', age: '30', nervous: false};
const bar = {name: 'dick', age: '40', nervous: false};
const baz = {name: 'harry', age: '50', nervous: true};

console.table([foo, bar, baz]);

//console.time

console.time('looper');
let i = 0;
while(i < 1000000) {i ++}
console.time('looper');

//consol.trace

const deleteMe = () => console.trace('bye bye databsae');

