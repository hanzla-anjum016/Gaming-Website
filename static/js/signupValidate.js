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
    var Fname = document.forms['signupForm']["firstName"].value;
    if (Fname.length<3){
        setError("fname", "*First name is too short");
        returnVal = false;
    }
    if (Fname.length>10){
        setError("fname", "*First name is too long");
        returnVal = false;
    }

    // Last Name Validation
    var Lname = document.forms['signupForm']["lastName"].value;
    if (Lname.length<3){
        setError("lname", "*Last name is too short");
        returnVal = false;
    }
    if (Lname.length>10){
        setError("lname", "*Last name is too long");
        returnVal = false;
    }

    // Username Validation
    var Uname = document.forms['signupForm']['userName'].value;
    if (Uname.length<6){
        setError("uname", "*Username cannot be less then 6 chracters!");
        returnVal = false;
    }
    if (Uname.length>30){
        setError("uname", "*Username cannot be greater then 30 chracters!");
        returnVal = false;
    }

    // Email Validation
    var email = document.forms['signupForm']["email"].value;
    if (email.length>50){
        setError("email", "*Enter a valid email address");
        returnVal = false;
    }

    // phone number validation
    var phone = document.forms['signupForm']["phone"].value;
    if (phone.length<10){
        setError("phone", "*Phone number must contains 11 digits.");
        returnVal = false;
    }
    if(phone.length>11){
        setError("phone", "*Phone number can not be greater than 11 digits.");
        returnVal = false;
    }

    // matching password and confirm password
    var password = document.forms['signupForm']["password1"].value;
    var confirmPass = document.forms['signupForm']["password2"].value;
    if (password!=confirmPass){
        setError("pwd", "*Password does not match");
        returnVal = false;
    }
    if (password.length<8){
        setError("pwd", "*Password can not be less then 8!");
        returnVal = false;
    }
    if (confirmPass.length<8){
        setError("cpwd", "*Password can not be less then 8!");
        returnVal = false;
    }

    
    return returnVal;
}
// Validating Otp 
var otp = document.forms['loginForm']["otp"].value;
if (otp.length<6){
    setError("otp", "OTP cannot be less than 6 digits!");
    returnVal = false;
}
if (otp.length>6){
    setError("otp", "OTP cannot be greater than 6 digits!");
    returnVal = false;
}