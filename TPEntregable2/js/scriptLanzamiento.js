//Funcionamiento del Menu
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
// Get the <button> element that closes the modal
let close = document.getElementById("close");
let linea1=document.querySelector(".linea-1");
let linea2=document.querySelector(".linea-3");
// When the user clicks the button, open the modal 
btn.onclick = function () {
  if (btn.classList.contains('change')) {
    modal.style.display = "none";
    btn.classList.add("sinChange");
    linea1.classList.remove("cruz1");
    linea2.classList.remove("cruz2");
    /*btn.style.marginLeft = "0px";*/
    btn.classList.remove("change");
  } else {
    section.classList.remove("logoBack");
    section.classList.remove("logoSticky");
    btn.classList.add("change");
    modal.style.display = "block";
    linea1.classList.add("cruz1");
    linea2.classList.add("cruz2");
    /*btn.style.marginLeft = "350px";*/
    //btn.style.marginLeft = "950px";
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

/***Header Sticky*****/

var header= document.getElementById("headerSticky");
var nav= document.getElementById("navSticky");
var title= document.getElementById("nameSticky");
var section= document.getElementById("logoSticky");

 var parent=document.getElementById("body")
 
  window.addEventListener('scroll', function(){
  
    if (document.documentElement.scrollTop > 0) {
      //header.classList.remove("headerBack");
      nav.classList.remove("navBack");
      title.classList.remove("titleBack"),
      section.classList.remove("logoBack");
      header.classList.add("headerSticky");
      nav.classList.add("navSticky");
      title.classList.add("titleSticky");
      section.classList.add("logoSticky");
    } else if(document.documentElement.scrollTop <300){
      header.classList.remove("headerSticky");
      nav.classList.remove("navSticky");
      title.classList.remove("titleSticky"),
      section.classList.remove("logoSticky");
      //header.classList.add("headerBack");
      nav.classList.add("navBack");
      title.classList.add("titleBack"),
      section.classList.add("logoBack");
  
    }
  });
/***Move title onscroll*****/

var scrollPos = 0;
window.addEventListener('scroll', function(){
  let titleH= document.getElementById("hero");
  let subtitle= document.getElementById("subtitle");
  let titleImg= document.getElementById("titleImg");
  console.log((document.body.getBoundingClientRect()).top);
  if ((document.body.getBoundingClientRect()).top > scrollPos ){
    titleH.classList.remove("moveRight");
    subtitle.classList.remove("moveUp");
    titleH.classList.add("moveLeft");
    subtitle.classList.add("moveDown");
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
    console.log("entro"+document.documentElement.scrollTop); 
    scrollPos = (document.body.getBoundingClientRect()).top;
   } 
});

/*****Move Title section Hero onload*****/
window.onload = function() {moveTitleImg()};
window.onscroll = function() {moveTitleImg()};
function moveTitleImg(){ 

  let titleImg= document.getElementById("titleImg");
  let lucha= document.getElementById("lucha");
  let prep = document.getElementById("prep");
  if ( document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop<250 ){

    titleImg.classList.add("move");
    lucha.classList.add("move");
    console.log("entroP "+document.documentElement.scrollTop); 

  }else{

    titleImg.classList.remove("move");
    lucha.classList.remove("move");
    console.log("entró test");
    
  }
 };



/**********Cards Animadas************/

var text1= document.getElementById("text1");
var text2= document.getElementById("text2");
var text3= document.getElementById("text3");

  window.addEventListener('scroll', function(){
  
    if (document.documentElement.scrollTop >2300||document.documentElement.scrollTop<1800 ) {
     
      text1.classList.remove("cardAnimada1");
      text2.classList.remove("cardAnimada2"),
      text3.classList.remove("cardAnimada3");
  
    } else if(document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop<2300) {
      text1.classList.add("cardAnimada1");
      text2.classList.add("cardAnimada2");
      text3.classList.add("cardAnimada3");
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
  