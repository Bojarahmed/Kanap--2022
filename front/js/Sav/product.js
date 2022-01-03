
// creer et initiale toute les URLs de la bare d'adresse window.location.search
let searchParams = new URLSearchParams(window.location.search);

//queryString_url_id contient window.location.search
const queryString_url_id = window.location.search;

// demande a URLSearchParams le parametre queryString_url_id
const utlSearchParams = new URLSearchParams(queryString_url_id);

// variable ID qui recupere avec la methode get le ID
const id = utlSearchParams.get("id");
console.log(id);




// Variable qui pointe sur les éléments DOM de Produit.html
const resultImg = document.querySelector(".item__img");
const resultTitre = document.getElementById("title");
const resultPrix = document.getElementById("price");
const resultDesc = document.getElementById("description");
const resultColor = document.getElementById("colors");


console.log(resultTitre);
// console.log(colors);



// Création de la fonction getJokeIn en mode asynchrone
async function getJokeIn () {
  
    // Initialisation await de l'asynchrone qui permet de charger en parallèle les informations
    // fetch initiale l'API http avec les IDs des fiches produit.
    await fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.json())
        // .then((data) => console.log(data[1]._id))

        .then((lot) => {
        // console.log(lot);

           
        // Variable qui est égale a lot.colors
        

        
        let modeCouleur = lot.colors;


        // Boucle For pour lister toutes les couleurs
        for (const valeur of modeCouleur) {
          console.log(valeur);

          // Appel a resultColor dans un innerHTML pour lui injecter du code.
          // += Rajoute contenue dans un élément. ` `
          // 
          resultColor.innerHTML += `<option value="${valeur}">${valeur}</option>`
          
        }
      

        // Injecte dans resultTitre du texte et appelle la promesse lot qui est identifié sur les élément de L'API
        resultTitre.textContent = lot.name
        resultPrix.textContent = lot.price
        resultDesc.textContent = lot.description
        resultImg.innerHTML = `<img src='${lot.imageUrl}' alt="${lot.altTxt}">`
   




    })};





   getJokeIn();