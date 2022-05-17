


var nav = document.querySelector("nav");
window.addEventListener('scroll', function () {
   if (window.pageYOffset > 100) {
   	 nav.classList.add("bg-dark");

   } else {
   	nav.classList.remove('bg-dark');
   }

});