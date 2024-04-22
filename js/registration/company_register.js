const companyForm = document.getElementById("company_creation_form");
const localizationSelect = document.getElementById("localization_city");
let localizationProvinceOptions = [
    "Dolnośląskie",
    "Kujawsko-pomorskie",
    "Lubelskie",
    "Lubuskie",
    "Łódzkie",
    "Małopolskie",
    "Mazowieckie",
    "Opolskie",
    "Podkarpackie",
    "Podlaskie",
    "Pomorskie",
    "Śląskie",
    "Świętokrzyskie",
    "Warmińsko-mazurskie",
    "Wielkopolskie",
    "Zachodniopomorskie"
];
let localizationCityOptions = ["Localization 1", "Localization 2", "Localization 3", "Localization 4", "Localization 5"];

createSelectElement("localization_province", localizationProvinceOptions)
createSelectElement("localization_city", localizationCityOptions)

let user_email = localStorage.getItem("user_email");

localizationSelect.addEventListener("change", function () {
    let province = this.value;

    let http = `http://localhost:7070/SDEmpApp/localization/by-province/${province}`
    fetch(http, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.cities)
            createSelectElement("localization_city", data)
        })
        .catch(error => {
            console.error('Error occurred during localization find:', error);
        });
})

function createSelectElement(elementName, arrayOfElements) {
    const selectElement = document.getElementById(elementName);
    
    arrayOfElements.forEach(function(optionText) {
        let option = document.createElement("option");
        option.text = optionText;
        selectElement.appendChild(option);
    });
}

companyForm.addEventListener("submit", function (event) {
    event.preventDefault()

    let name = document.getElementById('name')
    let description = document.getElementById('description')
    let phone = document.getElementById('phone')
    let email = user_email
    let localization = document.getElementById('localization')
})
