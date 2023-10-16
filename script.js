const body = document.querySelector('body')
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)
const nav = document.querySelector('nav')
const toggleIcon = document.querySelector('#toggle-icon')
const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')
const textBox = document.querySelector('#text-box')
const currentTheme = localStorage.getItem('theme')

function imageMode (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function darkmode () {
  nav.style.backgroundColor = 'rgb(0 0 0 / 40%)'
  toggleIcon.children[0].textContent = 'Dark Mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  body.classList.add('dark')
  imageMode('dark')
}

function lightmode () {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Light Mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  body.classList.remove('dark')
  imageMode('light')
}

function addSpinning () {
  lightImg.classList.add('spinning')
}

function removeSpinning () {
  lightImg.classList.remove('spinning')
}

const lightImg = document.querySelector('#light-img')
lightImg.addEventListener('click', () => {
  addSpinning()
  setTimeout(() => {
    removeSpinning()
  }, 500)
})

window.addEventListener('load', () => {
  const themeSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  )
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
      darkmode()
      themeSwitch.checked = true
    } else {
      lightmode()
      themeSwitch.checked = false
    }
  }
})

// Switch theme dynamically
function switchTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')

    localStorage.setItem('theme', 'dark')
    darkmode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')

    localStorage.setItem('theme', 'light')
    lightmode()
  }
}

// Event Listeners

toggleSwitch.addEventListener('change', switchTheme)
