
//SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex += n);
}

// function that controls the way the slides are shown 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}

//------------------------------------------------------------------------------------------------

//VIEWS COUNTER

document.addEventListener("DOMContentLoaded", function () {
  // get the element that displays the counter
  const counterElement = document.getElementById("counter");

  // get the current count from local storage
  let count = parseInt(localStorage.getItem("pageViewCount")) || 0;

  // increase the count of views
  count++;

  // update the display and store the updated count in local storage
  counterElement.textContent = count;
  localStorage.setItem("pageViewCount", count.toString());
});