//Part 1:

// Pedimos el nombre del héroe al usuario
let nombreHeroe = prompt("¡Hola! Ingresa el nombre de tu héroe:");

// Definimos las estadísticas iniciales del héroe
let vidaHeroe = 100;
let ataqueHeroe = 10;
let defensaHeroe = 5;
let tePocion = true;
let esVivo = true;        

// Mostramos toda la información del héroe por consola
console.log("Nombre del héroe:", nombreHeroe);
console.log("Vida:", vidaHeroe);
console.log("Ataque:", ataqueHeroe);
console.log("Defensa:", defensaHeroe);
console.log("Tiene poción:", tePocion);
console.log("Está vivo:", esVivo);


//Part 2:

// Elegir clase
let clase = prompt("Escull classe: 1. Guerrer, 2. Mag, 3. Arquer");

switch (clase) {
    case "1": // Guerrer
        tePocion = false;
        ataqueHeroe = ataqueHeroe + 10;
        defensaHeroe = defensaHeroe + 10;
        console.log("Clase: Guerrer");
        break;

    case "2": // Mag
        vidaHeroe = vidaHeroe - 20;
        ataqueHeroe = ataqueHeroe + 25;
        console.log("Clase: Mag");
        break;

    case "3": // Arquer
        tePocion = false;
        ataqueHeroe = ataqueHeroe + 5;
        console.log("Clase: Arquer");
        break;

    default:
        console.log("Clase: Novell (estadísticas base)");
        break;
}

// Mostrar estadísticas finales
console.log("Vida:", vidaHeroe);
console.log("Ataque:", ataqueHeroe);
console.log("Defensa:", defensaHeroe);
console.log("Tiene poción:", tePocion);
