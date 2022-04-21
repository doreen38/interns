function login() {
    if (!$("#email").val() && !$("#password").val()) {
        Swal.fire({
            icon: "info",
            text: "All Fields Must Be Filled",
            timer: 1000
        })
        return;
    }
    window.location.href = "./pages/chat.html";
}
let uuid = document.getElementById("username");

function createUser() {
    var pubnub = new PubNub({
        publishKey: "pub-c-17e22ec5-b9e3-4b38-900e-fb2f86d81b82",
        subscribeKey: "sub-c-bb554d48-bbf5-11ec-b9a7-7ec486788b75",
        uuid: `${uuid.value}`
    })

    console.log(pubnub);

    pubnub.createUser()
}

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



