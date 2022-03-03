var tablero = document.querySelector("#juego");
var pixel = tablero.getContext("2d");

let oculto = tablero.getAttribute("hidden");

/* Para dibujar el tablero */
function dibujarTablero(){
    pixel.fillStyle="rgb(168, 222, 255)";
    pixel.fillRect(0,0,1280,800);// Original x=640 y=800
}
/* Para dibujar todas las lineas rectas*/
function dibujarLineas(xinicial,yinicial,xfinal,yfinal){    
    pixel.lineWidth=3;
    pixel.beginPath();
    pixel.moveTo(xinicial,yinicial);
    pixel.lineTo(xfinal,yfinal);
    pixel.stroke();
}
function dibujarCabeza(){
    pixel.fillStyle="yellow";
    pixel.beginPath();
    pixel.arc(450,250,30,0,Math.PI*2,true);//Cabeza
    pixel.moveTo(480,250);  
    pixel.fill();  
    pixel.stroke();
}
function dibujarEmoji(){
    pixel.beginPath();
    pixel.arc(450,250,20,0,Math.PI,false);//Boca
    pixel.moveTo(480,250);
    pixel.stroke();

    pixel.fillStyle="red";
    pixel.beginPath();
    pixel.arc(440,240,5,0,Math.PI*2,true);//Ojo Izquierdo
    pixel.moveTo(520,250);
    pixel.fill(); 
    pixel.stroke();

    pixel.fillStyle="red";
    pixel.beginPath();
    pixel.arc(460,240,5,0,Math.PI*2,true);//Ojo Derecho
    pixel.fill(); 
    pixel.stroke();
}
function limpiarTablero(){
    pixel.clearRect(0,0,640,480);// Limpia el tablero del juego
}
function dibujarHeart(){
    pixel.beginPath();
    pixel.font="28px Arial";
    pixel.fillStyle = "red";
    pixel.fillText("❤",120,60);
}
function dibujarRondas(numero){
    pixel.beginPath();
    pixel.font="28px Arial";
    pixel.fillStyle = "green";
    pixel.fillText(numero,60,60);
}
function dibujarPlay(){
    pixel.beginPath();
    pixel.font="28px Arial";
    pixel.fillStyle = "black";
    pixel.fillText("▶",30,60);
}
function dibujarIntentoRestante(numero){
    pixel.beginPath();
    pixel.font="28px Arial";
    pixel.fillStyle = "green";
    pixel.fillText(numero,150,60);
}
function limpiarMarcador(){
    pixel.fillStyle="rgb(168, 222, 255)";
    pixel.fillRect(0,0,150,100);// Original x=640 y=800
}
function limpiarNumeroIntentoRestante(){
    pixel.fillStyle="rgb(168, 222, 255)";
    pixel.fillRect(150,0,150,100);// Original x=640 y=800
}

var posHorizontal = 600;
var posVertical = 255;
var largoSubrayado = 60;
/* -----------------------------------> Letras <-------------------------------- */
function MensajeFinal(letra, posx, posy, color){
    pixel.beginPath();
    pixel.font="28px Arial";
    pixel.fillStyle = color;
    pixel.fillText(letra,posx,posy);
}
function dibujarLetraCorrecta(letra, cant, color){
    var posicion = posHorizontal + (largoSubrayado * cant);
    pixel.beginPath();
    pixel.font="36px Arial";
    pixel.fillStyle = color;
    pixel.fillText(letra,posicion, 220);
}
function dibujarLetraIncorrecta(letra, error, color){
    var posicion = posHorizontal + (50 * error);
    pixel.beginPath();
    pixel.font="32px Arial";
    pixel.fillStyle = color;
    pixel.fillText(letra,posicion, 400);
}
/*---------------------------------> Texto Subrayado <--------------------------*/
/* Dibuja las lineas donde aparecen las letras correctas para el juego */ 
function dibujarSubrayado(palabra){
    pixel.lineWidth=2; // Grosor de la linea
    pixel.beginPath(); // Inicia el dibujo linea
    for(let x = 0; x < palabra.length; x++){
        var posicion = posHorizontal + (largoSubrayado*x)    
        pixel.moveTo(posicion, posVertical);
        pixel.lineTo(posicion+40, posVertical);
        pixel.stroke();
    }    
}

/* -------------------> Dibujar el ahorcado fisicamente en el tablero <---------------------*/
function dibujarFigura(numerosIntentos){
    // Aqui ingresa el numero de intentos que debe ser controlado por un contador decreciente.
    switch(numerosIntentos){
        case 0:
            dibujarLineas(130,500,480,500); //Primera Secuencia -> Piso
            break;
        case 1:
            dibujarLineas(300,150,300,500); //Segunda Secuencia -> Pared
            break;
        case 2:
            dibujarLineas(300,150,450,150); //Tercera Secuencia -> Soporte
            break;
        case 3:
            dibujarLineas(450,150,450,220); //Cuarta Secuencia -> Soga
            break;
        case 4:
            dibujarCabeza(); //Quinta Secuencia -> Cabeza 
            break;
        case 5:
            dibujarLineas(450,280,450,360); //Sexta Secuencia -> Cuerpo
            break;
        case 6:
            dibujarLineas(400,300,450,300); //Septima Secuencia -> Brazo izquierdo
            break;
        case 7:
            dibujarLineas(450,300,500,300); // Octava secuencia -> Brazo derecho
            break;
        case 8:
            dibujarLineas(400,450,450,360); // Novena secuencia -> Pie Izquierdo
            break;
        case 9:
            dibujarLineas(450,360,500,450); // Decima secuencia -> Pie derecho
            break;
        case 10:
            dibujarEmoji(); //Ultima Secuencia -> Emoji
            break;
    }
}
/* Botones al final del ahorcado */

function obtenerPosicionMouse(tablero, evt){
    var puntero = canvas.getBoundingClientRect();
    return{
        x: evt.clientX - puntero.left,
        y: evt.clientY - puntero.top
    }
}
function crearBotonReiniciar(){ 
    
    pixel.beginPath();
    pixel.fillStyle = "gray"
    pixel.fillRect(470,640,200,45);
    pixel.beginPath();
    pixel.font = "30pt Arial";
    pixel.fillStyle = "green";
    pixel.fillText("Reintentar",480,680);
    tablero.addEventListener("click", function(event){
        var mousePosicion = obtenerPosicionMouse(tablero, event);
        console.log(mousePosicion.x +","+mousePosicion.y+"Funciono el click dentro del canvas.");
        if(mousePosicion.x>470 && mousePosicion.x<640 || mousePosicion.y>640 && mousePosicion.y<680){
            reiniciarJuego();
        }
    });
}
function crearBotonSalir(){
    pixel.beginPath();
    pixel.fillStyle = "gray"
    pixel.fillRect(680,640,130,45);
    pixel.beginPath();
    pixel.font = "30pt Arial";
    pixel.fillStyle = "red";
    pixel.fillText("Salir",705,680);
    tablero.addEventListener("click", function(event){
        var mousePosicion = obtenerPosicionMouse(tablero, event);
        console.log(mousePosicion.x +","+mousePosicion.y+"Funciono el click dentro del canvas.");
        if(mousePosicion.x>680 && mousePosicion.x<810 || mousePosicion.y>640 && mousePosicion.y<680){
            salirJuego();
        }
    });
}

