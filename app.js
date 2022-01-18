console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, numPets, residence, hobbies) {
        this.name = name;
        this.numPets = numPets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info() {
        console.log(`${this.name} has ${this.numPets} pet(s), lives in ${this.residence},
        and enjoys ${this.hobbies.join(' and ')}.`
        );
    }

    greeting() {
        console.log('Hello fellow person!');
    }
}

let bre = new Person('Bre', 2, 'Yukon', [
    'phone',
    'friends',
    'reading',
]);

bre.info();
bre.greeting();

class Coder extends Person {
    constructor(name, numPets, residence, hobbies) {
        super(name, numPets, residence, hobbies);

        this.occupation = 'Full Stack Web Developer';
    }

    info() {
        console.log(`${this.name} is a ${this.occupation}, has ${this.numPets} pet(s), lives in ${this.residence},
        and enjoys ${this.hobbies.join(' and ')}.`
        );
    }

    greeting() {
        console.log('Hello you fabulous Coder!');
    }
}

let nichole = new Coder('Nichole', 3, 'OKC', [
    'hiking',
    'reading',
    'photography'], 'Web Developer');


nichole.info();
nichole.greeting();

class Gardener extends Coder {
    constructor(name, numPets, residence, hobbies) {
        super( name, numPets, residence, hobbies);

        this.occupation= 'Gardener';
        this.age = 33;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old, is a ${this.occupation}, has ${this.numPets} pet(s), lives in ${this.residence},
        and enjoys ${this.hobbies.join(' and ')}.`
        );
    }

    greeting() {
        console.log('Hello World!');
    }
}

let Joe = new Gardener('Joe', 1, 'Ohio', ['writing, reading, running, coding, learing'], 'Gardener');

Joe.info();
Joe.greeting();


