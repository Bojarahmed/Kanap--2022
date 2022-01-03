// let produit = window.location.search;
// console.log(produit);

let searchParams = new URLSearchParams(window.location.href);



// console.log(produit);



const result = document.getElementById("items");



async function getJoke () {
  
    await fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        // .then((data) => console.log(data[1]._id))
        .then((data) => display(data));
    
        
    };

    
    
    
    function display(data) {
        
        result.innerHTML = data.map((canap) =>
        `<a href="./product.html?_id=${canap._id}">
        <article>
        <img src="${canap.imageUrl}" alt="${canap.altTxt}">
        <h3 class="productName">${canap.name}</h3>
        <p class="productDescription">${canap.description}</p>
        </article>
        </a>`
        ).join('')
        
    };
        

// Chargement de la page

function load () {
    getJoke().then(() => display(data))
    };

load();
