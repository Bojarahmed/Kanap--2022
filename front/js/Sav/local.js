 // --------------------------------------- Panier ------------------------------------

    
    
    //Sélection du bouton panier dans product.html
    
    const resultPanier = document.getElementById("addToCart");
    
    
    
    // Déclare une action au click sur l'élément du bouton panier.
    
    resultPanier.addEventListener("click", (Event) => {
        
        Event.preventDefault();
  
    
        const idForm = document.querySelector("#colors").value;
          
        const quanty = document.querySelector("#quantity").value = "1";
       
        
      
        
        let optionsProduit = {

            
            colors: idForm,
            id: id,
            quantity: quanty,
        };

       
        
        
            // ---------------------------------------Le local Storage ---------------------------
        
// Event.preventDefault();


    
//     function saveBasket(basket){
//         localStorage.setItem("basket", JSON.stringify(basket));
//     };
    
//     function getBasket(){
//         let basket = localStorage.getItem("basket");
//         if(basket == null){
//             return [];
//         } else {
//             return JSON.parse(basket);
//         };
//     };

    
//     function addBasket(product){
//         let basket = getBasket();
//         let foundProduct = basket.find(p => p.id == product.id);
//         if(foundProduct != undefined){
//             foundProduct.quantity++;
//         } else {
//             product.quantity = 1;
//             basket.push(product);
//         }
//         basket.push(product);
//         saveBasket(basket);
//     };
    
//     function removeFromBasket(product){
//         let basket = getBasket();
//         basket = basket.filter(p => p.id != product.id);
//         saveBasket(basket);
//     };

//     function changeQuantity(product,quantity){
//         let basket = getBasket();
//         let foundProduct = basket.find(p => p.id == product.id);
//         if(foundProduct != undefined){
//             foundProduct.quantity += quantity;
//             if(foundProduct.quantity <= 0) {
//                 removeFromBasket(foundProduct);
//             } else {
//                 saveBasket(basket);

//             }
//         } 
//     };

//     function getNumberProduit(){
//         let basket = getBasket();
//         let number = 0;
//         for(let product of basket){
//             number += product.quantity;
//         }
//         return number;
//     };

//     function getTotalPrice(){
//         let basket = getBasket();
//         let number = 0;
//         for(let product of basket){
//             number += product.quantity * product.price;
//         }
//         return number;

//     };











//Alerte le panier a été ajouter.
const popupPanier = () => {
    if(window.confirm(`Votre Produit a été ajouter au Panier`)) {
        window.location.href = "cart.html"
    } else {
        window.location.href = "index.html"
    };
}




    // ---------------------------------------Le local Storage ---------------------------
        


            let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
                  
          
            if(produitLocalStorage){

                produitLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

                
                popupPanier();
            }
            
            else{

                produitLocalStorage = [];
                produitLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

                
                popupPanier();
            };
            
            
        });



