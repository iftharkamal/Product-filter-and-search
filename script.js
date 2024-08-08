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
    //card should have category
    card.classList.add("card",i.category);
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
    name.innerText = i.productName;
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.classList.add ("price");
    price.innerText = '$'+ i.price;
    container.appendChild(price)


    card.appendChild(container);


    document.getElementById('products').appendChild(card);

}