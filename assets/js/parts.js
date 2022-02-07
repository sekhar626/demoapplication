// import {models,colors,ratings} from './filter' 

let productContainer = document.querySelector('.product-item')

let models = []
let colors = []
let ratingValue


function getselectedModels() {
    let checkboxes = document.querySelectorAll('input[name="model"]:checked');
    checkboxes.forEach((checkbox) => {
        models.push(checkbox.value);
    });
    console.log(models)
};

function getselectedRatings() {
    ratingValue = document.querySelectorAll('input[name="rating"]:checked')[0].value;
    console.log(ratingValue)
};

function getselectedColors() {
    let checkboxes = document.querySelectorAll('input[name="colors"]:checked');
    checkboxes.forEach((checkbox) => {
        colors.push(checkbox.value);
    });
    console.log(colors)
};

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

        productContainer.appendChild(innerProduct)

    let differentContainers=document.createElement('div')
        differentContainers.classList.add("single_product", "shadow", "text-center", "p-1", "d-flex")
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

function fetchBooks(url) {
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData)
            let partsDetails = jsonData
            let outputLength = partsDetails.length;
            console.log(jsonData)
            console.log(partsDetails);
            console.log(outputLength)
            if (outputLength !== 0) {
                let heading = document.createElement("h1");
                heading.textContent = "Parts";
                heading.classList.add("parts-heading", "col-12")
                productContainer.appendChild(heading);
                for (let part of partsDetails) {
                    addContainer(part);
                }
            } else {
                let paragraph = document.createElement('h1');
                paragraph.textContent = "No results Found";
                paragraph.classList.add("paragraph", "text-center")
                searchResultsEl.appendChild(paragraph);
            }
        })
}

let url = 'http://localhost:8081/allcategories?category_type=parts'

fetchBooks(url)