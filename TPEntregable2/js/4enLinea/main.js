"use strict"
//Definicion de variables globales
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let canvasW = 1000;
let canvasH = 850;
let tableroW;
let tableroH;
let casW;
let cantFichasEnLinea;
let cant;
let tipo;
let radius = 26;
let imagen1;
let imagen2;
let lastClickedFicha = null;
let isMouseDown = false;
let tamanioCelda = 3 * radius;
let textX = 50;
let textY = 50;
let turno = "jugador1";
let tiempoDeJuego = 600;
let matriz = [];
let jugador1 = document.querySelector('#jugador1').innerHTML;
let jugador2 = document.querySelector('#jugador2').innerHTML;

document.querySelector('#reset').addEventListener('click', function() {
    
    swal("", {
            title: "Desea iniciar una nueva partida?",
            buttons: ["cancel", true],
        })
        .then((value) => {
            if (value == true) {
                location.reload()

            }
        })
});

//El siguiente codigo hablita o deshablita los botones en una secuencia preestablecida

let partida = document.querySelector('#partida')
partida.disabled = false;
let inicio = document.querySelector('#inicio')
inicio.disabled = true;
let botTablero = document.querySelectorAll('.Tamtablero');
botTablero.forEach(element => {
    element.disabled = true;
});

tipo = document.querySelector('#tipo')
tipo.disabled = true;
let contdown = document.querySelector('#countdown')
contdown.hidden = true;

tipo.addEventListener('click', function() {
    botTablero.forEach(element => {
        element.disabled = false;
    })
});
botTablero.forEach(element => {
    element.addEventListener('click', function() {
        inicio.disabled = false;
        document.querySelector('#tipo').disabled = true;
        botTablero.forEach(elemento => {
            /*elemento.disabled = true;*/
        });
    })
});

inicio.addEventListener('click', function() {
    contdown.hidden = false;
    botTablero.forEach(element => {
        element.disabled = true;
    });
    document.querySelector('#tipo').disabled = true;
    inicio.disabled = true;
    for (let i = 0; i < fichas.length; i++) {
        fichas[i].setColocada(false);
        fichas2[i].setColocada(false);
    }
    document.querySelector('#turno').innerHTML = "Turno de: " + jugador1;
})

//definicion del canvas
canvas.width = canvasW;
canvas.height = canvasH;
ctx.fillStyle = 'rgba(0, 10, 3, 0)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//esribe los nombres de los jugadores en el canvas
function drawTxT() {
    ctx.font = "23pt Verdana";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeText(jugador1, textX + 40, textY, 250);
    ctx.strokeText(jugador2, textX + 750, textY, 250);
}
//definicion de los distintos tableros (modos de juego)
let tablero1 = new Tablero(tableroW, tableroH, ctx);
let tablero2 = new Tablero(tableroW, tableroH, ctx);
let tablero3 = new Tablero(tableroW, tableroH, ctx);
let tablero4 = new Tablero(tableroW, tableroH, ctx);

function cargarParametros(value) {
    casW = value; //casw es la cantidad de casilleros horizontales

    if (casW == 7) {
        cant = 21; //cantidad de fichas de cada jugador
        cantFichasEnLinea=4;
        drawTipo(casW, cant, imagen1, imagen2);
    }
    if (casW == 8) {
        cantFichasEnLinea=5;
        cant = 28;
        drawTipo(casW, cant, imagen1, imagen2);
    }
    if (casW == 9) {
        cantFichasEnLinea=6;
        cant = 36;
        drawTipo(casW, cant, imagen1, imagen2);
    }
    if (casW == 10) {
        cantFichasEnLinea=7;
        cant = 45;
        drawTipo(casW, cant, imagen1, imagen2);
    }

}

partida.addEventListener("click", borrarPartida);

function borrarPartida() {
    document.querySelector(".iniciarAqui p").classList.add("oculto");
    swal("", {
            title: "Ingrese nombre del Jugador 1: ",
            closeOnClickOutside: false,
            content: "input",
        })
        .then((value) => {
            if (value == "") {
                let nameJugador = "Player1"; //nombre por defecto si no se ingresa un nombre
                jugador1 = nameJugador;
            } else {
                jugador1 = value;
            }
            swal("", {
                    title: "Ingrese nombre del Jugador 2: ",
                    closeOnClickOutside: false,
                    content: "input",
                })
                .then((value2) => {
                    if (value2 == "") {
                        let nameJugador2 = "Player2";
                        jugador2 = nameJugador2;
                    } else {
                        jugador2 = value2;
                    }
                    drawTxT()
                    clearCanvas();
                    drawTipo();
                    drawTablero();
                    
                })
        })

    tipo.disabled = false;
}
//dibuja el tablero
function drawTablero() {
    tableroW = radius * (3 * 7);
    tableroH = radius * (3 * 6);
    tablero1.draw(tableroW, tableroH, canvasW, canvasH, radius);
}
drawTablero();

