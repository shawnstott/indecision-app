// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Shawn',
    cities: ['Vancouver', 'Winnipeg', 'Winkler'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city + '!');
    }
};

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
