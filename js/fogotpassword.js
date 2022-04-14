const form = document.getElementById("myform");
let email= document.getElementById("floatingInput");




form.addEventListener('click', function(e) {
    e.preventDefault();
 
    
    validateemail();
})

  function validateemail() {
    const form = document.getElementById("myform");
     let email= document.getElementById("floatingInput").value;
     let text = document.getElementById("text")
     let pattern = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

     if (email.match(pattern)) {
        form.classList.add("vaild");
        form.classList.remove("invaild");
        text.innerHTML = "your Email Address is Vaild";
        // text.style.border ="1px solid green";
        text.style.color =  "green";
       
     }else{
       
       form.classList.remove("valid");
       form.classList.add("invaild");
       text.innerHTML="Please enter  Valid Email Address";
       text.style.color = "red";
       
     }
      
     
  }



