function clearErrors(){

    errors = document.getElementsByClassName("error");
    for(let item of errors)
    {
        item.innerHTML = "";
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

    // Username Validation
    var Uname = document.forms['loginForm']['loginUsername'].value;
    if (Uname.length<6){
        setError("uname", "*Username cannot be less than 6 chracters!");
        returnVal = false;
    }
    if (Uname.length>30){
        setError("uname", "*Username cannot be greater than 30 chracters!");
        returnVal = false;
    }

    // matching password and confirm password
    var password1 = document.forms['loginForm']["login-Password"].value;
    if (password1.length<8){
        setError("pwd", "*Password can not be less than 8 digits!");
        console.log(password1);
        returnVal = false;
    }
    return returnVal;
}