//se seleciona el tipo de ficha con el que se va a jugar
document.querySelector('#tipo').addEventListener('click', mostrarBotones)

function mostrarBotones() {
    partida.disabled = true;
    swal({
            title: "Seleccione tipo de fichas",
            closeOnClickOutside: false,
            buttons: {
                tanque1: {
                    text: " ",
                    className: 'tanque1'
                },
                tanque2: {
                    text: " ",
                    className: 'tanque2'
                },
                tanque3: {
                    text: " ",
                    className: 'tanque3'
                },
            },
        })
        .then((value) => {
            switch (value) {

                case "tanque1":
                    cargarTipo(value);
                    break;

                case "tanque2":
                    cargarTipo(value);
                    break;
                case "tanque3":
                    cargarTipo(value);
                    break;
            }
        })
}


function cargarTipo(value) {
    tipo = value;
    casW = 7;
    cant = 21;
    if (tipo == "tanque1") {
        imagen1 = 'img/Img4enLinea/tanke4.png';
        imagen2 = 'img/Img4enLinea/tanque1.PNG';
        drawTipo(casW, cant, imagen1, imagen2);
    }

    if (tipo == "tanque2") {
        imagen1 = 'img/Img4enLinea/tanqueMs.png';
        imagen2 = 'img/Img4enLinea/tanque12-m.png';
        drawTipo(casW, cant, imagen1, imagen2);
    }

    if (tipo == "tanque3") {
        imagen1 = 'img/Img4enLinea/tanke15-m.png';
        imagen2 = 'img/Img4enLinea/tanke17-m.png';
        drawTipo(casW, cant, imagen1, imagen2);
    }
}
//dibuja las fichas segun la elecci??n anterior
function drawTipo(casW, cant, imagen1, imagen2) {
    generarMatriz(casW); //genera una matriz que es en la que trabaja la l??gica del juego
    crearFichas(cant);
    drawFigure(casW, cant, imagen1, imagen2);
    if (casW != null) {
        fichas = []; //creo los arreglos de fichas de cada jugador
        fichas2 = [];
        crearFichas(cant);
        drawFigure(casW, cant, imagen1, imagen2);
    }

}
//determina si clickeaste en una ficha o no
function findClickedFicha(x, y) {
    for (let i = 0; i < fichas.length; i++) {
        const element = fichas[i];
        const element2 = fichas2[i];
        if (element.isPointInside(x, y)) {
            return element;
        } else if (element2.isPointInside(x, y)) {
            return element2;
        }
    }
}
//se ejecuta al clickear 
canvas.addEventListener('mousedown', onmousedown, false);

function onmousedown(e) {
    isMouseDown = true;
    if (lastClickedFicha != null) {
        lastClickedFicha = null;
    }
    let clickFig = findClickedFicha(e.offsetX, e.offsetY); //devuelve la ficha clickeada
    if ((clickFig != null) && !clickFig.getColocada()) {
        if (turno == clickFig.getTurno()) { //debe coincidir el turno del jugador on el de la ficha
            lastClickedFicha = clickFig;
            cambiarTurno();
        }
    }
}
//cambia el turno 
function cambiarTurno() {
    if (turno == "jugador1") {
        turno = "jugador2";
    } else {
        turno = "jugador1";
    }
}
//se ejecuta al soltar el boton del mouse
canvas.addEventListener('mouseup', onmouseup, false);

