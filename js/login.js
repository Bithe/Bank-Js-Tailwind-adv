document.getElementById('login').addEventListener("click", function() {
    const email = document.getElementById('user-email');
    const userEmail = email.value;
    //password
    const password = document.getElementById('password');
    const userPassword = password.value;
    console.log(email.value);

    if (userEmail == 'admin@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});