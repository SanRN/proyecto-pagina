document.getElementById('boton').addEventListener('click', validacion)
const errMessages = document.querySelectorAll('#error')

function validacion(){
    const a = document.getElementById("nombre").value;
    const b = document.getElementById("apellido").value;
    const c = document.getElementById("doc").value;
    const d = document.getElementById("Ndoc").value;
    const e = document.getElementById("edad").value;
    const f = document.getElementById("fecha").value;
    const g = document.getElementById("sexo").value;
    const h = document.getElementById("dic").value;
    const i = document.getElementById("email").value;
    const j = document.getElementById("cont").value;
    const k = document.getElementById("cont2").value;
    const l = document.getElementById("tipo").value;
    const n = document.getElementById("tel").value;
    const array=[a ,b, c,d,e,f,g,h,i,j,k,l,n]
    alert(a)
    for (let index = 0; index < array.length; index++) {
        if (array[index]="") {
            toggleError
        }
    }
    if (l==1) {
        location.href="empleador.html";
    } else {
        location.href="empleado.html";
    }
}

function toggleError() {
    // Show error message
    errMessages.forEach((el) => {
    el.classList.toggle('hidden')
    })

    // Highlight input and label with red
    const allBorders = document.querySelectorAll('.border-gray-200')
    const allTexts = document.querySelectorAll('.text-gray-500')
    allBorders.forEach((el) => {
    el.classList.toggle('border-red-600')
    })
    allTexts.forEach((el) => {
    el.classList.toggle('text-red-600')
    })
}
function soloNumero(e){
	k = (document.all) ? e.keyCode : e.which;
	if (k==8 || k==0) return true;
	patron= /\d/;
	n= String.fromCharCode(k);
	return patron.test(n);
	
}
function soloLetras(){
	if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122) && (event.keyCode <209)) 
	event.returnValue=false;
	
}