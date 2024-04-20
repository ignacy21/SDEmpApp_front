

let experienceOptions = ["Experience 1", "Experience 2", "Experience 3", "Experience 4", "Experience 5"];
let localizationOptions = ["Localization 1", "Localization 2", "Localization 3", "Localization 4", "Localization 5"];
let formsOfEmploymentOptions = ["FormOfEmployment 1", "FormOfEmployment 2", "FormOfEmployment 3", "FormOfEmployment 4", "FormOfEmployment 5"];
let formsOfWorkOptions = ["FormOfWork 1", "FormOfWork 2", "FormOfWork 3", "FormOfWork 4", "FormOfWork 5"];
let languagesOptions = ["Language 1", "Language 2", "Language 3", "Language 4", "Language 5"];
let skillsOptions = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"];

createSelectElement("languages", languagesOptions)
createSelectElement("skills", skillsOptions)
createSelectElement("formsOfEmployment", formsOfEmploymentOptions)
createSelectElement("formsOfWork", formsOfWorkOptions)
createSelectElement("experience", experienceOptions)
createSelectElement("localization", localizationOptions)

function createSelectElement(elementName, arrayOfElements) {
    const selectElement = document.getElementById(elementName);
    
    arrayOfElements.forEach(function(optionText) {
        let option = document.createElement("option");
        option.text = optionText;
        selectElement.appendChild(option);
    });
}