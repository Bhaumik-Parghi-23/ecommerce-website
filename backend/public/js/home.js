// Fetching products from backend and displaying them on the home page
async function fetchProducts() {
    try{
        const response = await fetch('/api/products'); // Backend API
        const products = await response.json();

        const productContainer = document.getElementById('product-list');

        productContainer.innerHTML = ''; // Clear previous items if any

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `<img src = "${product.image}" alt = "${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>`;
            productContainer.appendChild(card);
        });
    }catch(error){
        console.error('Error fetching products: ', error);
    }
}

// Calling the API
window.addEventListener('DOMContentLoaded', fetchProducts);