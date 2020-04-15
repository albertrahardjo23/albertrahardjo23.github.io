function openNav() {
  document.getElementById("sidebarnav").style.width = "140px";
}
function closeNav() {
  document.getElementById("sidebarnav").style.width = "0";
}
function stats() {
  document.getElementById('section2').style.display='block';
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");

  if (n > slides.length){slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function childhood() {
  document.getElementById('contentchildhood').style.display='block';
  document.getElementById('content1highschool').style.display='none';
  document.getElementById('content1lakers').style.display='none';
}
function school() {
  document.getElementById('contentchildhood').style.display='none';
  document.getElementById('content1highschool').style.display='block';
  document.getElementById('content1lakers').style.display='none';
}
function lakers() {
  document.getElementById('contentchildhood').style.display='none';
  document.getElementById('content1highschool').style.display='none';
  document.getElementById('content1lakers').style.display='block';
}
