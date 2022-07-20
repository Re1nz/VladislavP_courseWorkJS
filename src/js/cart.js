const cartSide = document.querySelector('.cartWindow')

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]')





if (cartStorage.length) {
    cartStorage.forEach(el => {
        const { title, cost} = el
        const newCard = document.createElement('div')
        newCard.className ='cartWindowLi'
        newCard.innerHTML = `<p>${title}</p><p>${cost}</p>`     
        cartSide.appendChild(newCard)
        
     });
}


