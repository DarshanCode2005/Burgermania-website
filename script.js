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


function scrollUp(){
    const scrollbutton = document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollbutton.classList.add('show-scroll'):
                         scrollbutton.classList.remove('show-scroll')
}

const sections = document.querySelectorAll('section[id]')


const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown>sectionTop && scrollDown <= sectionTop+sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
    // complex
}

window.addEventListener('scroll',scrollActive)

window.addEventListener('scroll',scrollUp)


const sr = ScrollReveal(
    {
        origin:'top',
        distance:'60px',
        duration:2500,
        delay:300
    }
)

sr.reveal(`.home__data,.footer`)
sr.reveal(`.home__dish`,{delay:500,distance:'100px',origin:'bottom'})
sr.reveal(`.home__burger`,{delay:1200,distance:'100px',duration:1500})
sr.reveal(`.home__ingredient`,{delay:1600,interval:100})
sr.reveal(`.recipe__img,.delivery__img,.contact__image`,{origin:'left'})
sr.reveal(`.recipe__data,.delivery__data,contact__data`,{origin:'right'})
sr.reveal(`.popular__card`,{interval:100})