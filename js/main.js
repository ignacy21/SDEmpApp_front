const createAccountBtn = document.getElementById("create_account")
const loginBtn = document.getElementById("login")

loginBtn.onclick = function goToRegisterPage() {
    window.location.href = "../pages/login.html";
}
createAccountBtn.onclick = function goToLoginPage() {
    window.location.href = "../pages/register.html";
}
