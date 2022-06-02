const clickToTop = document.querySelector('#backToTopButton')

function toTop() {
  if (scrollY >= 230) {
    clickToTop.classList.add('show')
  } else {
    clickToTop.classList.remove('show')
  }
}

document.addEventListener('scroll', toTop)
