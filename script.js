const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)


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