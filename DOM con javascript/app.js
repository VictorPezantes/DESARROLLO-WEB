
//cambiar color del documento con un boton
const boton = document.querySelector('.boton');
boton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});


const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const mostrarBtn = document.getElementById('mostrarBtn');
const contenidoTexto = document.getElementById('contenidoTexto');

mostrarBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  const texto = textInput.value;
  contenidoTexto.textContent = texto;
  textInput.value = ''; // Limpia el campo de texto
});
