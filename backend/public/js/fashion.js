document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-list');
    container.innerHTML = "";
    try {
        const res = await fetch('/api/products/fashion');
        const products = await res.json();

        container.innerHTML = products.map(product => `
            <div class="product-card">
            <img src = "${product.image}" alt = "${product.name}">
            <h3>${product.name}</h3>
            <p>Rs.${product.price}</p>
            <p class="description">${product.description}</p>
            <button>Add to Cart</button>
            </div>
            `).join('');
    } catch (err) {
        console.error('Error fetching products:', err);
        container.innerHTML = "<p>Failed to load products.</p>";
    }
});