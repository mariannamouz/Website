function passwordsMatch() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('check-password').value;

    if (password !== confirmPassword) {
        displayError('Passwords do not match', 'confirm-password-error');
        return false; // Prevent form submission
    } else {
        clearError('confirm-password-error');
        return true;
    }
}

function checkPasswordLength() {
    var password = document.getElementById('password').value;

    if (password.length < 8) {
        displayError('Password must be at least 8 characters', 'password-error');
        return false; // Prevent form submission
    } else {
        clearError('password-error');
        return true;
    }
}

function checkAge() {
    var age = document.getElementById('age').value;

    if (parseInt(age) < 16) {
        displayError('Age must be at least 16', 'age-error');
        return false; // Prevent form submission
    } else {
        clearError('age-error');
        return true;
    }
}

// Function to display error messages
function displayError(message, errorElementId) {
    let errorStatus = document.getElementById(errorElementId);
    errorStatus.textContent = message;
    errorStatus.style.color = 'red';
}

// Function to clear error messages
function clearError(errorElementId) {
    let errorStatus = document.getElementById(errorElementId);
    errorStatus.textContent = '';
}


