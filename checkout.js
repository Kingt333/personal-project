// Get cart data from localStorage
const cartData = JSON.parse(localStorage.getItem('cart')) || [];
const content = document.getElementById('checkout-content');

if (cartData.length === 0) {
  content.innerHTML = `
    <p>No items in your cart. 😢</p>
    <p>Please go back and add some products to checkout.</p>
  `;
} else {
  let total = 0;
  const itemsHTML = cartData.map(item => {
    total += item.price * item.quantity;
    return `<p>${item.name} × ${item.quantity} - $${item.price * item.quantity}</p>`;
  }).join('');

  content.innerHTML = `
    <div>${itemsHTML}</div>
    <h3>Total: $${total}</h3>
  `;
}

document.getElementById('go-back').addEventListener('click', () => {
  window.location.href = 'index.html'; // Replace with your shop's homepage
});
