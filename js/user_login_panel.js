const companyCreate = document.getElementById("company")
const jobSeekerCreate = document.getElementById("job_seeker")
const logoutButton = document.getElementById("logout")
const userData = document.getElementById("use_data")

const bearerToken = 'Bearer ' + localStorage.getItem('token')

fetch('http://localhost:7070/SDEmpApp/main-page/user', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': bearerToken
    }
})
    .then(response => response.json())
    .then(data => {
        userData.textContent = `Hello ${data.email}`
        localStorage.setItem('user_email', data.email);
    })
    .catch(error => {
        console.error('Error occurred during login:', error);
    });

logoutButton.onclick = function logout() {
    window.location.href = "../pages/main.html";
}

companyCreate.onclick = function goToLoginPage() {
    window.location.href = "../pages/company_creation.html";
}

jobSeekerCreate.onclick = function goToRegisterPage() {
    window.location.href = "../pages/job_seeker_creation.html";
}