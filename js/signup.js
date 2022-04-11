const form = document.getElementById("myform");
let email= document.getElementById("Input");
let password= document.getElementById("Password");
let error = document.getElementById("error_msg");
let error2 = document.getElementById("error_pw")
let ckecked = document.getElementById("check")
let ckeckmessage= document.getElementById("message")


form.addEventListener('submit', function (e) {
    e.preventDefault();
   
    validation();
})

function validation() {
    if (email.value.length < 9 ) {
        error.textContent = "please enter your"
       email.style.border ="1px solid red"; 
       error_msg.style.display = "block";
       email.focus();
       email ="";
       return false;
    }else{
        email.value.length > 8
        error.textContent = " ";
        email.style.border="1px solid green";
        error_msg.style.display = "block";
    }
    if (password.value.length < 6) {
        error2.textContent= "password must not be more than 6 digit"
        password.style.border ="1px solid red"; 
        error_pw.style.display = "block";
        password.focus();
        return false;
     }else{
        password.value.length > 5
        error2.textContent = " ";
        password.style.border="1px solid green";
        error_msg.style.display = "block";     
    }
     if (document.getElementById("check").checked) {
        // document.getElementById("checkmessage").textContent ="checked";
        return  true; 
    }else{
             message.textContent ="";
        document.getElementById("message").textContent = "Not checked";  
    }
}


