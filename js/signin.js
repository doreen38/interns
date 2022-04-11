// Register form
const form = document.getElementById("myForm");
let username= document.getElementById("username");
let password= document.getElementById("password");
let email= document.getElementById("email");
let check= document.getElementById('flexCheckDefault');
let confirmPassword = document.getElementById("confirmpassword");
let ckeckmessage= document.getElementById("message")


form.addEventListener('submit', function(e) { 
  e.preventDefault();
    
    checkValidation();
})



function checkValidation() {
    let usernameValue = username.value.trim();
     let emailValue = email.value
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();
if (usernameValue === '') {
      setError(username, " user name is required");
    }else if (usernameValue.length < 5 || username.value.length > 15) {
      setError(username, 'name must be me 5 or 15 character');
    }else{
      setSuccess(username);
  }
 if (emailValue === '') {
    setError(email, "email is required");
  }else if (!isValidEmail(email.value)) {
    setError(email ,'provide a valid email address' );
  }else{
    setSuccess(email);
  }
  if (passwordValue === '') {
    setError(password, 'password can not be empty');
  }else if (passwordValue.length < 8) {
    setError(password,'password must be at least * character')
  }else{
    setSuccess(password);
  }
  if (confirmPasswordValue ===  '') {
    setError(confirmPassword, 'Please confirm your password');
  }else if (confirmPasswordValue !== passwordValue) {
    setError(password,'password not completed')
  }else{
  setSuccess(confirmPassword);
  } 
  if (document.getElementById("flexCheckDefault").check) {
    // document.getElementById("checkmessage").textContent ="check";
    return  true; 
}else{
         message.textContent ="";
    document.getElementById("message").textContent = "Not checked";  
}

}
// error validation
function setError(element, errorMessage) {
let parent = element.parentElement
if (parent.classList.contains('success')) {
  parent.classList.remove('success');
}
parent.classList.add('error');
let paragraph = parent.querySelector("small");
paragraph.textContent = errorMessage;
}
// success check
 function setSuccess(element){
  let parent = element.parentElement
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
 }
//  validation of email address
function isValidEmail (email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}






