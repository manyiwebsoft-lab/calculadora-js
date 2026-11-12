//console.log("¡Hola mundo!");


//commonJS
const promptTerminal = require("prompt-sync") ()

let nombre = promptTerminal ("Cual es tu nombre?: ")
console.log (nombre)

let edad = promptTerminal ("Cual es tu edad?: ")
console.log (typeof edad, edad)
