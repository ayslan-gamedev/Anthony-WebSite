const themeSwitch = document.querySelectorAll('.theme-switch')

function toggleTheme(e){
    const body = document.querySelector("body")
    const theme = this.value

    body.classList.remove("theme-light", "theme-dark")
    body.classList.add(`theme-${theme}`)
}

Array.from(themeSwitch).forEach( radio => radio.addEventListener('change', toggleTheme) )