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
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

        name.textContent = displayName;
        name.textContent.toUpperCase();
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

let open = document.getElementById("my-menu");

open?.addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("active")
})

let logoutbtn = document.querySelector("#logout")

logoutbtn.addEventListener("click", (e) => {
    logout()
})