const openNav = document.querySelector('#open-nav')
const closeNav = document.querySelector('#close-nav')
const listItems = document.querySelector('.list-items-mobile')

openNav.addEventListener('click', () => {
  listItems.classList.toggle('active')
})

closeNav.addEventListener('click', () => {
  listItems.classList.remove('active')
  window.onscroll = false
})

const listItemClicked = Array.from(document.querySelectorAll('.list-item'))

listItemClicked.forEach(item => item.addEventListener('click', ()=> {
  listItems.classList.remove('active')
}))
