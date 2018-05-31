console.log('person.js is running!');

// import seniorCit, { isAdult, canDrink } from './person.js'

// console.log(isAdult(100));
// console.log(canDrink(21));
// console.log(seniorCit(65));

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export {isAdult, canDrink, isSenior as default};

//export default (age) => age >= 65;