document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.getElementById('cart-count');

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const product = {
              id: button.dataset.id,
              name: button.dataset.name,
              price: parseFloat(button.dataset.price)
          };

          addToCart(product);
          updateCartCount();
      });
  });

  function addToCart(product) {
      const existingProduct = cart.find(item => item.id === product.id);

      if (existingProduct) {
          existingProduct.quantity += 1;
      } else {
          cart.push({ ...product, quantity: 1 });
      }

      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartCount() {
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalCount;
  }
});