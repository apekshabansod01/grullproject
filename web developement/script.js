// Dummy product data
const products = [
    { name: "Product 1", price: 10, image: "product1.jpg" },
    { name: "Product 2", price: 20, image: "product2.jpg" },
    { name: "Product 3", price: 30, image: "product3.jpg" },
    { name: "Product 4", price: 40, image: "product4.jpg" }
];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Display products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);