const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
link1.addEventListener('click', close)
link2.addEventListener('click', close)
link3.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
    console.log("show");
}

function close() {
    mainMenu.style.top = '-100%'
    console.log("close");
}

//close menu as  soon as clicked 