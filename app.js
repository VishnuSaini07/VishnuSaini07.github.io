let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
body.style.overflow = "hidden"

themeSwitch.onclick  = function(){
  body.classList.toggle('dark');
}

var loader = document.getElementById('preloader');
setTimeout(function(){
  loader.style.display = "none";
  body.style.overflow = "auto";
}, 3000)
