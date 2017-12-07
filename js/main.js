
var button = document.querySelector('.main-nav__toggle');
var nav = document.querySelector('.main-nav');

button.addEventListener("click", function (event) {
  event.preventDefault();
	if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--open");
	}
  else {
    nav.classList.add("main-nav--closed");
    nav.classList.remove("main-nav--open");
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin:10,
    nav:true,
    items:1,
  });
});
