/*********************cuenta regresiva *************************** */
turno = "jugador1";
let tiempoInicial="10:00";
let downloadTimer;

document.querySelector("#jugar").addEventListener("click",(e)=>{
    e.preventDefault();
    iniciarPartida();
  })
  document.querySelector("#reiniciar").addEventListener("click",(e)=>{
    e.preventDefault();
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = tiempoInicial;
  })
  let tiempoDeJuego=600;
  function iniciarPartida() {
    
    let timeleft = tiempoDeJuego;
    downloadTimer = setInterval(function() {
        segundos = secondsToString(timeleft)
        if (timeleft <= 0) {
            document.getElementById("countdown").innerHTML = "Se acabó el tiempo.";
            clearInterval(downloadTimer);
        } else {
            document.getElementById("countdown").innerHTML = segundos;
        }
        timeleft -= 1;
    }, 1000);
  
  }

  
  //transforma los segundos a formato mm:ss
function secondsToString(seconds) {
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return minute + ':' + second;
}

/*********************fin cuenta regresiva *************************** */