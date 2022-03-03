// let listaPalabrasGuardadas en juego.js
// let nuevaPalabraIngresada en juego.js

/* Funcion que permite guardar el texto ingresado en la pantalla principal */
function GuardarTextoIntro(palabra){
    palabra = document.getElementById("TextoIngresado").value;    
    /* Mostrar el resultado en consola */
    console.log(palabra + ": "+palabra.length + " Palabras del texto ingresado"); // Permite ver la palabra ingresada en la caja de texto inicial y la cantidad de caracteres
    console.log(listaPalabrasGuardadas.length + " Elementos guardados en el diccionario. Los elementos son: "+listaPalabrasGuardadas);// Permite ver cuantas palabras hay en el diccionario palabraSecreta
    /* Control de Validacion de caracteres */
    for(var car=0; car<palabra.length; car++){
        /* Validar caracteres especiales */
        if(palabra.codePointAt(car)>31 && palabra.codePointAt(car)<65 || palabra.codePointAt(car)>123 && palabra.codePointAt(car)<255){
            alert("No se admiten caracteres especiales ni numeros.");
            return false;            
        }
        if(palabra.codePointAt(car)>91 && palabra.codePointAt(car)<123){
            palabra = palabra.toUpperCase();//Convierte el texto a palabras mayusculas.
            /* Validar si la palabra ya existe aunque se haya escrito minuscula */
            for(var cant=0; cant < listaPalabrasGuardadas.length; cant++){
                if(palabra == listaPalabrasGuardadas[cant]){
                    console.log(palabra+". Esta palabra está en posicion: " + cant);
                    alert("Esta palabra ya existe en el diccionario. Ingrese otra palabra diferente.");
                    return false;
                }
            }
            /* Permite guardar el texto convertido en mayusculas*/
            console.log("Convertido a Mayuscula: " + palabra);
            listaPalabrasGuardadas.push(palabra);// Guardar el dato en el arreglo del diccionario de palabras
            console.log("Guardado con exito."+listaPalabrasGuardadas.length + " Elementos guardados en el diccionario. Los elementos son: "+listaPalabrasGuardadas);
            return true;
        }/* Condicion que necesita minimo cuatro caracteres*/
        if(palabra.length < 4){
            alert("Se requieren minimo 4 caracteres para agregar.");
            return false;
        }
    }
    /* Ciclo para Verificar las palabras ingresadas en el diccionario */
    for(var cant=0; cant < listaPalabrasGuardadas.length; cant++){
        if(palabra == listaPalabrasGuardadas[cant]){
            console.log(palabra+". Esta palabra está en posicion: " + cant);
            alert("Esta palabra ya existe en el diccionario. Ingrese otra palabra diferente.");
            return false;
        }
    }
    listaPalabrasGuardadas.push(palabra);// Guardar el dato en el arreglo del diccionario de palabras
    console.log("Guardado con exito con normalidad (Mayusculas).");
    console.log(listaPalabrasGuardadas.length + " Elementos guardados en el diccionario. Los elementos son: "+listaPalabrasGuardadas);// Permite ver cuantas palabras hay en el diccionario palabraSecreta
    return true;       
}