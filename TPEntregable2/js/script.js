/************************loader*********************** */

window.addEventListener("load",()=>{
    document.querySelector(".modalLoader").classList.add("visible");
    document.querySelector(".modal-contentt").classList.add("visible");  
    document.querySelector(".contLoader").classList.add("visible");
    setTimeout(() => {
        document.querySelector(".modalLoader").classList.remove("visible");
        document.querySelector(".modal-contentt").classList.remove("visible");
        document.querySelector(".contLoader").classList.remove("visible");
    }, 5000);
  })
  /************************fin loader*********************** */