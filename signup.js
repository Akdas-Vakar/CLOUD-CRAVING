// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateForm()) {
          alert('Form submitted successfully!');
          form.reset();
      }
  });

  function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.querySelector('input[name="confirmpassword"]').value;

      if (name === '' || email === '' || password === '' || confirmPassword === '') {
          alert('Please fill in all fields');
          return false;
      }

      if (!isValidEmail(email)) {
          alert('Please enter a valid email address');
          return false;
      }

      if (password.length < 6) {
          alert('Password must be at least 6 characters long');
          return false;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match');
          return false;
      }

      return true;
  }

  function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // Slider functionality
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
      if (index < 0) {
          currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
          currentIndex = 0;
      } else {
          currentIndex = index;
      }
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Auto-slide every 5 seconds
  setInterval(() => showSlide(currentIndex + 1), 5000);
});