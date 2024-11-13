document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout');

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <span>${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}</span>
              <button class="remove-item" data-id="${item.id}">Remove</button>
          `;
          cartItemsContainer.appendChild(cartItem);

          total += item.price * item.quantity;
      });

      cartTotalElement.textContent = total.toFixed(2);
  }

  function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
  }

  cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
          const productId = e.target.dataset.id;
          removeFromCart(productId);
      }
  });

  checkoutButton.addEventListener('click', () => {
      alert('Thank you for your purchase!');
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
  });

  renderCart();
});