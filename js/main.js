const createAccountBtn = document.getElementById("create_account")
const loginBtn = document.getElementById("login")

createAccountBtn.onclick = function goToLoginPage() {
    window.location.href = "choose_registration.html";
}
loginBtn.onclick = function goToRegisterPage() {
    window.location.href = "login.html";
}