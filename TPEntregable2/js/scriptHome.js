//Funcionamiento del Menu
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

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
    btn.classList.add("change");
    modal.style.display = "block";
    linea1.classList.add("cruz1");
    linea2.classList.add("cruz2");
    /*btn.style.marginLeft = "350px";*/
    //btn.style.marginLeft = "950px";
    btn.style.height = "60px";
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log(event.target)
  if (event.target == modal) {
    modal.style.display = "none";
    /*btn.style.marginLeft = "0px";*/
    btn.classList.remove("change");
  }
}


//Codigo para la slideBanner de la sección Home
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let banners = document.getElementsByClassName("mySlides");
  for (i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > banners.length) { myIndex = 1 }
  banners[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

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
console.log(new Date());
countdownL('Dec 15 2022 23:59:59 GMT-0300', 'clock', 'El día ha llegado!!!');
countdownL('Dec 15 2022 23:59:59 GMT-0300', 'regresiva', 'El día ha llegado!!!');

/**************slide cards ******************/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  if (window.innerWidth < 700) {
    var i;
    var x = document.getElementsByClassName("contCard");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  } else {
    var i;
    var x = document.getElementsByClassName("cards");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "flex";
  }
}

/******slide juegos de mesa*******/
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  if (window.innerWidth < 700) {
    var i;
    var x = document.getElementsByClassName("contCard2");
    if (n > x.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex2 - 1].style.display = "block";
  } else {
    var i;
    var x = document.getElementsByClassName("cards2");
    if (n > x.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex2 - 1].style.display = "flex";
  }


}

/******slide juegos de rol*******/
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  if (window.innerWidth < 700) {
    var i;
    var x = document.getElementsByClassName("contCard3");
    if (n > x.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex3 - 1].style.display = "block";
  } else {
    var i;
    var x = document.getElementsByClassName("cards3");
    if (n > x.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex3 - 1].style.display = "flex";
  }


}

/******slide juegos de deportes*******/
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  if (window.innerWidth < 700) {
    var i;
    var x = document.getElementsByClassName("contCard4");
    if (n > x.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex42 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex4 - 1].style.display = "block";
  } else {
    var i;
    var x = document.getElementsByClassName("cards4");
    if (n > x.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex42 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex4 - 1].style.display = "flex";
  }


}

/******slide juegos de aventura*******/
var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  if (window.innerWidth < 700) {
    var i;
    var x = document.getElementsByClassName("contCard5");
    if (n > x.length) { slideIndex5 = 1 }
    if (n < 1) { slideIndex5 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex5 - 1].style.display = "block";
  } else {
    var i;
    var x = document.getElementsByClassName("cards5");
    if (n > x.length) { slideIndex5 = 1 }
    if (n < 1) { slideIndex5 = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex5 - 1].style.display = "flex";
  }
}

document.querySelector(".suscribir .desk").addEventListener("click", () => {
  document.querySelectorAll(".suscribir .mob").forEach(el => {
    el.classList.toggle("ocultar")
  })
});

document.querySelector(".favoritos .desk").addEventListener("click", () => {
  document.querySelectorAll(".favoritos .mob").forEach(el => {
    el.classList.toggle("ocultar")
  })
});
document.querySelector(".ayuda .desk").addEventListener("click", () => {
  document.querySelectorAll(".ayuda .mob").forEach(el => {
    el.classList.toggle("ocultar")
  })
});