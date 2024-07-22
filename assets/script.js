// Carousel
var slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


// Scroll ANImation
// ScrollReveal().reveal(".scrollanime", { delay: 200, easing: "ease-in", origin: 'left', duration: 800 });
ScrollReveal().reveal('.scrollanime', {
  delay: 600,
  distance: '50px',
  duration: 700,
  easing: 'ease-in-out',
  origin: 'left',
  reset: true,
  mobile: true
});

// Loader
// const loader = document.getElementById('loader');
// window.addEventListener("load", () => {
//   setTimeout(() => { }, 2000)
// })

// Preload Images
function pre_loader() {
  if (document.getElementById) {
    document.getElementById("img1");
    document.getElementById("img2");
    document.getElementById("img3");
    document.getElementById("img4");
    document.getElementById("img5");
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}
addLoadEvent(pre_loader);

// Send Email
function sendMail() {
  const emailAddress = "ds450974@gmail.com";
  const emailAddress2 = document.getElementById("sender").value;
  const senderName = document.getElementById("name").value; // Sender's name (customize this)
  const subject = "Hello from your website!";
  const messageBody = document.getElementById("message").value;
  const body = `Name: ${senderName}\nEmail: ${emailAddress2}\n\n${messageBody}`;
  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the user's email client
  window.location.href = mailtoLink;
}


// Loader

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});