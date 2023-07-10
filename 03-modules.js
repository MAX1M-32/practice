// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Max");
sayHi(names.john);
