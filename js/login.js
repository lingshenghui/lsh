document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const showForgotPasswordLink = document.getElementById('show-forgot-password');
    const showLoginFromForgotLink = document.getElementById('show-login-from-forgot');

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    showForgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        forgotPasswordForm.classList.add('active');
    });

    showLoginFromForgotLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordForm.classList.remove('active');
        loginForm.classList.add('active');
    });
}); 