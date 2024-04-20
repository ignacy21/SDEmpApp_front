

let localizationOptions = ["Localization 1", "Localization 2", "Localization 3", "Localization 4", "Localization 5"];

createSelectElement("localization", localizationOptions)

function createSelectElement(elementName, arrayOfElements) {
    const selectElement = document.getElementById(elementName);
    
    arrayOfElements.forEach(function(optionText) {
        let option = document.createElement("option");
        option.text = optionText;
        selectElement.appendChild(option);
    });
}