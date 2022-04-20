let send = document.getElementById("sendbtn");
let msgEl = document.getElementById("content");

var pubnub = new PubNub({
    publishKey: "pub-c-17e22ec5-b9e3-4b38-900e-fb2f86d81b82",
    subscribeKey: "sub-c-bb554d48-bbf5-11ec-b9a7-7ec486788b75",
    uuid: "internsChatApp"
})

function sendMessage(txt) {

    pubnub.publish({
        channel: "interns",
        message: {
            description: txt,
            sender: pubnub.getUUID()
        }
    })
}
pubnub.addListener({
    message: function (msg) {
        msgEl.innerHTML += `
        <div class="message-content bg-info">
            <div class="message-sender">${msg.message.sender}</div>
                <p>${msg.message.description}</p>
            </div>
        `;
    },
})
pubnub.subscribe({
    channels: ["interns"]
});


send.addEventListener("click", e => {
    console.log(pubnub);
    sendMessage(document.getElementById("typing").value);
    document.getElementById("typing").value = "";
});
