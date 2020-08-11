const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

// On submit function

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    checkInputs();
});

// Function that checks value of inputs
function checkInputs(){
    // check value of form inputs

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    // first name
    if (firstNameValue === ""){
        // show erro message
        // add error class

        setErrorFor(firstName, 'First name cannot be blank');
    }else{
        setSuccessFor(firstName);
    }


    // last name

    if (lastNameValue === ""){
        // show erro message
        // add error class

        setErrorFor(lastName, 'Last name cannot be blank');
    }else{
        setSuccessFor(lastName);
    }

    // email

    if (emailValue === ""){
        // show erro message
        // add error class

        setErrorFor(email, 'Last name cannot be blank');
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    // phone number

    if (phoneNumberValue === ""){
        // show erro message
        // add error class

        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    }else{
        setSuccessFor(phoneNumber);
    }


    if (passwordValue === ""){
        // show erro message
        // add error class

        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }


    if (passwordCheckValue === ""){
        // show erro message
        // add error class

        setErrorFor(passwordCheck, 'Password check cannot be blank');
    }else{
        setSuccessFor(passwordCheck);
    }

}

// Create error message function start
function setErrorFor(input, message){
    // created a variable for the parent element of the inputs ".form-ctl"
    const formCtl = input.parentElement;

    // created a variable for the "small" element

    const small = formCtl.querySelector('small');


    // add dynamic error message

    small.innerText = message;

    // add error class

    formCtl.className = 'form-ctl error';
}

// Create error message function end


// create success message function start

function setSuccessFor(input){
    const formCtl = input.parentElement;

    formCtl.className = 'form-ctl success';
}

// create success message function end



// Validate email function start
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Validate email function end



// check for strong password function start

password.onkeyup = function(){
    // validate for lowercase letter
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(password.value.match(passw)){
        setSuccessFor(password);
    }else{
        setErrorFor(password, 'Password must contain at least one lowercase letter, one uppercase lette, a number and a minimum of six characters');
    }

}

// check for strong password function end


// check for password value match function start

function checkPass(){
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();
    
    if (passwordValue === passwordCheckValue){
        setSuccessFor(password);
        setSuccessFor(passwordCheck);
    }else{
        setErrorFor(password, 'Password does not match');
        setErrorFor(passwordCheck, 'Password does not match');
    }
}

// check for password value match function end


// show password value function start
// password input

function showPassword(){

    if(password.type === "password"){
        password.type = "text";
         document.getElementById('eye').style.visibility = "hidden";
         document.getElementById('eye-slash').style.visibility = "visible";

    }else{
        password.type = "password";
        document.getElementById('eye').style.visibility = "visible";
         document.getElementById('eye-slash').style.visibility = "hidden";

    }
}



// show password value function start
// password Check input

// function showPassword(){

//     if(passwordCheck.type === "password"){
//         passwordCheck.type = "text";
//          document.getElementById('eye').style.visibility = "hidden";
//          document.getElementById('eye-slash').style.visibility = "visible";

//     }else{
//         passwordCheck.type = "password";
//         document.getElementById('eye').style.visibility = "visible";
//          document.getElementById('eye-slash').style.visibility = "hidden";

//     }
// }
