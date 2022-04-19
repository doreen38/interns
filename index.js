

function signin() {
    $("#myForm").addClass("d-flex");
    $("#myForm").removeClass("d-none");
    $("#myForm1").removeClass("d-flex");
    $("#myForm1").addClass("d-none");
}

function signup() {
    $("#myForm1").addClass("d-flex");
    $("#myForm1").removeClass("d-none");
    $("#myForm").removeClass("d-flex");
    $("#myForm").addClass("d-none");
}


function login() {
    if(!$("#email").val() && !$("#password").val()){
        alert("Please fill all the fields");
        return;
    }
    window.location.href = "./pages/chat.html";
}
