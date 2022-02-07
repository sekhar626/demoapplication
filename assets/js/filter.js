let filterContainer = document.querySelector('.filters')

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

filterContainer.innerHTML = `
<h4 class="mb-5 border-bottom">Filters</h4>
<div class="filter-section">
    <span class="filter text-style">Filter/Sort</span>
    <span class="fas fa-angle-double-down icon" data-bs-toggle="collapse" data-bs-target="#target"></span>
    <div id="target" class="collapse show">
        <div class="sub-heading">
            <span class="filter text-style">Models</span>
            <span class="fas fa-angle-double-down icon" data-bs-toggle="collapse" data-bs-target="#harsha"></span>
            <div id="harsha" class="collapse show sub-heading text-style">
                <div>
                    <input type="checkbox" class="option" value="samsung" name="model" ><span class="filter-options">Samsung</span>
                </div>
                <div>
                    <input type="checkbox" class="option" value="redmi" name="model"><span class="filter-options">Redmi</span>
                </div>
                <div>
                    <input type="checkbox" class="option" value="sony" name="model"><span class="filter-options">Sony</span>
                </div>
                <div>
                    <input type="checkbox" class="option" value="apple" name="model"><span class="filter-options">Apple</span>
                </div>
            
                <div>
                    <input type="checkbox" class="option" value="oneplus" name="model"><span class="filter-options">One plus</span>
                </div>
                <button onclick="getselectedModels()">get</button>
            </div>
        </div>
        <div class="sub-heading">
            <span class="filter text-style">Ratings</span>
            <span class="fas fa-angle-double-down icon" data-bs-toggle="collapse" data-bs-target="#ntr"></span>
            <div id="ntr" class="collapse show sub-heading text-style">
                <div>
                    <input type="radio" class="option" name="rating" value="4"><span class="filter-options"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> 4 and above</span>
                </div>
                <div>
                    <input type="radio" class="option" name="rating" value="3"><span class="filter-options"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> 3 and above </span>
                </div>
                <div>
                    <input type="radio" class="option" name="rating" value="2"><span class="filter-options"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> 2 and above </span>
                </div>
                <div>
                    <input type="radio" class="option" name="rating" value="1"><span class="filter-options"><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> 1 and above </span>
                </div>
                <button onclick="getselectedRatings()">get</button>
            </div>
        </div>
        
        <div class ="sub-heading">
            <span class="filter text-style">Colors</span>
            <span class="fas fa-angle-double-down icon" data-bs-toggle="collapse" data-bs-target="#tarak"></span>
            <div id="tarak" class="collapse show sub-heading text-style">
                <div>
                    <input type="checkbox" class="option" name="colors" value="blue"><span class="filter-options">Blue</span>
                </div>
                <div>
                    <input type="checkbox" class="option" name="colors" value="black"><span class="filter-options">Black</span>
                </div>
                <div>
                    <input type="checkbox" class="option" name="colors" value="brown"><span class="filter-options">brown</span>
                </div>
                <div>
                    <input type="checkbox" class="option" name="colors" value="red"><span class="filter-options">Red</span>
                </div>
                <div>
                    <input type="checkbox" class="option" name="colors" value="green"><span class="filter-options">Green</span>
                </div>
                <button onclick="getselectedColors()">get</button>
        </div>
    </div>
</div>
</div>
<div class="col-lg-9 col-md-9 col-sm-12"></div>     
</div>
`
// export let fil={
//     models,colors,ratingValue
// }
// module.export={fil} 