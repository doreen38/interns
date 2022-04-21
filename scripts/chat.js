let send = document.getElementById("sendbtn");
let msgEl = document.getElementById("content");
let disName = document.getElementById("displayname");
let input = document.getElementById("typing");


let open = document.getElementById("my-menu");
open.addEventListener("click", function(e){
    openSlide();
})
let close = document.getElementById("close");
close.addEventListener("click", function(e){
    closeSlide();
})


function openSlide(){
    let sidebar = document.getElementById("my-bar");
    sidebar.classList.remove("visually-hidden");
    let holder = document.getElementById("holder");
    holder.style.marginLeft = "340px";
    let input = document.getElementById("form");
    input.style.marginLeft = "340px";
}
function closeSlide(){
    let sidebar = document.getElementById("my-bar");
    sidebar.classList.add("visually-hidden");
    let holder = document.getElementById("holder");
    holder.style.marginLeft = "-10px";
    let input = document.getElementById("form");
    input.style.marginLeft = "-10px";
}

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
        disName.textContent = msg.message.sender;
    },
})
pubnub.subscribe({
    channels: ["interns"]
});


send.addEventListener("click", e => {
    console.log(pubnub);
    if(input.value == ''){
        return;
    }
    sendMessage(input.value);
    input.value = "";
});

