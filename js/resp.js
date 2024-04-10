burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')
rightNavList =document.querySelector('.right-nav-list')
searchInput = document.getElementById('search')
products = Array.from(document.getElementsByClassName('box-products'))
productSection = Array.from(document.getElementsByClassName('bg-product'))
// console.log(products[0].getElementsByClassName('product-name')[0].innerText)
console.log(productSection)
console.log(products[0].classList)
let i=0
let j=3

function brandFilter(value){
    products.forEach(product=>{
        const isVisible = product.getElementsByClassName('product-name')[0].innerText.toLowerCase().includes(value.toLowerCase())
        product.classList.toggle('hide',!isVisible)
        
    })
}

searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase()
    products.forEach(product=>{
        const isVisible = product.getElementsByClassName('product-name')[0].innerText.toLowerCase().includes(value)
        console.log(isVisible)
        product.classList.toggle('hide',!isVisible)
        
    })
    // while(i<=2){
    //     if(products[i].classList[1] =='hide'){
    //         i++
    //     }
    // }
    // if(i==3){
    //     productSection[0].classList.toggle('hide')
    // }
    // while(j<=5){
    //     if(products[j].classList[1]=='hide'){
    //         j++
    //     }
    // }
    // if(j==6){
    //     productSection[1].classList.toggle('hide')
    // }

    // if(i==3&j==6){
    //     productSection[2].classList.toggle('hide')
    // }

    
})



burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')   
    rightNavList.classList.toggle('h-class-resp')
    burger.classList.toggle('burger-top')
})