var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// Scroll ANImation
// ScrollReveal().reveal(".scrollanime", { delay: 200, easing: "ease-in", origin: 'left', duration: 800 });
ScrollReveal().reveal('.scrollanime', {
  delay: 700,
  distance: '50px',
  duration: 900,
  easing: 'ease-in-out',
  origin: 'left',
  reset: true,
  mobile: true
});