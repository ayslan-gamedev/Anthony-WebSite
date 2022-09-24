const themeSwitch = document.querySelector('.theme-switch')

themeSwitch.addEventListener('change',function(){
  document.querySelector("body").classList.toggle("theme-dark")
})
