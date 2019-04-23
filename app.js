// this is the temperature today in Kelvin.
const kelvin = 300;

// celsius is 273 degrees less than Kelvin.
let celsius = kelvin - 273;

// formula for calculating fahrenheit temperature
let fahrenheit = celsius * (9/5) + 32;

// rounding the value down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// extra practice
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature in Newton is ${newton} degrees.`);