function onmouseup(e) {
    isMouseDown = false;
    let col;
    let iLibre;
    let ganador;
    let nombreGanador;
    if (lastClickedFicha != null) {
        //si se solt?? la ficha desde arriba del tablero procede
        if (((e.offsetX > ((canvasW / 2) - (tableroW / 2))) && (e.offsetX < ((canvasW / 2) + (tableroW / 2)))) && e.offsetY < ((canvasH / 2) - (tableroH / 2) - radius)) {
            col = obtenerColumna(casW, tamanioCelda, e.offsetX); //calcula a que columna corresponde el lugar donde se solto la ficha
            iLibre = buscarPoslibreCol(col, casW); //busca una posiin libre dentro de la columna para albergar a la ficha
            if (iLibre != -1) { //si la columna no esta llena
                actualizarMatriz(iLibre, col, lastClickedFicha, casW, radius); //actualiza la matriz
                lastClickedFicha.setColocada(true); //inhabilita la ficha para ser jugada nuevamente
                ganador = verificarGanador(iLibre, col, lastClickedFicha);
                if (ganador != null) { //si hay ganador
                    nombreGanador = ganador.getJugador();
                    countdown.hidden = true;
                    document.querySelector('#turno').hidden = true;
                    drawGanador(nombreGanador);
                }
                //a continuacion se muestra la correspondenia de turnos
                if (turno == "jugador1") {
                    document.querySelector('#turno').innerHTML = "Turno del jugador: " + jugador1;
                } else {
                    document.querySelector('#turno').innerHTML = "Turno del jugador: " + jugador2;
                }
            } else {
                swal({
                    title: "Incorrecto",
                    text: "Esta columna ya esta completa",
                    icon: "warning",
                    button: true,
                });
                //vuelve la ficha a su posicion de origen
                lastClickedFicha.setPosition(lastClickedFicha.homeX, lastClickedFicha.homeY);
                drawFigure(casW, cant, imagen1, imagen2);
                cambiarTurno();
            }
        } else {
            swal({
                title: "Incorrecto",
                text: "Soltar la ficha arriba del tablero!",
                icon: "warning",
                button: true,
            });
            //vuelve la ficha a su posicion de origen si no se suelta en el lugar correto
            lastClickedFicha.setPosition(lastClickedFicha.homeX, lastClickedFicha.homeY);
            drawFigure(casW, cant, imagen1, imagen2);
            cambiarTurno();
        }
    }
}

//creo los arreglos y luego los objetos ficha
let fichas = [];
let fichas2 = [];

function crearFichas(cant) {
    let posX = 50; //posiciones de origen
    let posY = 50;
    let homeX, homeY;
    let ficha;
    let ficha2;

    for (let i = 0; i < cant; i++) {
        homeX = posX;
        homeY = posY + (i * 11) + 200;
        ficha = new Ficha(homeX, homeY, posX, posY + (i * 11) + 200, radius, ctx, imagen1, jugador1, "jugador1");
        ficha2 = new Ficha(homeX + 900, homeY, posX + 900, posY + (i * 11) + 200, radius, ctx, imagen2, jugador2, "jugador2");
        fichas.push(ficha);
        fichas2.push(ficha2);
    }
}

//borro el canvas y llamo a la funcion que le carg la imagen elegida
function drawFigure(casW, cant, imagen1, imagen2) {
    clearCanvas();
    mostrarTablero(casW);
    drawTxT();
    for (let i = cant - 1; i >= 0; i--) {

        fichas[i].cargarImagen(imagen1, jugador1);
        fichas2[i].cargarImagen(imagen2, jugador2);
    }
}
//carga los parametros necesarios para dibujar el tablero
function mostrarTablero(casW) {

    tableroW = radius * (3 * casW);
    tableroH = radius * (3 * (casW - 1));
    if (casW == 7) {
        clearCanvas();//esto sirve para poder cambiar de tablero cuando todavia no empez?? el juego
        tablero1.draw(tableroW, tableroH, canvasW, canvasH, radius);
    }
    if (casW == 8) {
        clearCanvas();
        tablero2.draw(tableroW, tableroH, canvasW, canvasH, radius);
    }
    if (casW == 9) {
        clearCanvas();
        tablero3.draw(tableroW, tableroH, canvasW, canvasH, radius);
    }
    if (casW == 10) {
        clearCanvas();
        tablero4.draw(tableroW, tableroH, canvasW, canvasH, radius);
    }
}

//pone en blanco todo el canvas
function clearCanvas() {
    //ctx.fillStyle = '#98ff96';
    ctx.fillStyle = "#5A5A5A";
    ctx.fillRect(0, 0, canvasW, canvasH);
}
//se ejecuta al arrastrar una ficha
canvas.addEventListener('mousemove', onmousemove, false);

function onmousemove(e) {

    if (isMouseDown && (lastClickedFicha != null)) {
        lastClickedFicha.setPosition(e.offsetX, e.offsetY);
        drawFigure(casW, cant, imagen1, imagen2);
    }
}

function drawGanador(nombre) {
    ctx.font = "100pt Georgia";
    ctx.fillStyle = "black";
    ctx.lineWidth = 5;
    ctx.fillText('GANADOR: ' + nombre, 250, 150, 500);

    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, canvasW, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.strokeText('GANADOR: ' + nombre, 250, 150, 500);
}