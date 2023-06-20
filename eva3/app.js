// pregunta 1
const boton = document.querySelector('.boton');
boton.addEventListener('click', function(){
    boton.style.backgroundColor = 'blue';
});
//--------------------------------------------------------------------------------------------
//pregunta 2
let contadordeclick = 0;
function incrementCounter() {
    contadordeclick++;
    document.getElementById("contadordeclick").textContent = contadordeclick;
}

//pregunta 3
function agregaritemlista(event) {
    event.preventDefault();
    let listainput = document.getElementById("listainput");
    let listaint = document.getElementById("listaint");
    let nuevoitem = document.createElement("li");
    nuevoitem.textContent = listainput.value;
    listaint.appendChild(nuevoitem);
    listainput.value = "";
}

//pregunta 4

function album(image) {
    let imagen = document.getElementById("imagen");
    imagen.src = image.src;
    let imagenmodificada = document.getElementById("imagenmodificada");
    imagenmodificada.style.display = "block";
}

//-----------------------------------------------------------------------------------------
//pregunta 5
function validarFormulario() {
    // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;
    // var mensaje = document.getElementById("mensaje").value;
  
    // Realiza la validación de los campos
    if (nombre === "" || email === "" || contraseña === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return false;
    }
  
    // Validación adicional para el campo de correo electrónico
    let emailvalidacion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailvalidacion.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }
  
    // Si se pasan todas las validaciones, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}

//pregunta 6

let inputt = document.getElementById("inputt");
let contadorcaracteres = document.getElementById("contadorcaracteres");
contadorcaracteres.textContent = inputt.value.length + "/20";

inputt.addEventListener("input", function () {
    let caracteresrestantes = 20 - inputt.value.length;
    contadorcaracteres.textContent = inputt.value.length + "/" + 20;

    if (caracteresrestantes === 0) {
        contadorcaracteres.style.color = "red";
        
    } else {
        contadorcaracteres.style.color = "black";
    }
});

//pregunta 7

function clickMostrar() {
    let x = document.getElementById("textoOculto");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
//pregunta 8

function desvanecer(texto) {
    texto.classList.add("fade-out");
}