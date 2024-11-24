document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
  
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
  
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      errorMessage.textContent = 'Please fill in all the fields.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (!terms) {
      errorMessage.textContent = 'You must accept the Terms of Use and Privacy Policy.';
      errorMessage.style.display = 'block';
      return;
    }
  
    alert('Registration successful!');
    document.getElementById('register').reset();
});