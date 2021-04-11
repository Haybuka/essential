
let harmburger = document.querySelector('.harmburger');
let navAlt = document.querySelector('.nav-alt');

harmburger.addEventListener('click',()=>{
  navAlt.classList.toggle('slide-left');
  harmburger.classList.toggle('roll')
})

AOS.init();
console.clear()
