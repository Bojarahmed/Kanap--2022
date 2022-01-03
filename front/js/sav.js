// let produit = window.location.search;
// console.log(produit);

let produit = new URLSearchParams(window.location.search);

console.log(produit);



const result = document.getElementById("items");
let logic = [];


async function getJoke () {

  
    // let all = document.querySelector('.items').innerHTML +=
    // `
    // <a href="./product.html?id=42">
    //         <article>
    //           <img src="" alt="Lorem ipsum dolor sit amet Kanap name1">
    //           <h3 class="productName">Kanap name1</h3>
    //           <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    //         </article>
    //       </a>
    // `;
    
    await fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        // .then((data) => console.log(data[1]._id))
        .then((data) => display(data));
    
        console.log(logic);
    };

    
    
    
    function display(data) {
        
        result.innerHTML = data.map((canap) =>
        `<a href="product.html?id=${canap._id}">
        <article>
        <img src="${canap.imageUrl}" alt="${canap.altTxt}">
        <h3 class="productName">${canap.name}</h3>
        <p class="productDescription">${canap.description}</p>
        </article>
        </a>`
        ).join('')
        
    };
        
// document.getElementById("items").href += '?id=${product.html.id}'

// Chargement de la page

function load () {
    getJoke().then(() => display());
    };

load();
