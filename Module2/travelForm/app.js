const travelForm = document.travelForm;

travelForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // firstName, lastName, age, gender, location, diet, submit

    const firstName = travelForm.firstName.value;
    const lastName = travelForm.lastName.value;
    const age = travelForm.age.value;
    const gender = travelForm.gender.value;
    const location = travelForm.location.value;
    let diet = [];

    for (let i = 0; i < travelForm.diet.length; i++){
        if(travelForm.diet[i].checked){
            diet.push(travelForm.diet[i].value);
        }
    };

    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nLocation: ${location} \nDietary: ${diet}`)
});