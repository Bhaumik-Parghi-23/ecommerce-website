// Fetching products from backend and displaying them on the home page
async function fetchFeaturedProducts() {
    try{
        const response = await fetch('/api/products/featured'); // Backend API
        const products = await response.json();

        const productContainer = document.getElementById('product-list');

        productContainer.innerHTML = ''; // Clear previous items if any

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `<img src = "${product.image}" alt = "${product.name}">
            <h3>${product.name}</h3>
            <p>Rs.${product.price}</p>
            <button>Add to Cart</button>`;
            productContainer.appendChild(card);
        });
    }catch(error){
        console.error('Error fetching products: ', error);
    }
}

// Electronic Category  
document.getElementById('electronics-category').addEventListener('click', () => {
    window.location.href="electronics.html";
});

// Fashion Category
document.getElementById('fashion-category').addEventListener('click', () => {
    window.location.href="fashion.html";
});

// Home Category
document.getElementById('home-category').addEventListener('click', () => {
    window.location.href="home.html";
});

// Books Category
document.getElementById('books-category').addEventListener('click', () => {
    window.location.href="books.html";
});

// Games Category
document.getElementById('games-category').addEventListener('click', () => {
    window.location.href="games.html";
});

// Calling the API
window.addEventListener('DOMContentLoaded', fetchFeaturedProducts);