//Funcionamiento del Menu
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <button> element that closes the modal
var close = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
  if (btn.classList.contains('change')) {
    modal.style.display = "none";
    btn.style.marginLeft = "0px";
    btn.classList.remove("change");
  } else {
    btn.classList.add("change");
    modal.style.display = "block";
    btn.style.marginLeft = "950px";
    btn.style.height = "60px";
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log(event.target)
  if (event.target == modal) {
    modal.style.display = "none";
    btn.style.marginLeft = "0px";
    btn.classList.remove("change");
  }
}

/***Move title onscroll*****/

var scrollPos = 0;
window.addEventListener('scroll', function(){
  let titleH= document.getElementById("hero");
  let subtitle= document.getElementById("subtitle");
  let titleImg= document.getElementById("titleImg");
  console.log((document.body.getBoundingClientRect()).top);
  if ((document.body.getBoundingClientRect()).top > scrollPos ){
   
  /*if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop<1200 ) {*/
  titleH.classList.remove("moveRight");
  subtitle.classList.remove("moveUp");
  //img.classList.remove("moveUp");
  titleH.classList.add("moveLeft");
  subtitle.classList.add("moveDown");
  //titleImg.classList.add("move");
  titleImg.style.animation ="moveTitleImg 3s forwards";
  scrollPos = (document.body.getBoundingClientRect()).top;
    console.log("entró");
  }
    // ARRIBA
  else if((document.body.getBoundingClientRect()).top < scrollPos &&(document.documentElement.scrollTop > 340 && document.documentElement.scrollTop<850 )){ 
    // ABAJO
    titleH.classList.remove("moveLeft");
    subtitle.classList.remove("moveDown");
   
    titleH.classList.add("moveRight");
    subtitle.classList.add("moveUp");
    //img.classList.add("moveUp");
   console.log("entro"+document.documentElement.scrollTop); 
  scrollPos = (document.body.getBoundingClientRect()).top;
   } 
});

/*****Move Title section Hero onload*****/
var scrollPosI = 0;
window.addEventListener('scroll', function(){
  
  
  let titleImg= document.getElementById("titleImg");
  console.log((document.body.getBoundingClientRect()).top + "hola");
  if ((document.body.getBoundingClientRect()).top > scrollPosI &&(document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop<670 )){

  //img.classList.remove("moveUp");
 
  titleImg.classList.add("move");
  //titleImg.style.animation ="moveTitleImg 3s forwards";
  scrollPosI = (document.body.getBoundingClientRect()).top;
    console.log("entró test");
    console.log("entro"+document.documentElement.scrollTop); 
    console.log("entroP"+document.documentElement.scrollTop); 
  }else{
    titleImg.classList.remove("move");
    scrollPosI = (document.body.getBoundingClientRect()).top;
  }
 });

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
  
  