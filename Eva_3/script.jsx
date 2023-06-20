//Pregunta 1
// var miElemento = document.getElementById("miElemento");

// miElemento.addEventListener("click", function () {
//     cambiarColor();
// });

// function cambiarColor() {
//     miElemento.style.backgroundColor = "blue";
// }



//Pregunta 2
// var contador = 0;
// var boton = document.getElementById("miBoton");
// var contadorElemento = document.getElementById("contador");

// boton.addEventListener("click", function() {
//   contador++;
//   contadorElemento.textContent = contador;
// });



// Pregunta 3
// var formulario = document.getElementById("formulario");
// var inputElemento = document.getElementById("nuevoElemento");
// var lista = document.getElementById("lista");

// formulario.addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita el envío del formulario

//     var nuevoElemento = inputElemento.value;
//     if (nuevoElemento !== "") {
//         var li = document.createElement("li");
//         li.textContent = nuevoElemento;
//         lista.appendChild(li);
//         inputElemento.value = ""; // Limpia el campo de entrada
//     }
// });



// Pregunta 4
// Obtener referencias a los elementos
// const images = document.querySelectorAll('.gallery img');
// const modal = document.getElementById('modal');
// const fullImage = document.getElementById('full-image');
// const close = document.getElementsByClassName('close')[0];

// images.forEach(image => {
// 	image.addEventListener('click', () => {
// 		modal.style.display = 'block';
// 		fullImage.src = image.src;
// 	});
// });


// close.addEventListener('click', () => {
// 	modal.style.display = 'none';
// });


// Pregunta 5
// function validateForm(event) {
//     event.preventDefault(); // Evita el envío del formulario por defecto
//     var nameInput = document.getElementById("name");
//     var emailInput = document.getElementById("email");
//     var passwordInput = document.getElementById("password");
//     var name = nameInput.value.trim();
//     var email = emailInput.value.trim();
//     var password = passwordInput.value.trim();

//     if (name === "") {
//         alert("Por favor, ingresa tu nombre.");
//         nameInput.focus();
//         return;
//     }

//     if (email === "") {
//         alert("Por favor, ingresa tu correo electrónico.");
//         emailInput.focus();
//         return;
//     }

//     if (password === "") {
//         alert("Por favor, ingresa tu contraseña.");
//         passwordInput.focus();
//         return;
//     }
//     // Si todos los campos están completos, puedes enviar el formulario
//     alert("Formulario enviado correctamente!");
//     document.getElementById("myForm").reset();
// }



// Pregunta 6
// function updateCharacterCount() {
//     var textarea = document.getElementById("myTextarea");
//     var characterCount = document.getElementById("characterCount");
//     var maxLength = textarea.getAttribute("maxlength");
//     var currentLength = textarea.value.length;
//     var remaining = maxLength - currentLength;
//     characterCount.textContent = remaining + " caracteres restantes";
//   }



// Pregunta 7
// function toggleDropdown() {
//     var dropdown = document.getElementById("myDropdown");
//     dropdown.classList.toggle("show");
// }
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }



// Pregunta 8
// function fadeOutElement() {
//     var element = document.getElementById("element");
//     element.classList.add("hidden");
// }