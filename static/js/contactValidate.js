// Clearing errrors
function clearErrors(){

    errors = document.getElementsByClassName("error");
    for(let item of errors)
    {
        item.innerHTML = "";
        console.log(item);
    } 
}

// set errors inside tags of id

function setError(div_id, error){
    // id = div id
    element = document.getElementById(div_id)
    element.getElementsByClassName("error")[0].innerHTML = error;
}


function validateForm(){
    var returnVal = true;
    clearErrors();

    // Taking data from form and validating the data
    // First Form then name set in input tag

    // Managing First Name
    var Fname = document.forms['contactForm']["firstName"].value;
    if (Fname.length<3){
        setError("fname", "*First name is too short");
        returnVal = false;
    }
    if (Fname.length>10){
        setError("fname", "*First name is too long");
        returnVal = false;
    }

    // Last Name Validation
    var Lname = document.forms['contactForm']["lastName"].value;
    if (Lname.length<3){
        setError("lname", "*Last name is too short");
        returnVal = false;
    }
    if (Lname.length>10){
        setError("lname", "*Last name is too long");
        returnVal = false;
    }

    // Email Validation
    var email = document.forms['contactForm']["email"].value;
    if (email.length>50){
        setError("email", "*Enter a valid email address");
        returnVal = false;
    }

    // phone number validation
    var phone = document.forms['contactForm']["phone"].value;
    if (phone.length<10){
        setError("phone", "*Phone number must contains 11 digits.");
        returnVal = false;
    }
    if(phone.length>11){
        setError("phone", "*Phone number can not be greater than 11 digits.");
        returnVal = false;
    }

    var mess = document.forms['contactForm']['desc'].value;
    if (mess.length<30){
        setError("mess", "*Message cannot be less than 30 chracters!");
        returnVal = false;
    }
    return returnVal;
}