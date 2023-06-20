/* 1. CAMBIO DE ESTILO: Crea una función que cambie el color de fondo de un elemento al hacer clic en él.(7 puntos)*/

const box = document.querySelector('.color'); 
box.addEventListener('click', function () {
  box.style.backgroundColor = 'black';
});


/*2. CONTADOR DE CLICS: Crea un contador que aumente en uno cada vez que se haga clic en un botón y muestre el resultado en un elemento HTML. .(7 puntos)*/
let botonElement = document.getElementById("botonClick");
let pElement = document.getElementById("areaContador");
let contador = 0;
botonElement.onclick = function () {
contador++;
pElement.textContent = contador;
}


/*3.LISTA INTERACTIVA: Crea una lista de elementos y permite agregar nuevos elementos a través de un formulario. Los elementos deben aparecer automáticamente en la lista. .(7 puntos)*/
// Función para agregar un nuevo elemento a la lista
let formulario = document.getElementById("formulario");
let inputNuevoElemento = document.getElementById("nuevoElemento");
let listaElementos = document.getElementById("listaElementos");

// Función para agregar un nuevo elemento a la lista
function agregarElemento(event) {
  event.preventDefault();
  
  let valorElemento = inputNuevoElemento.value;
  
  if (valorElemento !== "") {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = valorElemento;
    listaElementos.appendChild(nuevoElemento);
    inputNuevoElemento.value = "";
  }
}

// Asignar el evento "submit" al formulario para agregar un nuevo elemento
formulario.addEventListener("submit", agregarElemento);
  
  // Función para agregar un nuevo elemento a la lista
  function agregarElemento(event) {
    event.preventDefault();
    
    let valorElemento = inputNuevoElemento.value;
    
    if (valorElemento !== "") {
      let nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = valorElemento;
      listaElementos.appendChild(nuevoElemento);
      inputNuevoElemento.value = "";
    }
  }



/*4. GALERÍA DE IMÁGENES: Crea una galería de imágenes en la que se pueda hacer clic en cada imagen para verla en un tamaño más grande. .(7 puntos)*/

  let imagenes = document.getElementsByClassName("imagen");

let modal = document.getElementById("modal");
let imagenModal = document.getElementById("imagenModal");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function() {
    modal.style.display = "block";
    imagenModal.src = this.src;
  });
}

let cerrarModal = document.getElementsByClassName("cerrar")[0];
cerrarModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

/*5. VALIDACIÓN DE FORMULARIO: Crea un formulario con campos de nombre, correo electrónico y contraseña. Valida que todos los campos estén completos antes de enviar el formulario, mostrar mensaje en un alert en caso un campo del formulario esté vacío .(7 puntos)*/

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
  
    if (nombre === "" || correo === "" || contrasena === "") {
      document.getElementById("mensaje").textContent = "Por favor completa todos los campos.";
      return false;
    }
  
    return true;
  }

/*6. CONTADOR DE CARACTERES: Crea un cuadro de texto que muestre cuántos caracteres quedan disponibles a medida que se escribe en él. Limita la cantidad máxima de caracteres permitidos. .(7 puntos)*/

function countChars(obj){
    let maxLength = 20;
    let strLength = obj.value.length;
    let charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: blue;">El maximo de caracteres es '+maxLength+' Excede el limite </span>'; 
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' characters remaining';
    }
}

/*7. MENÚ DESPLEGABLE: Crea un menú desplegable que muestre opciones adicionales cuando se hace clic en él. .(7 puntos)*/


let menu = document.getElementById("menu");
let mensaje = document.getElementById("mensaje");

menu.addEventListener("change", function() {
  let opcionSeleccionada = menu.value; // Obtener el valor de la opción seleccionada

 if (opcionSeleccionada !== "") { // Verificar si se seleccionó una opción válida
    mensaje.textContent = "Opción seleccionada: " + opcionSeleccionada;
  } else {
    mensaje.textContent = ""; // Limpiar el mensaje si no se seleccionó ninguna opción
  }
});


/*8. ANIMACIÓN CSS: Crea una animación utilizando CSS y JavaScript. Por ejemplo, puedes hacer que un elemento se desvanezca o aumente de tamaño gradualmente al hacer clic en un botón. .(7 puntos)*/

function fadeOut() {
    let element = document.getElementById("myElement");
    element.style.opacity = "0";
  }

 // function fadein() {
    //let element = document.getElementById("myElement");
   // element.style.opacity = "1";
 // }
  
  






