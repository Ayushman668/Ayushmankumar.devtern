const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;
  const rememberMe = loginForm.rememberMe.checked;

  // **Simulate sending data to a backend (Replace with real backend call)**
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password, rememberMe }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Login successful
      if (rememberMe) {
        // Store login token securely (e.g., local storage with HttpOnly flag)
        localStorage.setItem('token', data.token);
      }
      window.location.href = '/protected-content';
    } else {
      errorMessage.textContent = data.message;
    }
  })
  .catch(error => {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred. Please try again.';
  }}