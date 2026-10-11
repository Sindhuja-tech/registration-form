const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');
const togglePasswordBtn = document.getElementById('togglePassword');

// Email format-a check panna helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;

    // 1. Name Validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name field cannot be empty.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // 2. Email Validation
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email field cannot be empty.";
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // 3. Password Validation Rules
    const passwordValue = passwordInput.value;
    const hasUpperCase = /[A-Z]/.test(passwordValue);   // Capital letter check
    const hasLowerCase = /[a-z]/.test(passwordValue);   // Small letter check
    const hasNumber = /[0-9]/.test(passwordValue);       // Number check
    const hasSpecialChar = /[^A-Za-z0-9]/.test(passwordValue); // Special character check

    if (passwordValue.length < 6 || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        passwordError.textContent = "Password must be 6+ chars with at least 1 Capital, 1 Small, 1 Number & 1 Special character (@, #, $).";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Enable or Disable Submit Button
    if (isValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true');
    }
}

// Real-time Event Listeners
nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Show / Hide Password Toggle Logic
togglePasswordBtn.addEventListener('click', function() {
    const icon = togglePasswordBtn.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Form Submission Handler
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    this.reset();
    submitBtn.setAttribute('disabled', 'true');
});