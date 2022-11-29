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

    btn.classList.remove("change");
  } else {
    btn.classList.add("change");
    modal.style.display = "block";

    btn.style.height = "60px";
  }
}

/**********menu hamburguesa*************/
let linea1 = document.querySelector(".linea-1");
let linea2 = document.querySelector(".linea-3");
// When the user clicks the button, open the modal 
btn.onclick = function () {
  console.log("se clickeo boton")
  if (btn.classList.contains('change')) {
    modal.style.display = "none";
    btn.classList.add("sinChange");
    linea1.classList.remove("cruz1");
    linea2.classList.remove("cruz2");
    btn.style.marginLeft = "0px";
    console.log("se agregó SINchange")
    btn.classList.remove("change");
  } else {
    btn.classList.add("change");
    modal.style.display = "block";
    console.log("se agregó change")
    linea1.classList.add("cruz1");
    linea2.classList.add("cruz2");
    /*btn.style.marginLeft = "350px";
    btn.style.marginLeft = "950px";*/
    btn.style.height = "60px";
  }
}
/**********fin menu hamburguesa *************/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    /*btn.style.marginLeft = "0px";*/
    btn.classList.remove("change");
  }
}

/***Move title onscroll*****/

var scrollPos = 0;
window.addEventListener('scroll', function () {
  let titleH = document.getElementById("hero");
  let subtitle = document.getElementById("subtitle");
  let titleImg = document.getElementById("titleImg");
  if ((document.body.getBoundingClientRect()).top > scrollPos) {

    /*if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop<1200 ) {*/
    titleH.classList.remove("moveRight");
    subtitle.classList.remove("moveUp");
    //img.classList.remove("moveUp");
    titleH.classList.add("moveLeft");
    subtitle.classList.add("moveDown");
    //titleImg.classList.add("move");
    titleImg.style.animation = "moveTitleImg 3s forwards";
    scrollPos = (document.body.getBoundingClientRect()).top;
  }
  // ARRIBA
  else if ((document.body.getBoundingClientRect()).top < scrollPos && (document.documentElement.scrollTop > 340 && document.documentElement.scrollTop < 850)) {
    // ABAJO
    titleH.classList.remove("moveLeft");
    subtitle.classList.remove("moveDown");

    titleH.classList.add("moveRight");
    subtitle.classList.add("moveUp");
    //img.classList.add("moveUp");

    scrollPos = (document.body.getBoundingClientRect()).top;
  }
});

/*****Move Title section Hero onload*****/
var scrollPosI = 0;
window.addEventListener('scroll', function () {


  let titleImg = document.getElementById("titleImg");
  if ((document.body.getBoundingClientRect()).top > scrollPosI && (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 670)) {

    //img.classList.remove("moveUp");

    titleImg.classList.add("move");
    //titleImg.style.animation ="moveTitleImg 3s forwards";
    scrollPosI = (document.body.getBoundingClientRect()).top;
  } else {
    titleImg.classList.remove("move");
    scrollPosI = (document.body.getBoundingClientRect()).top;
  }
});

//Countdown

const getRemainTime = deadline => {
  let now = new Date();
  remainTime = (new Date(deadline) - now + 1000) / 1000;
  remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
  remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
  remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
};

const countdownL = (deadline, elem, message) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    const t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays}D|${t.remainHours}H|${t.remainMinutes}m|${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = message;
    }
  }, 1000)
};
countdownL('Dec 15 2022 23:59:59 GMT-0300', 'regresiva', 'El día ha llegado!!!');


/********slide de personajes********/

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }*/
  x[slideIndex - 1].style.display = "block";
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
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}

/**********seccion carrusel animado   ***********/
document.querySelector(".contPrincipal").addEventListener("click", () => {
  let impSlide = document.querySelector('input[name=slider]:checked');
  switch (impSlide.id) {
    case "s1":
      document.querySelector("#slide1 .imgVacia").classList.add("goodClass")
      document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
      break;
    case "s2":
      document.querySelector("#slide2 .imgVacia").classList.add("goodClass")
      document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
      break;
    case "s3":
      document.querySelector("#slide3 .imgVacia").classList.add("goodClass")
      document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
      break;
    case "s4":
      document.querySelector("#slide4 .imgVacia").classList.add("goodClass")
      document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
      break;

    case "s5":
      document.querySelector("#slide5 .imgVacia").classList.add("goodClass")
      document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
      document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
      break;

    default:
      break;
  }

})
/**********fin seccion carrusel animado   ***********/


window.addEventListener("scroll", () => {
 
  let img1Alt = document.querySelector(".contHistoria .imgHist").getBoundingClientRect().height;
console.log(img1Alt);
  let parrafo1 = document.querySelector(".contHistoria .hist1").getBoundingClientRect().top;
  let parrafo2 = document.querySelector(".contHistoria .hist2").getBoundingClientRect().top;
  let parrafo3 = document.querySelector(".contHistoria .hist3").getBoundingClientRect().top;
  let parrafo4 = document.querySelector(".contHistoria .hist4").getBoundingClientRect().top;

  if (parrafo1<img1Alt-150) {
    document.querySelector(".imgHist").setAttribute("src","img/pageLanzamiento/hulk2.jpg")
  }
  if (parrafo2<img1Alt) {
    document.querySelector(".imgHist").setAttribute("src","img/pageLanzamiento/loki.jpg")
  }
  if (parrafo3<img1Alt) {
    document.querySelector(".imgHist").setAttribute("src","img/pageLanzamiento/Nick Fury2.jpg")
  }
  if (parrafo4<img1Alt) {
    document.querySelector(".imgHist").setAttribute("src","img/pageLanzamiento/hawkeye.jpg")
  }
})




/*
let scrollPos2 = 0;
window.addEventListener('scroll', function () {
 
  if ((document.body.getBoundingClientRect()).top > scrollPos2) {
console.log("sube");
    scrollPos2 = (document.body.getBoundingClientRect()).top;
  }
  // ARRIBA
  else if ((document.body.getBoundingClientRect()).top < scrollPos2 && (document.documentElement.scrollTop > 340 && document.documentElement.scrollTop < 850)) {
    // ABAJO
    console.log("baja");
    scrollPos2 = (document.body.getBoundingClientRect()).top;
  }
})*/