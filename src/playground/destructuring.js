// const person = {
//     name: "Topher",
//     age: 36,
//     location: {
//         city: "Nashville",
//         temp: 81
//     }
// };

// const { name = "anon", age } = person;
// const { temp: temperature = 45, city } = person.location;

// console.log(`${name} is ${age} years old`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         // name: "Penguin"
//     }
// };

// const addresses = ["1701 N Randolph St", "1106 Sunnymeade Dr", "204 Ricker Rd"];

// const { title, author } = book;
// const { name: publisher = "Self published" } = book.publisher;

// console.log(
//     `I'm currently reading ${title} by ${author}.  It was published by ${publisher}.`
// );

// const [virginia, , florida, northcarolina = "hickvilla,usa"] = addresses;

// console.log(`I live at ${northcarolina}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [what, priceSm, priceMd, priceLg] = item;

console.log(`a medium ${what} costs ${priceMd}`);
