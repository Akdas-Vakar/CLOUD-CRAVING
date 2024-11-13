document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('rememberme');

  // Check if there's a saved username in localStorage
  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberMeCheckbox.checked = true;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Simulate login process
    simulateLogin(username, password);
  });

  function simulateLogin(username, password) {
    // This is where you would normally send a request to your server
    console.log('Attempting login with:', username, password);

    // Simulate a network request
    setTimeout(() => {
      // For demo purposes, let's say the login is successful if the password is not empty
      if (password) {
        alert('Login successful!');
        
        // Save username if "Remember me" is checked
        if (rememberMeCheckbox.checked) {
          localStorage.setItem('savedUsername', username);
        } else {
          localStorage.removeItem('savedUsername');
        }

        // Here you would typically redirect the user or update the UI
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }, 1000); // Simulate a 1-second delay
  }

  // Handle "Forgot Password" link click
  const forgotPasswordLink = document.querySelector('a[href="forgot.html"]');
  forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Forgot password functionality is not implemented in this demo.');
    // In a real application, you might redirect to a password reset page or show a modal
  });

  // Handle "Register Here" link click
  const registerLink = document.querySelector('a[href="signup.html"]');
  registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Registration functionality is not implemented in this demo.');
    // In a real application, you might redirect to a registration page
  });
});