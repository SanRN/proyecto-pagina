function crearPublicacion(){
    alert("eso carago")
}
function asa(){
    let texto = document.getElementById("eso").value;  //para capturar variables
    alert(texto)
    document.getElementById("eso").focus(); //para posiciones el puntero en el elemento seleccionado
    document.getElementById("eso").value = ""; // para limpiar los campos
    document.getElementById("a").innerHTML = texto; // para asignar el texto captura y enviarlo al html
}