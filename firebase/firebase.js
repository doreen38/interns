import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANiF-HPk8rNhB-dDiX5hAzEIXIBrAUf9s",
  authDomain: "chat-app-b34c2.firebaseapp.com",
  databaseURL: "https://chat-app-b34c2-default-rtdb.firebaseio.com",
  projectId: "chat-app-b34c2",
  storageBucket: "chat-app-b34c2.appspot.com",
  messagingSenderId: "531336970501",
  appId: "1:531336970501:web:ff50b44e512078ad6ff76c"
};

//   initialize firebase app
initializeApp(firebaseConfig);

// initialize services
const auth = getAuth();

// Sweet alert toast  
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


// create user
const form = document.querySelector("#LoginForm");

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = form.email.value;
  const password = form.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      Toast.fire({
        icon: "success",
        title: "User Created",
      }).then(() => {
        console.log("user created", cred.user)
        window.location.href = "../interns/pages/chat.html"
      })

    })
    .catch(err => console.log(err.message));
})




// // login user
// const login = document.querySelector(".loginform")

// login.addEventListener("submit", () => {
//   const email = login.email.value;
//   const password = login.password.value

//   signInWithEmailAndPassword(auth, email, password)
//   .then((cred) => {
//     alert("User Loged In", cred.user)
//     window.location.href = "../pages/chat.html";
//   })
//   .catch(err => console.log(err.message));
// })

// logout user
function logout() {
  signOut(auth)
    .then(() => {
      alert('User logout');
    })
    .catch(err => console.log(err.message));
}




