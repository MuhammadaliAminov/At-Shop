let slideIndex = 0,
    slidePlay  = true,
    slides = document.querySelectorAll('.slide'),
    slider = document.querySelector('#slider');


    
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')


const hideAllSlide = () => {

    slides.forEach((e) => {
        e.classList.remove('active')
    })
}

const showSlide = () => {
    hideAllSlide()
    slides[slideIndex].classList.add('active')
}

const nextSlide = () => {

    if (slideIndex + 1 === slides.length) {
        slideIndex = 0
    } else {
        slideIndex = slideIndex + 1
    }

}

const prevSlide = () => {
    if (slideIndex - 1 < 0)  {
        slideIndex = slideIndex + slides.length - 1
    } else {
        slideIndex = slideIndex - 1
    }
}

next.addEventListener('click', function() {

    showSlide()
    nextSlide()
})

prev.addEventListener('click', () => {
    prevSlide()
    showSlide()
})

setInterval(() => {
    if (slidePlay) {
        prevSlide()
        showSlide()
    }
}, 2000)

slider.addEventListener('mouseover', () => slidePlay = false)

slider.addEventListener('mouseout', () => slidePlay = true)


const products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: '/Images/products/img-lg-black.png',
        image2: '/Images/products/img-lg-black-hover.webp',
        oldPrice: '400',
        currPrice: '300',
    },
    {
        name: 'JBL JR 310BT',
        image1: '/Images/products/img-lg-blue.png',
        image2: '/Images/products/img-lg-blue-hover.png',
        oldPrice: '300',
        currPrice: '700',
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: '/Images/products/img-sm-red.png',
        image2: '/Images/products/img-lg-red-hover.webp',
        oldPrice: '300',
        currPrice: '500',
    },
    {
        name: 'JBL Horizon',
        image1: '/Images/products/clock.png',
        image2: '/Images/products/clock-hover.webp',
        oldPrice: '300',
        currPrice: '400',
    },
    {
        name: 'JBL Tune 220TWS',
        image1: '/Images/products/airpods.png',
        image2: '/Images/products/airpods-hover.png',
        oldPrice: '300',
        currPrice: '500',
    },
    {
        name: 'UA Project Rock',
        image1: '/Images/products/airpods-black.png',
        image2: '/Images/products/airpods-black-hover.png',
        oldPrice: '300',
        currPrice: '600',
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: '/Images/products/earphone-red.webp',
        image2: '/Images/products/earphone-red-hover.webp',
        oldPrice: '300',
        currPrice: '500',
    },
]

const latestProduct = document.querySelector('#latest-product')
const bestProduct = document.querySelector('#best-product')

products.forEach((e) => {
    let product =`
    <div class="col-3">
        <div class="product__card">
            <div class="product__card-img">
                <img src="${e.image1}" alt="earphone">
                <img src="${e.image2}" alt="earphone">
            </div>
            <div class="product__card-info">
                <div class="product__btn">
                    <button class="product__card-btn all-btn">SHOP NOW</button>
                    <button class="product__card-btn all-btn"><i class="fa-solid fa-cart-plus"></i></button>
                    <button class="product__card-btn all-btn"><i class="fa-solid fa-heart"></i></button>
                </div>
                <h4 class="product__card-name">${e.name}</h4>
                <div class="product__card-price">
                    <span><del>${e.oldPrice}</del></span>
                    <span class="current__price">${e.currPrice}</span>
                </div>
            </div>
        </div>
    </div>
    `
    latestProduct.insertAdjacentHTML('beforeend', product)
    bestProduct.insertAdjacentHTML('afterbegin', product)
})
