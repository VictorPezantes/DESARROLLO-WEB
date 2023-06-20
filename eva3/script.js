const box = document.querySelector('.box');
box.addEventListener('click', function() {
    box.style.backgroundColor = 'blue';
});

$(document).on('click', 'button', function() {
    let i = +$(this).text();
      if (i < 20 ) { 
        $(this).text(++i);
      }
  });


function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' characters remaining';
    }
}
function changeTableCellText(event) {
    if (event.target.tagName === "TD") {
        event.target.textContent = "Nuevo Texto";
    }
}
function addItemToList() {
    var listInput = document.getElementById("listInput");
    var list = document.getElementById("list");
    var newItem = document.createElement("li");
    newItem.textContent = listInput.value;
    list.appendChild(newItem);
    listInput.value = "";
}

function validateForm(event) {
    event.preventDefault();
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");

    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor completa todos los campos");
    } else {
        alert("Formulario enviado correctamente");
        // Aquí puedes enviar el formulario o realizar otras acciones
    }
}

function fadeOutElement(element) {
    element.classList.add("fade-out");
}