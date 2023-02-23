document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const outPutEmail = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const outPutPassword = userPassword.value;
    if (outPutEmail == "sontan@baap.com" && outPutPassword== 'secret') {
        window.location.href = 'banking.html'
    }
})





