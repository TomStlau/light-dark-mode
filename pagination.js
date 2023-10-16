let articles = document.querySelectorAll('article')
const pagesContainer = document.querySelector('.pages')
const articlesContainer = document.querySelector('.articles')
let viewportWidth = window.innerWidth

const pagesNumbers = []
function addPages () {
  for (let i = 0; i < articles.length / 8; i++) {
    pagesNumbers.push(i + 1)
  }
  if (articles.length === 0) {
    pagesNumbers.push(1)
  }
}

function createPageLinks () {
  for (page of pagesNumbers) {
    const pageLink = document.createElement('a')
    pageLink.classList.add('page-link')
    pageLink.textContent = page
    pageLink.id = page
    pagesContainer.appendChild(pageLink)
  }
  if (pagesNumbers.length === 1) {
    pagesContainer.classList.add('hidden')
  }
}

function showCardsOfPage (pageNumber) {
  articlesContainer.classList.add('slide-out')
  setTimeout(() => {
    articlesContainer.innerHTML = ''
    for (let i = pageNumber * 8 - 8; i < pageNumber * 8; i++) {
      if (articles[i]) {
        articlesContainer.appendChild(articles[i])
      }
    }
    articlesContainer.classList.remove('slide-out')
    articlesContainer.classList.add('slide-in')
    setTimeout(() => {
      articlesContainer.classList.remove('slide-in')
    }, 500)
  }, 500)
}

document.addEventListener('DOMContentLoaded', () => {
  addPages()
  createPageLinks()
  showCardsOfPage(1)
  pagesContainer
    .querySelector('.page-link')
    .classList.add('selected', 'disabled')
})

pagesContainer.addEventListener('click', e => {
  if (e.target.classList.contains('page-link')) {
    showCardsOfPage(e.target.id)
    pagesContainer.querySelectorAll('.selected').forEach(el => {
      el.classList.remove('selected', 'disabled')
    })

    e.target.classList.add('selected', 'disabled')
  }
})
