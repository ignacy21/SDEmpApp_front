const companyCreate = document.getElementById("company")
const JobSeekerCreate = document.getElementById("job_seeker")

companyCreate.onclick = function goToLoginPage() {
    window.location.href = "../pages/company_creation.html";
}

JobSeekerCreate.onclick = function goToRegisterPage() {
    window.location.href = "../pages/job_seeker_creation.html";
}