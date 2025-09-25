const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click',() => {
    nav.forEach(nav_e1 => nav_e1.classList.add('nav-visible'))
})
close_btn.addEventListener('click',() => {
    nav.forEach(nav_e1 => nav_e1.classList.remove('nav-visible'))
});

