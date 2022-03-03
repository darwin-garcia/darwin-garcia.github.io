/* Juego del ahorcado v1*/
/* --------------> Variables del Juego <-----------------*/
let alfabeto = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
let listaPalabrasGuardadas = ['ALURA', 'ORACLE', 'PROGRAMA']; // Todas las palabras del diccionario en el arreglo.
let rondas = 0; // Numero de rondas que guarda en memoria. Pueden ser infinitas.
let acertadas = 0; // Contador de palabras acertadas
let contarPalabrasErroneas = 0; //Contador de errores para dibujar el ahorcado
let intentos = 10; //Solo se usa para visualizar
var letrasAgrupadas = []; // Letras encontradas en la palabra seleccionada aleatoreamente
let palabraSecreta = ""; // Palabra oculta en el juego que es seleccionada aleatoremente mediante un metodo.
let contarLetraRepetida = 0; // Permite contar las letras repetidas
/* --------------> Funciones que debe realizar el juego <---------------------*/
function preCarga(){
    rondas=rondas+1; // Contador de Rondas en el juego
    intentos=10;
    acertadas=0;
    contarPalabrasErroneas=0;
    intentos = 10;
    palabraSecreta="";
    letrasAgrupadas=[];
    limpiarTablero();
    dibujarTablero();
    limpiarMarcador();
    dibujarTablero();// Dibujo el tablero del juego
    dibujarPlay();
    dibujarHeart();
    dibujarRondas(rondas);
    dibujarIntentoRestante(intentos);  
}
/* --------> (Funcion para iniciar el Juego del ahorcado) <--------------- */
function IniciarJuego(){ 
    // El tablero canvas esta oculto. Para ejecutar el juego debe validar la variable oculto desde grafico.js
    if(oculto != "hidden"){
        tablero.removeAttribute("hidden");
    }
    preCarga();
    tablero.scrollIntoView(
        {block: "end", 
        behavior: "smooth"}
        );
    generarPalabra(); // Metodo que genera la palabra aleatorea en el juego   
    console.log("Ronda: "+rondas+". La palabra generada fue: " + palabraSecreta);    
    dibujarSubrayado(palabraSecreta); // Dibujar las palabras y lineas subrayadas del ahorcado    
    document.addEventListener('keydown', teclado); // Capturar letras del teclado y pasar a la funcion teclado
}
/* ----------------------> Funciones In-Game <--------------*/
// Funciones del teclado
function teclado(letra){
    const nombreLetra = letra.key;    
    letra = nombreLetra.toUpperCase(); //Convierte la tecla digitada en Mayuscula   
    var palabraEjecutada = palabraSecreta.split(""); //Permite guardar la letra con intentos fallidos
    if(alfabeto.includes(letra)){
        if(!letrasAgrupadas.includes(letra)){
            /* Dibujar la palabra correcta en el tablero */
            for(var x = 0; x < palabraEjecutada.length; x++){
                if(letra==palabraEjecutada[x]){
                    dibujarLetraCorrecta(letra,x,"green");// La palabra correcta se escribe en verde
                    acertadas = acertadas + 1;// Contador de aciertos
                }
            }
            /* Ganador */
            if(acertadas == palabraEjecutada.length){
                ganarJuego();                
            }
            /* Perdedora */
            if(!palabraEjecutada.includes(letra)){
                // contar los errores o intentos en decreciente
                switch(contarPalabrasErroneas){
                    case 0:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red"); // La palabra incorrecta se escribe en rojo
                        dibujarFigura(0);
                        intentos = intentos - 1;
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 1:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(1);
                        intentos = intentos - 1;
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 2:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(2);
                        intentos = intentos - 1;
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 3:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(3);
                        intentos = intentos - 1; 
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 4:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(4);
                        intentos = intentos - 1; 
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 5:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(5);
                        intentos = intentos - 1; 
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 6:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(6);
                        intentos = intentos - 1; 
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 7:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(7); 
                        intentos = intentos - 1;
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 8:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(8);
                        intentos = intentos - 1; 
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intentos restantes");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 9:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(9); 
                        intentos = intentos - 1;
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        console.log("Letra "+letra+" incorrecta. Quedan "+intentos+" intento restante");
                        contarPalabrasErroneas = contarPalabrasErroneas + 1;
                        break;
                    case 10:
                        dibujarLetraIncorrecta(letra, contarPalabrasErroneas, "red");
                        dibujarFigura(10);
                        limpiarNumeroIntentoRestante();
                        dibujarIntentoRestante(intentos);
                        finJuego();
                        break;
                }
                if(intentos==0){
                    finJuego();
                }
            }
            
        }
        else{ // Indicar la letra repetida en pantalla y contar la cantidad de veces
            alert("La letra: "+letra+" ya fue ingresada. Intentelo otra vez.");
            contarLetraRepetida = contarLetraRepetida+1;
            console.log("Esta letra: "+letra+" Ya está repetida "+contarLetraRepetida+" veces.");
        }
        letrasAgrupadas.push(letra); //Sirve para agregar la letra pulsada en el teclado
    }
    // Mensaje de Alerta. Valida la letra incorrecta 
    else{
        alert("Ingrese solo letras en el teclado.");
    }
}
// Generar palabra aleatorea
function generarPalabra(){
    var Aleatoreo = Math.round(Math.random()*(listaPalabrasGuardadas.length-1));
    palabraSecreta = listaPalabrasGuardadas[Aleatoreo];
    console.log("Palabra escogida en este round:"+ palabraSecreta +". Cargue mi metodo de generar el aleatoreo.");
}
/*-------------------------->Botones del juego <-----------------------------*/
// Funcion para Reiniciar el Juego. Puede continuar al proximo round
function ganarJuego(){
    document.removeEventListener("keydown",teclado);
    console.log("Juego terminado. Felicitaciones!");
    MensajeFinal("Ganaste!", 420,540, "blue");// Mensaje Ganador
    crearBotonReiniciar();
    crearBotonSalir();
}
function finJuego(){
    document.removeEventListener("keydown",teclado);
    console.log("Juego terminado. Ronda "+rondas);
    MensajeFinal("¡Fin del Juego! La palabra fue: "+palabraSecreta+".", 360, 540, "red");
    crearBotonReiniciar();
    crearBotonSalir();
}
function reiniciarJuego(){
    preCarga();
    IniciarJuego();
}
// Funcion para salir del juego. Regreso al menu principal
function salirJuego(){
    rondas=0;
    limpiarTablero();
    tablero.setAttribute("hidden", "hidden");
    console.log("El tablero se ha reiniciado. Rondas="+rondas);    
    preCarga();
}


