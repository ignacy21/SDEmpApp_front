const mainPageBtn = document.getElementById("main_page")
const loginForm = document.getElementById("loginForm")

mainPageBtn.onclick = function goToMainPage() {
    window.location.href = "../pages/main.html";
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let data = {
        email: email,
        password: password
    };

    fetch(
        'http://localhost:7070/SDEmpApp/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem('token', data.token);

            // direct user to viewPage
            window.location.href = '../pages/user_login_panel.html';
        })
        .catch((error) => {
            console.error('Error occurred during register:', error);
        });
})
