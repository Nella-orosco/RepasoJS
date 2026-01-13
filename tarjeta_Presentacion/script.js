const tema = document.getElementById("btn-theme");
const edit = document.getElementById("btn-edit");
const body = document.body;
const nameText = document.getElementById("name");


//Cambiar mood: 
tema.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    console.log("Tema cambiado:",body.classList);
});


//Cambio de nombre
edit.addEventListener("click", function () {
    let newNom = prompt("Introduce tu nombre");

    if (newNom) {
        nameText.textContent = newNom;
        console.log("Nombre actualizado: ", newNom);
    } else
    {
        console.log("El usuario cancelo");
    }
});
