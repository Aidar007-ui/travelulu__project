let box = document.querySelector('.popup')

let showPopup = () =>{
    box.classList.toggle('active')
}

let menu = document.querySelector('.burger__box')
let plans = document.querySelector('.plans__bottom')
let showBurger__box = () => {
    menu.classList.toggle('open')
    plans.classList.toggle('open')
}