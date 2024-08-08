let products = {
    data : [
    {
        productName : "regular white T-shirt",
        category : "Topwear",
        price : "349",
        image : "white-tshirt.jpg",
    },
    {
        productName : "Floral short skirt",
        category : "Bottomwear",
        price : "309",
        image : "short-skirt.jpg",
    },
    {
        productName : "Sporty smartwatch",
        category : "Watch",
        price : "899",
        image : "sporty-smartwatch.jpg",
    },
    {
        productName : "Basic knitted top",
        category : "Topwear",
        price : "299",
        image : "knitted-top.jpg",
    },
    {
        productName : "Black leather jacket",
        category : "Jacket",
        price : "999",
        image : "black-leather-jacket.jpg",
    },
    {
        productName : "Stylish pink Trousers",
        category : "Bottomwear",
        price : "589",
        image : "pink-trousers.jpg",
    },
    {
        productName : "Brown Men's Jacket",
        category : "Jacket",
        price : "1399",
        image : "brown-jacket.jpg",
    },
    {
        productName : "Comfy Gray Pants",
        category : "Bottomwear",
        price : "359",
        image : "comfy-gray-pants.jpg",
    },

  ]
};

for (let i of products.data ){
    //create card
    let card = document.createElement("div");
    //card should have category and should stay hidden initially
    card.classList.add("card",i.category, "hide");
    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);


    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.classList.add ("price");
    price.innerText = '$'+ i.price;
    container.appendChild(price)


    card.appendChild(container);


    document.getElementById('products').appendChild(card);

}


//parameter passed from button (parameter samed as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active")
        }
    });


    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all"){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide")
            }else{
                //hide other elements
                element.classList.add("hide")
            }
        }
    })
}


//search button click
document.getElementById("search").addEventListener("click", () => {
    //initializatiions
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card")

    //loop through all elements
    elements.forEach((element , index) =>{
        //check if text includes the search-value
        if( element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
                cards[index].classList.remove("hide")
        }else{
            //hide others
            cards[index].classList.add("hide");
        }
    })

}) 



//initailly displays all products
window.onload = () =>{
    filterProduct("all");
}