// import search from './search.js'
const searchElements=document.querySelector('.search-items')

const navName=JSON.parse(localStorage.getItem('user-info'))

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function logout(){
    localStorage.removeItem("user-info")
    window.location.href="login.html"
}

function getStoredItems(){
    let dataFromLocal=localStorage.getItem('cartData')
    let parsedDataFromLocal=JSON.parse(dataFromLocal)
    if(parsedDataFromLocal===null){
        return []
    }else{
        return parsedDataFromLocal
    }
}

function addContainer(part) {
    let {
        id,
        imageLink,
        name,
        rating,
        reviews, colors, operating_system, display, display_resolution, CPU, RAM_size, Built_in_memory, tags,cost } = part;

    let innerProduct=document.createElement('div')
        innerProduct.classList.add('col-md-12','col-6','mb-2')

        searchElements.appendChild(innerProduct)

    let differentContainers=document.createElement('div')
        differentContainers.classList.add("single_product", "shadow", "text-center", "p-1")
        innerProduct.appendChild(differentContainers)

    let imageContainer=document.createElement('div')
        imageContainer.classList.add('product_img')

    let imageItem=document.createElement('img')
        imageItem.classList.add('img-fluid')
        imageItem.src=imageLink
        imageContainer.appendChild(imageItem)

        differentContainers.appendChild(imageContainer)

    let productCaption=document.createElement('div')
        productCaption.classList.add("product-caption","my-3")

    let heading=document.createElement('h5')
        heading.textContent=name
        productCaption.appendChild(heading)

        let ratingContainer=document.createElement('div')
        ratingContainer.classList.add("product-ratting","d-flex")
        productCaption.appendChild(ratingContainer)

        let ratingElement=document.createElement('i')
        ratingElement.classList.add("fas","fa-star")
        ratingContainer.appendChild(ratingElement)

    let ratingNumber=document.createElement('h6')
        ratingNumber.textContent=rating + " of total reviews "+reviews
        ratingContainer.appendChild(ratingNumber)

    let detailsSection=document.createElement('div')
    detailsSection.classList.add('details-section')
        detailsSection.innerHTML=`
            <h6>operating system : ${operating_system}</h6>
            <h6>display : ${display}</h6>
            <h6>display resolution : ${display_resolution}</h6>
            <h6>CPU : ${CPU}</h6>
            <h6>RAM size : ${RAM_size}</h6>
            <h6>Built-in-memory : ${Built_in_memory}</h6>
        `
        productCaption.appendChild(detailsSection)
        differentContainers.appendChild(productCaption)

    let cartElementIn=document.createElement('div')
    cartElementIn.classList.add('d-flex','flex-column')

    let priceContainer=document.createElement('div')
    priceContainer.classList.add('mb-4')
    priceContainer.innerHTML=`<b><span class="mr-1">${cost}</span><span>/-</span></b>`
    cartElementIn.appendChild(priceContainer)

    let cartElementInPage=document.createElement('div')
    cartElementInPage.classList.add('d-flex')

    let quantity=1

    let addButton=document.createElement('button')
        addButton.textContent='+'
        addButton.addEventListener("click",()=>{
            quantity=quantity+1
            console.log(quantity)
            displayCount.textContent=quantity
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
        }
    })
    cartElementInPage.appendChild(subButton)

    let cartButton=document.createElement('button')
    cartButton.classList.add('button1')
    cartButton.innerHTML=`<i class="fas fa-shopping-cart"></i>`
    cartElementInPage.appendChild(cartButton)

    cartButton.addEventListener('click',()=>{
        let listOfData=getStoredItems()
        let newData={
            id,
            imageLink,
            name,
            rating,
            reviews, colors, operating_system, display, display_resolution, CPU, RAM_size, Built_in_memory, tags,cost,quantity}
            const productObject=listOfData.find(eachElement=>eachElement.id===newData.id)
            console.log(productObject)
    
            if(productObject){
                listOfData=listOfData.map(eachItem=>{
                    if(eachItem.id===newData.id){
                        const updatedQuantity=quantity+productObject.quantity
                        console.log(updatedQuantity)
                        return {...eachItem,quantity:updatedQuantity}
                       
                    }else{
                        return eachItem
                    }
                })
                localStorage.setItem('cartData',JSON.stringify(listOfData))
            }else{
                let updatedListOfData=[...listOfData,newData]
                console.log(updatedListOfData)
                localStorage.setItem('cartData',JSON.stringify(updatedListOfData))
            }
    })

    cartElementIn.appendChild(cartElementInPage)
    differentContainers.appendChild(cartElementIn)


}

