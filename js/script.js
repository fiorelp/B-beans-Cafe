var showMenu=document.getElementById("show")
var hideMenu=document.getElementById("hide")
var coffeeMove=document.getElementById("col1")
var croissantMove=document.getElementById("croissant")
var filterMove=document.getElementById("filter")
var breakfastMove=document.getElementById("breakfast")

showMenu.addEventListener("click",()=>{
    document.getElementById("unfold").style.left="0";
    
    document.getElementById("unfold").style.visibility="visible";
    document.getElementById("show").style.visibility="hidden";
    document.getElementById("hide").style.visibility="visible";
})
hideMenu.addEventListener("click",()=>{
    document.getElementById("unfold").style.left="-80%";
    
    document.getElementById("unfold").style.visibility="hidden";
    document.getElementById("hide").style.visibility="hidden";
    document.getElementById("show").style.visibility="visible"; 
})
//Animación section1
//Coffee img
coffeeMove.addEventListener("mouseover",()=>{
  document.getElementById("coffee").style.left="-400px";
})
coffeeMove.addEventListener("mouseout",()=>{
  document.getElementById("coffee").style.left="0px"
})
//Croissant img
croissantMove.addEventListener("mouseenter",()=>{
   document.getElementById("croissant").style.left="400px"
})
croissantMove.addEventListener("mouseleave",()=>{
  document.getElementById("croissant").style.left="0px"
})
//Filter img
filterMove.addEventListener("mouseover",()=>{
  document.getElementById("filter").style.left="400px"
})
filterMove.addEventListener("mouseleave",()=>{
  document.getElementById("filter").style.left="0px"
})
//Breakfast img
breakfastMove.addEventListener("mouseover",()=>{
  document.getElementById("breakfast").style.left="400px"
})
breakfastMove.addEventListener("mouseout",()=>{
  document.getElementById("breakfast").style.left="0px"
})

// platesMove.addEventListener("mouseover",()=>{
//   document.getElementById("croissant").style.right="-300px"
//   document.getElementById("filter").style.right="-300px"
//   document.getElementById("breakfast").style.right="-300px"
// })





//carousel
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;});

    let curSlide = 0;
    let maxSlide = slides.length - 1;

    const nextSlide = document.querySelector(".btn-next");
    nextSlide.addEventListener("click", function () {

        if (curSlide === maxSlide) {
            curSlide = 0;
          } else {
            curSlide++;
          }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
          });
        });

        const prevSlide = document.querySelector(".btn-prev");
        prevSlide.addEventListener("click", function () {
            if (curSlide === 0) {
              curSlide = maxSlide;
            } else {
              curSlide--;
            }
            slides.forEach((slide, indx) => {
              slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
          });