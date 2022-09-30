
let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
   if (window.scrollY > 100) {
   	 navbar.classList.add("bg-dark");
  } else {
  	navbar.classList.remove("bg-dark");
  }
});



 let arrown = document.querySelector('#arrown');
window.addEventListener("click", function () {
   window.scrollTo(0, 0);
});