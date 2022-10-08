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
  if (myIndex > banners.length) {myIndex = 1}    
  banners[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
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
countdownL('Dec 15 2022 23:59:59 GMT-0300','clock', 'El día ha llegado!!!');

/**************slide cards ******************/
var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
      if (window.innerWidth < 700){
      var i;
      var x = document.getElementsByClassName("contCard");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }

let myIndex2 = 0;

carouselCards();

function carouselCards() {
  let i;
  if (window.innerWidth  >= 700){
  
      let banners = document.getElementsByClassName("cards");
      for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";  
      }
      myIndex2++;
      if (myIndex2 > banners.length) {myIndex2 = 1}    
      banners[myIndex2-1].style.display = "flex";  
      setTimeout(carouselCards, 5000); // Change image every 6 seconds
    }
  }
}

/******slide juegos de mesa*******/
var slideIndex2= 1;
  showDivs2(slideIndex2);
  
  function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
  }
  
  function showDivs2(n) {
      if (window.innerWidth < 700){
      var i;
      var x = document.getElementsByClassName("contCard2");
      if (n > x.length) {slideIndex2 = 1}
      if (n < 1) {slideIndex2 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex2-1].style.display = "block";  
    }

let myIndex3 = 0;

carouselCards2();

function carouselCards2() {
  let i;
  if (window.innerWidth  >= 700){
  
      let banners = document.getElementsByClassName("cards2");
      for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";  
      }
      myIndex3++;
      if (myIndex3 > banners.length) {myIndex3 = 1}    
      banners[myIndex3-1].style.display = "flex";  
      setTimeout(carouselCards2, 5000); // Change image every 6 seconds
    }
  }
}

/******slide juegos de rol*******/
var slideIndex3= 1;
  showDivs3(slideIndex3);
  
  function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
  }
  
  function showDivs3(n) {
      if (window.innerWidth < 700){
      var i;
      var x = document.getElementsByClassName("contCard3");
      if (n > x.length) {slideIndex3 = 1}
      if (n < 1) {slideIndex3 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex3-1].style.display = "block";  
    }

let myIndex4 = 0;

carouselCards3();

function carouselCards3() {
  let i;
  if (window.innerWidth  >= 700){
  
      let banners = document.getElementsByClassName("cards3");
      for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";  
      }
      myIndex4++;
      if (myIndex4 > banners.length) {myIndex4 = 1}    
      banners[myIndex4-1].style.display = "flex";  
      setTimeout(carouselCards3, 5000); // Change image every 6 seconds
    }
  }
}

/******slide juegos de deportes*******/
var slideIndex4= 1;
  showDivs4(slideIndex4);
  
  function plusDivs4(n) {
    showDivs4(slideIndex4 += n);
  }
  
  function showDivs4(n) {
      if (window.innerWidth < 700){
      var i;
      var x = document.getElementsByClassName("contCard4");
      if (n > x.length) {slideIndex4 = 1}
      if (n < 1) {slideIndex42 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex4-1].style.display = "block";  
    }

let myIndex5 = 0;

carouselCards4();

function carouselCards4() {
  let i;
  if (window.innerWidth  >= 700){
  
      let banners = document.getElementsByClassName("cards4");
      for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";  
      }
      myIndex5++;
      if (myIndex5 > banners.length) {myIndex5 = 1}    
      banners[myIndex5-1].style.display = "flex";  
      setTimeout(carouselCards4, 5000); // Change image every 6 seconds
    }
  }
}

/******slide juegos de aventura*******/
var slideIndex5= 1;
  showDivs5(slideIndex5);
  
  function plusDivs5(n) {
    showDivs5(slideIndex5 += n);
  }
  
  function showDivs5(n) {
      if (window.innerWidth < 700){
      var i;
      var x = document.getElementsByClassName("contCard5");
      if (n > x.length) {slideIndex5 = 1}
      if (n < 1) {slideIndex5 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex5-1].style.display = "block";  
    }

let myIndex6 = 0;

carouselCards5();

function carouselCards5() {
  let i;
  if (window.innerWidth  >= 700){
  
      let banners = document.getElementsByClassName("cards5");
      for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";  
      }
      myIndex6++;
      if (myIndex6 > banners.length) {myIndex6 = 1}    
      banners[myIndex6-1].style.display = "flex";  
      setTimeout(carouselCards5, 5000); // Change image every 6 seconds
    }
  }
}

