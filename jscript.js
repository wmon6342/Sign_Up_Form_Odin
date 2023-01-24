const passwrd = document.getElementById('password');
const confirmpasswrd = document.getElementById("confirmpwd");

function verifyPassword(){
    if(passwrd !== confirmpasswrd) {
        passwrd.setCustomValidity('its...not...a match, darling. I believe in you');
    } else {
        passwrd.setCustomValidity('');
    }
}

