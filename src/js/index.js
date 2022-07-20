// 'use strict'

let slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




const cardProduct = [
    {   'id' : 0,
        'name' : 'Монитор',
        'cost' : 3450,
        'image' : 'https://i.ibb.co/9g7z3zD/1.jpg',
    
    },
    {   'id' : 1,
        'name' : 'Планшет',
        'cost' : 5120,
        'image' : 'https://i.ibb.co/yFggm3D/2.jpg',
 
        
    },
    {   'id' : 2,
    'name' : 'Видеокарта',
    'cost' : 4980,
    'image' : 'https://i.ibb.co/xHpW8J5/3.jpg',
  
    },
    {   'id' : 3,
    'name' : 'Смарт-часы',
    'cost' : 3699,
    'image' : 'https://i.ibb.co/x1QzTXK/4.jpg',

    },
    {   'id' : 4,
    'name' : 'Ноутбук',
    'cost' : 7999,
    'image' : 'https://i.ibb.co/ZdLbkFz/5.jpg',
   
    },
    {   
    'id' : 5, 
    'name' : 'Смартфон',
    'cost' : 7000,
    'image' : 'https://i.ibb.co/ZYMG268/6.jpg',
    
    }
]
const productContainer = document.getElementById('productContainer');

const createButton = (text, className) => {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(text);
    button.append(buttonText);
    button.className = className;
    return button;
}



cardProduct.forEach(product => {
    const productWrapper = document.createElement('li');
    productWrapper.id = `product-${product.id}`;

    const productName = document.createElement('p');
    productName.innerHTML = product.name;
    productName.className = 'cardName';

    const productCost = document.createElement('p');
    productCost.innerHTML = product.cost;
    productCost.className = 'cardCost';

    const productImage = document.createElement('img');
    productImage.src = product.image
    productImage.className = 'productImage';

    productWrapper.className = 'productWrapper'

   
    const addBusketButton = createButton('Добавить в корзину', 'addBusketButton');
    addBusketButton.id = 'addBusketButton';

    productWrapper.append(productImage);

    productWrapper.append(productName);

    productWrapper.append(productCost);

    productWrapper.append(addBusketButton);

    productContainer.append(productWrapper); 
})

const addToCart = document.querySelectorAll('.productWrapper')


addToCart.forEach((el, idx) => {
    const btn = el.childNodes[3]
    const title = el.childNodes[1].innerText
    const cost = el.childNodes[2].innerText

    btn.addEventListener('click', () => {
        const cartStorage = localStorage.getItem('cart') || '[]'
        const cart = JSON.parse(cartStorage)
        const card = { title, cost }
        localStorage.setItem('cart', JSON.stringify([...cart , card]))

    })
})




const menuElem = document.getElementById('cart');
const titleElem = document.getElementById('cartTitle');
const body = document.getElementById('root');
const slider = document.querySelector('.slider');
const sliderDots = document.querySelector('.slider-dots')
const card = document.querySelector('.card');
const hitsHide = document.querySelector('.card-title')





titleElem.addEventListener('click', function (){

    menuElem.classList.toggle('open');
    body.classList.toggle('cover');
    slider.classList.toggle('hide');
    card.classList.toggle('hide');
    sliderDots.classList.toggle('hide');
    hitsHide.classList.toggle('hide');
   
 
})


const deleteCartProduct = document.querySelector('.deleteCartProduct')



deleteCartProduct.addEventListener('click', function (){
    localStorage.clear();
 
})

window.onload = () => {

    let input = document.querySelector('#input');
    // let preparedInput = input.toLowerCase();
    input.oninput = function () {
    let value = this.value.trim();
    let list = document.querySelectorAll('.ul li');
        
    if (value) {
    list.forEach(elem => {
    if (elem.innerText.search(value) == -1) {
    elem.classList.add('hide')
    }
});

    } else {
    list.forEach(elem => {
    elem.classList.remove('hide');
});
}
}; 
};
