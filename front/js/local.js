 // --------------------------------------- Panier ------------------------------------

    
    
    //Sélection du bouton panier dans product.html
    
    const resultPanier = document.getElementById("addToCart");
    
    
    
    // Déclare une action au click sur l'élément du bouton panier.
    
    resultPanier.addEventListener('click', () => {
        
        const resultTitre = document.querySelector("#title");
       
        // Event.preventDefault();
  
    
        const idForm = document.querySelector("#colors").value;
        
        const quanty = document.querySelector("#quantity").value;
        
         const resultPrix = document.querySelector("#price").textContent;

        
        const resultImg = document.querySelector(".item__img");
        
        
         let optionsProduit = {

            
            colors: idForm,
            id: id,
            quantity: quanty,
            price: resultPrix,
            names: resultTitre,
            image: resultImg,
         };
    
   
        
        
    
    
    
        
// ---------------------------------------Alerte ---------------------------
        


//Alerte le panier a été ajouter.
const popupPanier = () => {
    if(window.confirm(`Votre Produit a été ajouter au Panier`)) {
        window.location.href = "cart.html"
    } else {
        window.location.href = "index.html"
    };
};




    // ---------------------------------------Le local Storage ---------------------------
        


            let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

            
            function produitLocal () {
                produitLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            };

            if(produitLocalStorage){

                produitLocal();               
                popupPanier();
            }
            
            else{

                produitLocalStorage = [];
                produitLocal();
                popupPanier();
            };
            
            
        });


       