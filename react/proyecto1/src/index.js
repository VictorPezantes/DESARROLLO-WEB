// Crear funcion en java que pueda mostrar los multiplo de 8 hasta el valor 100. Debe aparecer en pantalla 8 -16 -24
//Ejercicio 1
// function mostrarMultiplosDeOcho(){
//   //bloque de codigo donde va la logica para resolver el problema

//   //declarar una variable y asignar el valor 8
//   let multiplo = 8;
//   for(let i=1;i<=100;i++){
//     //pregunto si el mod o resto de la operacion entre 8 es = 0
//     if (i % multiplo === 0){
//       //console.log(i+"-"); // para la consola
//       document.write(i+"-"); 
//     }
//   }
// }
// //ejecuto la funcion
// mostrarMultiplosDeOcho();


//Ejercicio 2: Calcular el area de un triangulo
// function areaTriangulo(base,altura){
//   return (base*altura)/2;
// }
// document.write("Area de un triángulo: "+areaTriangulo(5,8));
// alert("Area de un triángulo: "+areaTriangulo(5,8)); //para imprimirlo como una alerta

//Ejercicio 3: Calcular el promedio de un arreglo de numeros
// function calcularPromedioArreglo(arreglo){
//   const sum = arreglo.reduce((acc,curr)=> acc+curr,0); //obtenemos la suma de todos los numeros del arreglo que recibo por parametro

//   return sum/ arreglo.length;
// }
// document.write("Promedio calculado de un arreglo: "+calcularPromedioArreglo([4,6,8,9,10]));

//Ejercicio 4: Verificar si una palabra es un palindromo

// function esPalindromo(palabra){
//   const palabraReversa = palabra.split('').reverse().join('');

//   return palabra.toLowerCase()=== palabraReversa.toLowerCase();

//   if //falta terminar aca para dar un mensaje si da true o false
// }
// document.write("La palabra es: "+esPalindromo('reconocer'));


//Ejercicio 5: Verificar si un numero es par o impar usando el operador ternario

// let numero = 25;

// const resultado = numero % 2 === 0 ? "par" : "impar";
// alert(`El numero ${numero} es ${resultado}`);

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const confirmacion = confirm('¿estas seguro?');
  if (confirmacion) {
    formulario.submit();
  }
});

