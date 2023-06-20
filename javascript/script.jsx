const box = document.querySelector('.box');  
  //puedo manipular el dom con el document, el punto indica que es una clase. 
  //Esta trayendo todo el contenedor del box
box.addEventListener('click',function(){  
  //agrega un evento del tipo listener,¿cuakl evento? el evento tipo click
  //va a escuchar el box, un cuadro de color rojo, asi cuando alguien haga click, el hace una accion declarada como funcion (anonima)
  //dentro de la funcion, va a cambiar el estilo a azul
  box.style.backgroundColor = 'blue';
});

const texto = document.getElementById('texto');
texto.addEventListener('click',function(){
  texto.textContent= 'que talca';
});

const formulario = document.getElementById("myform");
formulario.addEventListener('submit',function(event){ //puede ser submit pero el boton final debe ser submit tambien
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("mail");
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const telefono = document.getElementById("telefono");

  if (nombre.value === ''){
    alert('Ingrese un nombre');
  }

  if(telefono.value === ''){
    alert('Ingrese un telefono');
  }

  if(validEmail.test(correo)){
    alert("formato de correo es correcto")
  }
  else{
    alert("formato de correo es incorrecto")
  }

});