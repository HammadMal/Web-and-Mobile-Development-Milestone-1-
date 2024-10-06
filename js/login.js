function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'user_test' && password === 'test1234') {
        window.location.href = 'homepage.html'; // Redirect to homepage.html
    } else {
        console.log('Incorrect username or password');
        document.getElementById('errorMessage').style.display = 'block';
    }
}
