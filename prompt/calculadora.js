const prompt = require("prompt-sync")();

// 1. Objeto calculadora con propiedades y métodos
const calculadora = {
    num1: 0,
    num2: 0,

    sumar: function() {
        return this.num1 + this.num2;
    },
    restar: function() {
        return this.num1 - this.num2;
    },
    multiplicar: function() {
        return this.num1 * this.num2;
    },
    dividir: function() {
        if (this.num2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        return this.num1 / this.num2;
    },
    potencia: function() {
        return Math.pow(this.num1, 2); // al cuadrado
    },
    raiz: function() {
        return Math.sqrt(this.num1); // raíz cuadrada
    }
};

let opcion = "";

// 2. Bucle para mantener el menú abierto hasta que el usuario elija salir (7)
while (opcion !== "7") {
    console.log("\n==================");
    console.log("   Calculadora    ");
    console.log("==================");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Potencia");
    console.log("6. Raíz");
    console.log("7. Salir");

    opcion = prompt("Elige una opción: ");

    // 3. Ingreso de datos según la opción elegida
    if (opcion >= "1" && opcion <= "4") {
        calculadora.num1 = Number(prompt("Ingresa el primer número: "));
        calculadora.num2 = Number(prompt("Ingresa el segundo número: "));
    } else if (opcion === "5" || opcion === "6") {
        calculadora.num1 = Number(prompt("Ingresa el número: "));
    }

    // 4. Mostrar el resultado de la operación seleccionada
    if (opcion === "1") {
        console.log("Resultado: " + calculadora.sumar());
    } else if (opcion === "2") {
        console.log("Resultado: " + calculadora.restar());
    } else if (opcion === "3") {
        console.log("Resultado: " + calculadora.multiplicar());
    } else if (opcion === "4") {
        console.log("Resultado: " + calculadora.dividir());
    } else if (opcion === "5") {
        console.log("Resultado: " + calculadora.potencia());
    } else if (opcion === "6") {
        console.log("Resultado: " + calculadora.raiz());
    } else if (opcion === "7") {
        console.log("Saliendo del programa. ¡Adiós!");
    } else {
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
}