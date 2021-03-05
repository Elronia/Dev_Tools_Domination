const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', '👍')
// console.log(`Hello I am ${var}`)

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('Oh NOO');

// Error :|
console.error('Oy! :(');

// Info
console.info('JavaScript was developed under the name Mocha');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
    console.count('Katherine');
    console.count('Katherine');
    console.count('Elronia');
    console.count('Elronia');
    console.count('Katherine');
    console.count('Elronia');
    console.count('Katherine');
    console.count('Elronia');
    console.count('Elronia');
    console.count('Elronia');
    console.count('Elronia');
    console.count('Elronia');

// timing
