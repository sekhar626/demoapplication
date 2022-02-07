let cartContainer = document.querySelector('.cart-list')

function checkout(){
    window.location.href='success.html'
}

//class UI
class UI{
    static displayCartItems(){
        let cartItems=storageItems.getCartItems();
        if(cartItems.length===0){
            let noEl=document.createElement('h1')
            noEl.classList.add('text-center')
            noEl.textContent="No Elements"
            cartContainer.appendChild(noEl)

            let ancLink=document.createElement('div')
            ancLink.classList.add('d-flex','justify-content-center')

            let anc=document.createElement('a')
            anc.href='index.html'
            ancLink.appendChild(anc)

            let but=document.createElement('button')
            but.textContent='order'
            anc.appendChild(but)
            cartContainer.appendChild(ancLink)

        }
        cartItems.forEach(cart => UI.addCartToDisplay(cart))    
    }

    static addCartToDisplay(cart){
        let cartObject=document.createElement('div')
        cartObject.classList.add('head')

        let imageObject=document.createElement('img')
        imageObject.classList.add('cart-image')
        imageObject.src=cart.imageLink
        cartObject.appendChild(imageObject)

        let cartElementInPage=document.createElement('div')
        cartElementInPage.classList.add('d-flex')

        let quantity=cart.quantity

        let addButton=document.createElement('button')
        addButton.textContent='+'
        addButton.addEventListener("click",()=>{
            quantity=quantity+1
            console.log(quantity)
            displayCount.textContent=quantity
            priceElement.textContent=quantity*cart.cost
        })
        cartElementInPage.appendChild(addButton)

        let displayCount=document.createElement('h6')
        displayCount.classList.add('quantity')
        displayCount.textContent=quantity
        cartElementInPage.appendChild(displayCount)

        let subButton=document.createElement('button')
        subButton.textContent='-'


        subButton.addEventListener('click',()=>{
            if(quantity>1){
                quantity-=1
                console.log(quantity)
                displayCount.textContent=quantity
                priceElement.textContent=quantity*cart.cost
            }else{
                storageItems.removeBook(cart.id)
            }
        })
        cartElementInPage.appendChild(subButton)
        cartObject.appendChild(cartElementInPage)

        let priceElement=document.createElement('div')
        priceElement.textContent=quantity*cart.cost
        cartObject.appendChild(priceElement)

        let removeElement=document.createElement('button')
        removeElement.textContent='del'
        removeElement.addEventListener('click',()=>storageItems.removeBook(cart.id))
        cartObject.appendChild(removeElement)

        cartContainer.appendChild(cartObject)
    }

}

class storageItems {
    static getCartItems() {
        if (localStorage.getItem('cartData') === null) {
            return []
        } else {
            return JSON.parse(localStorage.getItem('cartData'))
        }
    }

    static removeBook(id){
        const cartItems=storageItems.getCartItems()
        cartItems.forEach((element,index) => {
            if(element.id===id){
                cartItems.splice(index,1)
            }
        });
        console.log(cartItems)
        localStorage.setItem('cartData',JSON.stringify(cartItems))
        window.location.href="cart.html"
    }

}

//display cart items
document.addEventListener('DOMcontentLoaded',UI.displayCartItems())

