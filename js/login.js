const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


// on submit function for the form

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // function that checks if the inputs are empty
    checkInputs();
});





// check inputs function start

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    // check for email input start

    if(emailValue === ""){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    // check for email input end


    // check for password input start
    if(passwordValue === ""){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }

    // check for password input end
}

// check inputs function end


// set error function start

function setErrorFor(input, message){
    // get the input parent element

    const formCtl = input.parentElement;

    // use query selector to get the "small" element

    const small = formCtl.querySelector('small');


    // add dynamic error message to small element

    small.innerText = message;

    // add error class

    formCtl.className = "form-ctl error"
}

// set error function start


// set success function start

function setSuccessFor(input){
    const formCtl = input.parentElement;

    formCtl.className = "form-ctl success";
}

// set success function end



function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// toggle show password start


function showPassword(){
    if(password.type === "password"){
        password.type = "text";
        document.getElementById('eye').style.visibility = "hidden";
        document.getElementById('eye-slash').style.visibility = "visible";
    }else{
        password.type = "password"
        document.getElementById('eye').style.visibility = "visible";
         document.getElementById('eye-slash').style.visibility = "hidden";
    }
}

// toggle show password end