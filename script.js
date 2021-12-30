const togglebutton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

togglebutton.addEventListener('click', () => {
    menu.classList.toggle('active')
})