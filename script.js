// Head content slide show 
var slideIndex = [1, 1];
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex[no] = 1
  }

  if (n < 1) {
    slideIndex[no] = x.length
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";
}
