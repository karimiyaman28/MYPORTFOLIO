// welcome pop up message
alert("Hi There!\nWelcome To My Portfolio Website. Hope You like it.");

console.log(alert);

 var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
    	nav.classList.add('bg-dark');
    } else {
    	nav.classList.remove('bg-dark');
    }
 });
  