
// const load = document.querySelector(".cargador");

function encriptar(){
    let msg = document.getElementById("textoEntrada");
    var msgEncriptado = msg.value.replaceAll("e","enter")
    .replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober")
    .replaceAll("u","ufat");
    //load.classList.remove("mostrar_cargador");
    document.getElementById("imaDerecha").style.display="none";
    document.getElementById("textoRef").style.display="none";
    document.getElementById("textoSalida").innerHTML = msgEncriptado;
    msg.value = "Mensaje encriptado...";
    msg.style.background = "url('imagenes/matrix.jpg')";
    msg.style.color = "yellow";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    document.getElementById("textoSalida").disabled = false;
 }

function desencriptar(){
    let msg = document.getElementById("textoEntrada");
    var msgEncriptado = msg.value.replaceAll("enter","e")
    .replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o")
    .replaceAll("ufat","u");
    //load.classList.remove("mostrar_cargador");
    document.getElementById("imaDerecha").style.display="none";
    document.getElementById("textoRef").style.display="none";
    document.getElementById("textoSalida").value = msgEncriptado;
    msg.value = "Mensaje desencriptado...";
    msg.style.background = "url('imagenes/matrix.jpg')";
    msg.style.color = "yellow";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    document.getElementById("textoSalida").disabled = false;
}

function copiar(){
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand('copy');
    document.getElementById("textoEntrada").style.background = "rgba(183, 215, 219, 0.088)";
    document.getElementById("textoEntrada").style.color = "#79dd27";
    document.getElementById("textoSalida").value = "";
    document.getElementById("textoEntrada").value = "";
    document.getElementById("textoEntrada").focus();
    alert("Copiado al portapapeles");
}

function limpiar(){
    let msg = document.getElementById("textoEntrada");
    msg.value = "";
    msg.style.background = "rgba(183, 215, 219, 0.088)";
    msg.focus();
    document.getElementById("textoSalida").value = "Ingrese el texto que deseas encriptar o desencriptar";
    document.getElementById("textoSalida").disabled = true;
    // document.getElementById("imaDerecha").style.display="block";
    document.getElementById("textoRef").style.display="block";
    document.getElementById("copiar").style.display="none";
}

var msg = document.getElementById("textoEntrada");
function alertar(){
    if (/[A-Z0-9]/g.test(msg.value)||/[àèìòùÀÈÌÒÙñÑáéíóúÁÉÍÓÚ]/g.test(msg.value)||/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi.test(msg.value)){
        console.log(msg.value);
        msg.value = "";
        alert("Recuerde solo ingresar texto en minuscula y sin acentos");
        } 
}

// function mostrarCargador() {
//     if(texEntrada.value != ""){
//         load.classList.add("mostrar_cargador");
//     }
// }

var ctrl;
var ctrl1;
var ctrl2;

function encriptadoRetrasado(){
    if(texEntrada.value==""){
        alert("Debe escribir un mensaje")
    } else{
        ctrl = setTimeout(encriptar, 3000);
    }
}
function desencriptadoRetrasado(){
    if(texEntrada.value==""){
        alert("Debe escribir un mensaje")
    } else{
        ctrl1 = setTimeout(desencriptar, 3000);
    }
}
// function loader(){
//     ctrl2 = setTimeout(desencriptar, 2900);
// }


const texEntrada = document.getElementById("textoEntrada");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const clear = document.getElementById("limpiar");


texEntrada.addEventListener("keyup",alertar);
//btnEncriptar.addEventListener("click",mostrarCargador);
btnEncriptar.addEventListener("click",encriptadoRetrasado);
//btnDesencriptar.addEventListener("click",mostrarCargador);
btnDesencriptar.addEventListener("click", desencriptadoRetrasado);
btnCopiar.addEventListener("click",copiar);
clear.addEventListener("click",limpiar);



