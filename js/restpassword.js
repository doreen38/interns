const form = document.getElementById("myform");
let createpw = document.getElementById("password");
let conPassword= document.getElementById("confirmPassword");
let btn= document.getElementById("button");
let show = document.querySelector('#togglePassword');

show.addEventListener('click', function(e) {
   e.preventDefault();
   if ((createpw.type === "password") &&(conPassword.type === "password")) {
     show.classList.replace("bi-eye-slash", "bi-eye")
     createpw.type ="text";
     conPassword.type = "text";
   }else{
    createpw.type ="password";
     conPassword.type = "password";
     show.classList.replace("bi-eye", "bi-eye-slash");
   }
    console.log('form');

});



function createpwd() {
  let inputValue = createpw.value.trim();
  console.log("you");
  if (inputValue.length >=8) {
    conPassword.removeAttribute("disabled");
    btn.removeAttribute("disabled");
    btn.className.add("active")
  }else{
    conPassword.setAttribute("disabled", true);
    btn.setAttribute("disabled", true); 
    btn.claasName.remove("actve");
  } 
}
// createpw.addEventListener("input", function() {
//   let inputValue = createpw.value.trim();
//   console.log("you");
//   if (inputValue.length >=8) {
//     conPassword.removeAttribute("disabled");
//     btn.removeAttribute("disabled");
//     // btn.className.add("active")
//   }else{
//     conPassword.setAttribute("disabled", true);
//     btn.setAttribute("disabled", true); 
//     // btn.claasName.remove("actve");
//   }
// })

// show.addEventListener('click', function() {
//   if (confirmPassword.className === "form-control") {
//     confirmPassword.setAttribute('type', 'text');
//     show.className = 'bi bi-eye';
//     show.className = '';

//   }else{
//     confirmPassword.setAttribute('type', 'password')
//     show.className = 'bi bi-eye-slash';
//     confirmPassword.className= 'form-control';
//   }         
// });

form.addEventListener('submit', function(e) {
   e.preventDefault();
  console.log("hello");
  validation();
})
function validation() {
  let createpwValue =createpw.value.trim();
  let conPasswordValue = conPassword.value.trim();
  if (createpwValue === '') {
    setError(createpw, 'password can not be empty')
  }else if (createpwValue.length < 8) {
     setError(createpw, 'password must be at least  8 * character');
  }else{
    setSuccess(createpw)
  }
  if (conPasswordValue ===  '') {
    setError(conPassword, 'Please confirm your password');
  }else if (conPasswordValue !== createpwValue) {
    setError(conPassword,'password didnt matched')
  }else{
  setSuccess(conPassword);
  }
  
}
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