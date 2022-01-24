
 
var textoEntrante = document.querySelector("#input-texto");
var btnEn = document.querySelector("#btn-encriptar");
var btnDes = document.querySelector("#btn-desencriptar");
var btnCopy = document.querySelector("#btn-copy");
var inputRes = document.querySelector("#msg");
textoEntrante.focus();
function encrip () {
    var mensaje = textoEntrante.value;
    var cambio = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("u", "ufat").replaceAll("o", "ober");
    inputRes.value = cambio;}
function desencrip () {
    var mensaje = textoEntrante.value;
    var retorno = mensaje.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ufat", "u").replaceAll("ober", "o");
    inputRes.value = retorno; }
function copyText(){
    var res = inputRes.value;
    navigator.clipboard.writeText(res);
    inputRes.select();}
btnEn.onclick = encrip;
btnDes.onclick = desencrip;
btnCopy.onclick = copyText;


