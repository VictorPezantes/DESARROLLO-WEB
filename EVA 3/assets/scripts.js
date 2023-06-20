/*
1. CAMBIO DE ESTILO: Crea una función que cambie el color de fondo de un elemento al hacer clic en él.
*/

let cambioFondo = document.querySelector(".cambioFondo");
cambioFondo.addEventListener("click", function cambioColor() {
  cambioFondo.style.backgroundColor = "blueviolet"
});

/*
2. CONTADOR DE CLICS: Crea un contador que aumente en uno cada vez que se haga clic en un botón y muestre el resultado en un elemento HTML. 
*/

let botonClics = document.getElementById('clics');
let resultado = document.getElementById('resultado');

let contador = 0;

botonClics.addEventListener('click', function () {
  contador++;
  resultado.textContent = contador;
});

/*
3. LISTA INTERACTIVA: Crea una lista de elementos y permite agregar nuevos elementos a través de un formulario. Los elementos deben aparecer automáticamente en la lista. 
*/

const formAgrega = document.getElementById('formAgrega');
const textElement = document.getElementById('textElement');
const listaElements = document.getElementById('listaElements');
const nuevoLi = document.getElementById('nuevoLi');

formAgrega.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = textElement.value;
  listaElements.insertBefore(nuevoElemento, nuevoLi);
  textElement.value = '';
});

/*
4. GALERÍA DE IMÁGENES: Crea una galería de imágenes en la que se pueda hacer clic en cada imagen para verla en un tamaño más grande. 
*/

function mostrarImagen(imagen) {
  let modal = document.getElementById("modal");
  let imagenModal = document.getElementById("imagen-modal");
  imagenModal.src = imagen.src;
  modal.style.display = "block";
}

function cerrarModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}


/*
5. VALIDACIÓN DE FORMULARIO: Crea un formulario con campos de nombre, correo electrónico y contraseña. 
Valida que todos los campos estén completos antes de enviar el formulario, mostrar mensaje en un alert en caso un campo del formulario esté vacío .
*/

let validarForm = document.querySelector(".validarForm");

validarForm.addEventListener("submit", function () {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contrasena").value;
  let validarForm = document.querySelector(".validarForm");
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nombre == "" || nombre == undefined) {
    alert("Ingrese su nombre");
  }
  else if (!emailRegex.test(email)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return;
  }
  else if (contraseña == "") {
    alert("Ingrese su contraseña");
  } else {
    validarForm.submit();
  }
});

/*
6. CONTADOR DE CARACTERES: Crea un cuadro de texto que muestre cuántos caracteres quedan disponibles 
a medida que se escribe en él. Limita la cantidad máxima de caracteres permitidos. 
*/

let input = document.getElementById("contadorCaracteres");
let maxCaracteres = 30; // Cantidad máxima de caracteres permitidos
let contadorCaracteres = document.createElement("span"); // Elemento para mostrar el contador
contadorCaracteres.innerText = ` ${maxCaracteres} caracteres restantes`;
input.parentNode.insertBefore(contadorCaracteres, input.nextSibling); // Insertar el contador después del cuadro de texto

input.addEventListener("input", function () {
  let caracteresRestantes = maxCaracteres - input.value.length;
  contadorCaracteres.innerText = `${caracteresRestantes} caracteres restantes`;
});

/*
7. MENÚ DESPLEGABLE: Crea un menú desplegable que muestre opciones adicionales cuando se hace clic en él. 
*/

function clickMostrar() {
  let x = document.getElementById("textoOculto");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*
8. ANIMACIÓN CSS: Crea una animación utilizando CSS y JavaScript. Por ejemplo, puedes hacer que un elemento se 
desvanezca o aumente de tamaño gradualmente al hacer clic en un botón.
*/

const elementoDes = document.getElementById('elementoDes');
const botonDes = document.getElementById('botonDes');

botonDes.addEventListener('click', () => {
  elementoDes.classList.add('fade-out');
  setTimeout(() => {
    elementoDes.classList.remove('fade-out');
    elementoDes.classList.add('fade-in');
  }, 1000);
});