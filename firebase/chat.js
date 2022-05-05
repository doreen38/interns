import {
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import {
    auth,
    Toast
} from "./firebase.js";


import {
    subKey,
    pubKey
} from "../utills/Keys.js"


onAuthStateChanged(auth, (user) => {
    const name = document.querySelector('#displayName');
    if (user !== null) {
        const displayName = user.displayName;
        const uid = user.uid;

        const send = document.getElementById('sendbtn');
        const input = document.getElementById('typing');
        const msgEl = document.querySelector('#messages');


        name.textContent = displayName;
        name.textContent.toUpperCase();


        const pubnub = new PubNub({
            subscribeKey: subKey,
            publishKey: pubKey,
            // logVerbosity: true,
            uuid: `${uid}`
        });

        // send message
        function sendMessage(txt) {

            pubnub.publish({
                channel: "my_channel",
                message: {
                    description: txt,
                    sender: displayName
                }
            })
        }

        pubnub.addListener({
            message: function (msg) {
                const div = document.createElement("div");
                div.innerHTML += `
                    <div class="highlight rounded-pill p-2 w-75 d-flex align-items-center my-2">
                        <h5 class="fw-bold text-dark m-0">${msg.message.sender} </h5>
                        <p class="text-light m-0 ms-3"> ${msg.message.description}</p>
                    </div>
                `;
                msgEl.appendChild(div);
            }
        });

        // subscrbe to channel
        pubnub.subscribe({
            channels: ["my_channel"],
        });

        send.addEventListener('click', (e) => {
            if (input.value == '') {
                return;
            }
            sendMessage(input.value);
            input.value = "";
        });


        // send files

        const filebtn = document.querySelector('input[file]');

        filebtn?.addEventListener('change', async () => {
            const file = input.files[0];

            const result = await pubnub.sendFile({
                channel: 'my_channel',
                file: file,
            });

            sendMessage(result);
        });

        // create channel
        function createChannel() {
            const channels = document.getElementById('channels');
            const channel = document.createElement('div');
            channel.innerHTML = `
                <div class="col-12 highlight my-1 d-flex justify-content-between">
                    <p class="m-0 p-2"><b>Group Name</b></p>
                    <button class="btn btn-transparent text-black fw-bold d-flex align-items-center justify-content-center m-0">
                        <i class="bx bx-dots-vertical-rounded h4 m-0"></i>
                    </button>
                </div>
            `

            channels.appendChild(channel);

        }

        const channelbtn = document.getElementById('channelbtn');
        channelbtn.addEventListener('click', (e) => {
            createChannel();
        });

    } else {
        return;
    }
})



// logout user
function logout() {
    signOut(auth)
        .then(() => {
            Toast.fire({
                icon: "info",
                title: "User Loged Out"
            })
                .then(() => {
                    window.location.href = "../index.html"
                })
        })
        .catch((error) => {
            Toast.fire({
                icon: 'error',
                title: error.message
            })
        });
}

let logoutbtn = document.querySelector("#logout")

logoutbtn.addEventListener("click", (e) => {
    logout()
})


