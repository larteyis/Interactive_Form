//              THE NAME FIELD         //
const focusName = document.getElementById("name");
focusName.focus(); //Focus cursor on Name bar




//              JOB ROLE SECTION         //
//Create variables and hide other job by default
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
otherJobRole.style.display = "none";// hide otherJobRole by default

//Create a condition to unhide other job role if needed
jobRole.addEventListener("change", (e) => {
    const eventTarget = e.target;
    
    if (eventTarget.value === jobRole.options[6].value) {
        otherJobRole.style.display = "block"; 
    } else {
        otherJobRole.style.display = "none";
    }
});





//              T-SHIRT INFO SECTION         //
//Disable color menu by default
const shirtColors = document.getElementById("shirt-colors");
const color = document.getElementById("color");
let designOptionsInColor = color.querySelectorAll('option');
color.disabled = true;

//Assign the correct colors to each theme when chosen
const design = document.getElementById("design");

design.addEventListener("change", (e) =>{
    color.disabled = false;    
    const eventTarget = e.target;
    
    for(let i=0; i< designOptionsInColor.length; i++){
        designOptionsInColor[i].hidden = true;
    }

    const themeJsPuns = color.querySelectorAll('[data-theme="js puns"]');
    const themeHeartJs = color.querySelectorAll('[data-theme="heart js"]');
        
    if (eventTarget.value === 'js puns'){
        themeJsPuns[0].selected = true
        for(let i=0; i< themeJsPuns.length; i++){
        themeJsPuns[i].hidden = false;}
    } else if (eventTarget.value === 'heart js'){
        themeHeartJs[0].selected = true
        for(let i=0; i<themeHeartJs.length; i++)
            themeHeartJs[i].hidden =false;
    }   
});





//              REGISTER FOR ACTIVITIES SECTION         //
const activities = document.getElementById("activities");
const total = document.getElementById("activities-cost");
let cost = 0;

//Add the cost of an activity when checked and subtract when unchecked
activities.addEventListener("click", (e) =>{
    const eventTarget = e.target;
    const dataCost = +eventTarget.getAttribute("data-cost");//"plus sign" is a unary plus operator
    //console.log(dataCost);  
    //console.log(typeof dataCost);
    if(eventTarget.checked) {
        cost += dataCost
    } else if (eventTarget.checked === false){
        cost -= dataCost
    }
total.textContent = `Total$${cost}`;
});





//  PAYMENT INFO SECTION    //
const payment = document.getElementById("payment");
const creditCardSelected = payment.querySelector('option[value="credit-card"]');
creditCardSelected.selected = true; //selecting credit card to be shwon first in payment box
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
//Hiding paypal and bitcoin
paypal.style.display = "none";
bitcoin.style.display = "none";
creditCard.style.display = "block";



payment.addEventListener("click", (e) =>{
    const eventTarget = e.target;
    if(eventTarget.value === "credit-card"){
        creditCard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    } else if (eventTarget.value === "paypal") {
        paypal.style.display = "block";
        bitcoin.style.display = "none";
        creditCard.style.display = "none";
    } else if (eventTarget.value === "bitcoin"){
        paypal.style.display = "none";
        bitcoin.style.display = "block";
        creditCard.style.display = "none";
    }
});



//          FORM VALIDATION         //
focusName
const emailAddress = document.getElementById("email");
activities
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const formElement = document.querySelector('form');

//Name validation function
function nameIsValid(){
    const nameRegEx = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(focusName.value);
    const nameHint = document.getElementById('name-hint');
    if (nameRegEx == false){
        focusName.parentElement.className = 'not-valid';
        nameHint.style.display = 'block';
    } else if (nameRegEx == true){
        focusName.parentElement.removeAttribute('class','not-valid');
        nameHint.style.display = 'none';
        focusName.parentElement.className = 'valid';
    }
    return nameRegEx
}



//Email address validation function
function emailIsValid(){
    const emailRegEx = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailAddress.value);
    const emailHint = document.getElementById("email-hint");
    if (emailRegEx == false){
        emailAddress.parentElement.className = 'not-valid';
        emailHint.style.display = 'block';
    } else if (emailRegEx == true){
        emailAddress.parentElement.removeAttribute('class','not-valid');
        emailHint.style.display = 'none';
        emailAddress.parentElement.className = 'valid';
    }
    return emailRegEx
}

//Register for activities validation function
function activitiesIsValid(){
    activities.classList.add('not-valid')
    const activitiesHint = document.getElementById("activities-hint");
    activitiesHint.style.display = 'block';
    if (cost !== 0){
        activities.classList.add('valid');
        activitiesHint.style.display = 'none';
        activities.classList.remove('not-valid');
        return true
    }
    
}

//Card validation function
function cardNumberIsValid(){
    const cardNumberRegEx = /^\d{13,16}$/.test(cardNumber.value);
    const cardNumberHint = document.getElementById("cc-hint");
    if (cardNumberRegEx == false){
        cardNumber.parentElement.className = 'not-valid';
        cardNumberHint.style.display = 'block';
    } else if (cardNumberRegEx == true){
        cardNumber.parentElement.removeAttribute('class','not-valid');
        cardNumberHint.style.display = 'none';
        cardNumber.parentElement.className = 'valid';
    }
    return cardNumberRegEx
}

//Zipcode validation function
function zipCodeIsValid(){
    const zipCodeRegEx = /^\d{5}$/.test(zipCode.value);
    const zipCodeHint = document.getElementById("zip-hint");
    if (zipCodeRegEx == false){
        zipCode.parentElement.className = 'not-valid';
        zipCodeHint.style.display = 'block';
    } else if (zipCodeRegEx == true){
        zipCode.parentElement.removeAttribute('class','not-valid');
        zipCodeHint.style.display = 'none';
        zipCode.parentElement.className = 'valid';
    }
    return zipCodeRegEx
}

//CVV validation function
function cvvIsValid(){
    const cvvRegEx = /^\d{3}$/.test(cvv.value);
    const cvvHint = document.getElementById("cvv-hint");
    if (cvvRegEx == false){
        cvv.parentElement.className = 'not-valid';
        cvvHint.style.display = 'block';
    } else if (zipCodeRegEx == true){
        cvv.parentElement.removeAttribute('class','not-valid');
        cvvHint.style.display = 'none';
        cvv.parentElement.className = 'valid';
    }
    return cvvRegEx
}

//Payment validation function
function paymentIsValid(){
    if(payment.value === "credit-card"){
        payment.parentElement.classList.remove('not-valid');
        if(cardNumberIsValid() && zipCodeIsValid() && cvvIsValid()){
            return true
        } else{
            cardNumberIsValid()
            zipCodeIsValid()
            cvvIsValid()
            return false
        }
    }
    if (payment.value === 'select method'){
        payment.parentElement.classList.add('not-valid');
    } else {
        payment.parentElement.classList.remove('not-valid');
        return true
    }
}

//Event listener validating name, email, card, zipcode
formElement.addEventListener("submit", (e) =>{
    if (nameIsValid() && emailIsValid() && activitiesIsValid() && paymentIsValid()) {
        console.log ('Form has been submitted');
    } else {
        e.preventDefault()
        nameIsValid()
        emailIsValid()
        activitiesIsValid()
        paymentIsValid()
        console.log('Input details either incomplete or wrong');
    }

});


//      ACCESSIBILITY       //

let activitiescheckbox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < activitiescheckbox.length; i++) {
    activitiescheckbox[i].addEventListener('focus', (e) => {
     e.target.parentElement.className = 'focus';
    });

    activitiescheckbox[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    });
};   


