// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);
// Auto slide functionality
let slideInterval = setInterval(() => { plusSlides(1); }, 2000); 

function switchStyle() {
  var toggle = document.getElementById("style-toggle");
  if (toggle.checked) {
      document.getElementById("style-link").setAttribute("href", "styles2.css");
      localStorage.setItem("preferredStyle", "styles2.css");
  } else {
      document.getElementById("style-link").setAttribute("href", "styles.css");
      localStorage.setItem("preferredStyle", "styles.css");
  }
}

function loadPreferredStyle() {
  var savedStyle = localStorage.getItem("preferredStyle");
  if (savedStyle === "styles2.css") {
      document.getElementById("style-link").setAttribute("href", "styles2.css");
      document.getElementById("style-toggle").checked = true;
  } else {
      document.getElementById("style-link").setAttribute("href", "styles.css");
      document.getElementById("style-toggle").checked = false;
  }
}

window.onload = function() {
  loadPreferredStyle();
};
