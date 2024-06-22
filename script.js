// Show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu Show

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkActive(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach((e) => {
    e.addEventListener('click',linkActive)
})

function scrollHeader(){
    const header = document.getElementById('header')
    // this
    this.scrollY >= 50 ? header.classList.add('scroll-header'):
                        header.classList.remove('scroll-header')
                    
}

window.addEventListener('scroll',scrollHeader)

