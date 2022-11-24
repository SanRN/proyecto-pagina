var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');

});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

function ese(){
	let texto = document.getElementById("texto-area").value;
	document.getElementById("tex1").innerHTML = texto;
	// let imagen = document.getElementById("imagen1")
	// document.getElementById("aui").innerHTML = imagen;
	document.getElementById("texto-area").value = "";
	location.href="empleador.html"
}


