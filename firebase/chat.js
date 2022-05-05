import {
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import {
    auth,
    Toast
} from "./firebase.js"


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
            subscribeKey: "sub-c-985a5edc-c78f-11ec-ad82-a6fdca316470",
            publishKey: "pub-c-93d9afad-053b-4fdc-bdc6-cf0b49556749",
            // logVerbosity: true,
            uuid: `${uid}`
        });


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