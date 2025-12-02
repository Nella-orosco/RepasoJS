//funciones: 
function suma (){
    let num1 = 1;
    let num2 = 2; 

    console.log("Resultat=", num1+ num2); //sirve como el println 
}
//llamar a la función 
suma();

function sumar (num1, num2){
    let resultat = num1+num2;
    console.log ("El resultat es=", resultat);
}
//al no tener valores asignados en la funcion, se le pone cuando la llamas:
sumar(2,3);

//Arrow function;sintaxis más concisa para definir una función de manera abreviada
const sum2 =(numA, numB) =>  numA + numB;
console.log("Estic cridant a:", sum2(6,3));