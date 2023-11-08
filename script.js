let slides = document.querySelectorAll(".slide");
let index = 0;

function runSlideshow() {
  slides[index].style.opacity = 1;

  setTimeout(() => {
    slides[index].style.opacity = 0;
    index = (index + 1) % slides.length;
    runSlideshow();
  }, 3500); // 
}

runSlideshow();
