



let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

console.log(produitLocalStorage);


// ------------- Affichage du produit panier

// Selection de la classe a injecter
const positionElement = document.querySelector("#cart__items");


let produitPanier = [];

for(z = 0; z < produitLocalStorage.length; z++) {
    console.log(produitLocalStorage.length);
    
    produitPanier = produitPanier += `
    
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    
    <div class="cart__item__img">
    <img src="${produitLocalStorage[z].image}" alt="${produitLocalStorage[z].alt}">
    </div>
    
    <div class="cart__item__content">
    <div class="cart__item__content__description">
    <h2>${produitLocalStorage[z].names}</h2>
    <p>${produitLocalStorage[z].colors}</p>
    <p>${produitLocalStorage[z].price} €</p>
    </div>
    
    <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
    <p>Qté : ${produitLocalStorage[z].quantity}</p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produitLocalStorage[z].quantity}">
    </div>
    
    <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Supprimer</p>
    </div>
    </div>
    </div>
    </article>
    
    `;
};

if(z == produitLocalStorage.length){
    positionElement.innerHTML = produitPanier;
};

const suprimmer = document.querySelector(".deleteItem");
// console.log(suprimmer);


suprimmer.addEventListener("click", function () {
    console.log("ssssssssssssssss");
});



// const suprimmer = document.querySelector(".deleteItem");

// console.log(suprimmer);