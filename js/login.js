function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'user_test' && password === 'test1234') {
        window.location.href = 'homepage.html';
    } else {
        console.log('Incorrect username or password');
        errorMessage.style.opacity = '1'; // Make the error message visible
    }
}
