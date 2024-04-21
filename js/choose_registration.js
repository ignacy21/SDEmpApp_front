const companyCreate = document.getElementById("company")
const jobSeekerCreate = document.getElementById("job_seeker")
const logoutButton = document.getElementById("logout")

logoutButton.onclick = function logout() {
    window.location.href = "../pages/main.html";
}

companyCreate.onclick = function goToLoginPage() {
    window.location.href = "../pages/company_creation.html";
}

jobSeekerCreate.onclick = function goToRegisterPage() {
    window.location.href = "../pages/job_seeker_creation.html";
}