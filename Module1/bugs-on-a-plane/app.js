var form = document.forms.airlineForm;
var submit = document.getElementById("submit");

submit.addEventListener("click", formAlert);

function formAlert() {
    var firstName = form.elements.firstName.value;
    var lastName = form.elements.lastName.value;
    var age = form.elements.age.value;
    var gender = form.elements.gender.value;
    var location = form.elements.travelLocation.value;
    var diet = [];

    if (form.elements.vegan.checked) {
        diet.push(form.vegan.value);
    } 
    if (form.elements.gluten.checked) {
        diet.push(form.gluten.value);
    }
    if (form.elements.paleo.checked) {
        diet.push(form.paleo.value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