function fetchBooks(url,searchItem) {
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData)
            let partsDetails = jsonData.filter(each=>each.name.toLowerCase().includes(searchItem.toLowerCase()))
            let outputLength = partsDetails.length;
            console.log(partsDetails);
            console.log(outputLength)
            searchElements.innerHTML=``
            if (outputLength !== 0) {
                let heading = document.createElement("h1");
                heading.textContent = "Accessories";
                heading.classList.add("parts-heading", "col-12")
                searchElements.appendChild(heading);
                for (let part of partsDetails) {
                    addContainer(part);
                }
            } else {
                let paragraph = document.createElement('h1');
                paragraph.textContent = "No results Found";
                paragraph.classList.add("paragraph", "text-center")
                searchElements.appendChild(paragraph);
            }
        })
}

function search(){
    let searchItem=document.querySelector('.search-box').value

    let categoryType=document.getElementById('category').value
    let url
    if(categoryType==='All categories'){
        url='http://localhost:8081/allcategories?'
    }else{
        url=`http://localhost:8081/allcategories?category_type=${categoryType}`
    }
    fetchBooks(url,searchItem)

}

const createNav = () => {
    let nav = document.querySelector('.header_menu')
    nav.innerHTML = `
    <div class="container-fluid px-0 shadow nav">
        <a href="index.html">
        <img src="assets/images/logo.png" width="150px" class="brand-logo img-fluid" alt="logo">
        </a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search..">
                <select name="categories" id="category">
                    <option value="All categories">All Categories</option>
                    <option value="parts">Parts</option>
                    <option value="accessories">Accessories</option>
                    <option value="devices">Devices</option>
                    <option value="buyback">Buyback</option>
                    <option value="sales & delayed" style="color: crimson;">% sales & Delayed</option>
                </select>
                <button type="search" class="search-btn" onclick="search()">Search</button>
            </div>
            <div class="all-containers">
                <div class="profile-item" onclick="myFunction()">
                    <a href="#"><i class="fas fa-user"></i></a>
                    <div class="popup">${navName.name}
                        <span class="popuptext" id="myPopup"><button onclick="logout()">Log Out</button></span>
                    </div>
                    
                </div>
                <div class="profile-item">
                    <a href="#"><i class="fas fa-truck" size: 9x;></i></a>
                    <p class="d-none d-md-block">quick order</p>
                </div>
                <div class="profile-item">
                    <a href="cart.html"><i class="fas fa-shopping-cart" size: 9x;></i></a>
                    <p class="d-sm-none d-md-block">cart</p>
                </div>
            </div>
        </div>
    </div>
    <div class="small-head">
        <ul class="links-container">
            <li class="link-item"><a href="parts.html" class="link">Parts</a></li>
            <li class="link-item"><a href="accessories.html" class="link">Accessories</a></li>
            <li class="link-item"><a href="product.html" class="link">Devices</a></li>
            <li class="link-item"><a class="link" href="buyback.html">Buy Back</a></li>
            <li class="link-item"><a href="sales.html" class="link" style="color: crimson;">%sales and delayed</a></li>
            <li class="link-item"><a href="#" class="link" >...</a></li>
        </ul>
        <p>Hotline +91 6304984262</p>
    </div>
`
}
createNav()
