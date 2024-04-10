burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')
rightNavList =document.querySelector('.right-nav-list')



burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')   
    rightNavList.classList.toggle('h-class-resp')
    burger.classList.toggle('burger-top')
})