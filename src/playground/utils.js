console.log('utils.js is running');
// // import subtract, { square, add } from './utils.js'

// console.log('app.js is running');

// // console.log(square(10));
// // console.log(add(10, 123));
// // console.log(subtract(10, 123));

export const square = (x) => x * x;
export const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;
export default (a, b) => a - b;

// export { square, add, subtract as default };

// export - default export - named export