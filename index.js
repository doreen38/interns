$(document).load(
    signin()
)

function signin() {
    $.ajax({
        url: "./pages/auth/signin.html",
        context: document.body
    }).done(function (res) {
        $("#main").html(res);
    });
}

function signup() {
    $.ajax({
        url: "./pages/auth/signup.html",
        context: document.body
    }).done(function (res) {
        $("#main").html(res);
    });
}

$("#login").click(function (e) { 
    e.preventDefault();
    console.log("hello");
});




// function letsGo() {
//     // Update this block with your publish/subscribe keys
//     pubnub = new PubNub({
//         publishKey: "pub-c-17e22ec5-b9e3-4b38-900e-fb2f86d81b82",
//         subscribeKey: "sub-c-bb554d48-bbf5-11ec-b9a7-7ec486788b75",
//         uuid: "myUniqueUUID"
//     })

//     pubnub.addListener({
//         status: function (statusEvent) {
//             if (statusEvent.category === "PNConnectedCategory") {
//                 publishSampleMessage();
//             }
//         },
//         message: function (msg) {
//             console.log(msg.message.title);
//             console.log(msg.message.description);
//         },
//         presence: function (presenceEvent) {
//             // This is where you handle presence. Not important for now :)
//         }
//     });
// };

// function publishSampleMessage() {
//     console.log("Publish to a channel 'hello_world'");

//     // With the right payload, you can publish a message, add a reaction to a message,
//     // send a push notification, or send a small payload called a signal.
//     var publishPayload = {
//         channel: "hello_world",
//         message: {
//             title: "greeting",
//             description: "This is my first message!"
//         }
//     }
//     pubnub.publish(publishPayload, function (status, response) {
//         console.log(status, response);
//     })
// }

// pubnub.subscribe({
//     channels: ["hello_world"]
// });

// letsGo()



