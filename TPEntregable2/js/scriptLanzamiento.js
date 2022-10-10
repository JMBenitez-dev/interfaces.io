//Funcionamiento del Menu
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <button> element that closes the modal
var close = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <button> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Countdown

const getRemainTime = deadline =>{
    let now = new Date();
    remainTime = (new Date(deadline) - now + 1000)/1000;
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    remainMinutes = ('0' + Math.floor(remainTime/60 % 60)).slice(-2);
    remainHours = ('0' + Math.floor(remainTime/3600 % 24)).slice(-2);
    remainDays = Math.floor(remainTime/(3600*24));
  
    return{
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
    }
  };
  
  const countdownL= (deadline, elem, message) =>{
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () =>{
      const t = getRemainTime(deadline);
      el.innerHTML = `${t.remainDays}D|${t.remainHours}H|${t.remainMinutes}m|${t.remainSeconds}s`;
  
      if(t.remainTime <= 1){
        clearInterval(timerUpdate);
        el.innerHTML = message;
      }
    },1000)
  };
  console.log(new Date());
  countdownL('Dec 15 2022 23:59:59 GMT-0300','regresiva', 'El día ha llegado!!!');
  

/********slide de personajes********/

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }*/
    x[slideIndex-1].style.display = "block";
   /* dots[slideIndex-1].className += " w3-opacity-off"*/;
  }

  

var slideIndex = 1;
showDivsP(slideIndex);

function plusDivsP(n) {
  showDivsP(slideIndex += n);
}

function showDivsP(n) {
  var i;
  var x = document.getElementsByClassName("fotoB");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}
  
  