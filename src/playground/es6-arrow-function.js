// const square = function(x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
};

console.log(getFirstName('Shawn Stott'));

const getFirstNameAgain = (fullname) => fullname.split(' ')[0];
console.log(getFirstNameAgain('Shawn Stott'));