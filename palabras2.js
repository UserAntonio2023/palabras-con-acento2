/*Desarrollar un programa que reciba una palabra a analizar, el deberá identificar si la palabra lleva acento o no y que tipo de palabra es, se anexa algunas reglas y ejemplos:
Palabras Agudas:
Las palabras agudas son aquellas cuya sílaba tónica es la última.
Llevan tilde si terminan en una vocal, o en las consonantes "n" o "s".
Ejemplos: café, computadora, canción.
Palabras Llanas o Graves:
Las palabras llanas o graves son aquellas cuya sílaba tónica es la penúltima.
Llevan tilde si no terminan en una vocal, "n" o "s".
Ejemplos: árbol, música, lápiz.
Palabras Esdrújulas:
Las palabras esdrújulas son aquellas cuya sílaba tónica es la antepenúltima.
Todas las palabras esdrújulas llevan tilde.
Ejemplos: música, pájaro, fácil.
Palabras Sobresdrújulas:
Las palabras sobresdrújulas son aquellas cuya sílaba tónica está antes de la antepenúltima.
Todas las palabras sobresdrújulas llevan tilde.
Ejemplos: cómetelo, dímelo, ámamelos.

El programa debe tener un input por medio de teclado para poder realizar varios input hasta que se escriba la palabra EXIT en mayúsculas.*/


//Instrucciones: Ejectutar mediante consola :> node "c:\Users\feder\Desktop\5to semestre\Automatas\Palabras\palabras2.js"
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function analizarPalabra(palabra) {
// Elimina espacios en blanco al inicio y al final de la palabra
palabra = palabra.trim();

// Verificar si la palabra es "EXIT" en mayúsculas para salir del programa
if (palabra === "EXIT") {
    console.log("¡BYE!");
    rl.close();
    return;
}

// Verificar el tipo de palabra
if (esPalabraSobreesdrujula(palabra)) {
    console.log(`La palabra "${palabra}" es sobreesdrújula.`);
} else if (esPalabraEsdrújula(palabra)) {
    console.log(`La palabra "${palabra}" es esdrújula.`);
} else if (esPalabraGrave(palabra)) {
    console.log(`La palabra "${palabra}" es grave.`);
} else if (esPalabraAguda(palabra)) {
    console.log(`La palabra "${palabra}" es aguda.`);
} else {
    console.log(`No se pudo determinar el tipo de palabra para "${palabra}".`);
}

// Solicitar otra palabra
pedirPalabra();
}

function esPalabraAguda(palabra) {
const ultimaLetra = palabra[palabra.length - 1].toLowerCase();
return ultimaLetra === 'n' || ultimaLetra === 's' || esVocal(ultimaLetra);
}

function esPalabraGrave(palabra) {
const ultimaLetra = palabra[palabra.length - 1].toLowerCase();
return !(ultimaLetra === 'n' || ultimaLetra === 's' || esVocal(ultimaLetra));
}

function esPalabraEsdrújula(palabra) {
return cuentaSílabas(palabra) > 2;
}

function esPalabraSobreesdrujula(palabra) {
return cuentaSílabas(palabra) < 2;
}

function esVocal(letra) {
return ['a', 'e', 'i', 'o', 'u'].includes(letra);
}

function cuentaSílabas(palabra) {
palabra = palabra.toLowerCase();
const vocales = "aeiouáéíóú";
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
        contador++;
    }
}

return contador;
}

function pedirPalabra() {
rl.question("Ingresa una palabra (o escribe EXIT para salir): ", (palabra) => {
    analizarPalabra(palabra);
});
}

// Inicia el programa pidiendo la primera palabra
pedirPalabra();

