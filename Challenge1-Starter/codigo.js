/* -----------------------------Funciones de los botones------------------------------- */
/* ---> Encriptar el Texto <--- */
function Encriptar(){
    var textoIngresado = document.getElementById("TextoIngresado").value; // Lectura del texto ingresado en el teclado desde la caja de texto inicial
    for(var pos=0; pos< textoIngresado.length; pos++){
        /* --- Minimo requerido de cuatro caracteres --- */
        if(textoIngresado.length<4){
            alert("Se requiere 4 caracteres minimo para encriptar el texto.");
            break;
        }
        /* ---  Condicion de lectura a traves de Codigos ASCII --- */
        if(textoIngresado.codePointAt(pos)>31 && textoIngresado.codePointAt(pos)<48){
            alert("No se pueden convertir simbolos.");
            break;
        }
        if(textoIngresado.codePointAt(pos)>47 && textoIngresado.codePointAt(pos)<58){
            alert("No se pueden convertir numeros");
            break;
        }
        if(textoIngresado.codePointAt(pos)>57 && textoIngresado.codePointAt(pos)<65){
            alert("No se pueden convertir simbolos.");
            break;
        }
        if(textoIngresado.codePointAt(pos)>64 && textoIngresado.codePointAt(pos)<91){
            alert("No se pueden convertir letras mayusculas.");
            break;
        }
        if(textoIngresado.codePointAt(pos)>90 && textoIngresado.codePointAt(pos)<95){
            alert("No se pueden convertir simbolos.");
            break;
        }
        if(textoIngresado.codePointAt(pos)>122 && textoIngresado.codePointAt(pos)<168){
            alert("No se pueden convertir acentos.");
            break;
        }
        /* Conversion del texto (Vocales) */
        var textoConvertido = textoIngresado.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat'); // Reemplazo de los caracteres vocales
        document.getElementById("TextoConvertido").value = textoConvertido; // Captura el texto convertido a la caja de texto de resultado encriptado
    }    
}
/* ---> Desencriptar el Texto <--- */
function Desencriptar(){
    var textoIngresado = document.getElementById("TextoIngresado").value; // Lectura del texto ingresado en el teclado desde la caja de texto inicial
    /* Conversion inversa del texto (Vocales) */
    var textoConvertido = textoIngresado.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u'); // Reemplazo del texto de resultado encriptado (inverso)
    document.getElementById("TextoConvertido").value = textoConvertido; // Captura el texto convertido a la caja de texto de resultado desencriptado
}
/* ---> Copiar el Texto <--- */
function Copiar(){
    textoConvertido = document.getElementById("TextoConvertido");
    textoConvertido.select();
    alert("Mensaje Copiado en el portapapeles. Use Ctrl+V en el teclado.")
}
/*------ Borrar el texto de la primer Input Text ------------*/
function Borrar1(){
    textoIngresado = document.getElementById("TextoIngresado").value="";
}
/*------ Borrar el texto del segundo Input Text ------------*/
function Borrar2(){
    textoConvertido = document.getElementById("TextoConvertido").value="";
}