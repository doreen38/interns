$( document ).load( signin() );

function signin() {
    $.ajax({
        url: "./pages/signin.html",
        context: document.body
    }).done(function (res) {
        $("#main").html(res);
    })
}

function signup() {
    $.ajax({
        url: "./pages/signup.html",
        context: document.body
    }).done(function (res) {
        $("#main").html(res);
    })
}








// let msgEl = document.getElementById("msgEl")
// let pubnub = new PubNub({
//     publishKey: "pub-c-35736003-65ac-469c-a176-d1cfbe571e4a",
//     subscribeKey: "sub-c-d248b386-b5a2-11ec-96ff-fe86d55faee6",
//     uuid: "myFirstApp"
// })
// function sendMessage(text) {
//     console.log("Publish to a channel 'hello_world'");

//     pubnub.publish({
//         channel: "room1",
//         message: {
//             description: text
//         }
//     })
// }
// pubnub.addListener({
//     message: function (msg) {
//         msgEl.innerHTML += `<P>${msg.message.description}</P>`;
//     },
// })
// pubnub.subscribe({
//     channels: ["room1"]
// });
// function sendInput() {
//     sendMessage(document.getElementById("message").value);
//     document.getElementById("message").value = "";
// }
