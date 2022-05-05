import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';


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
const app = initializeApp(firebaseConfig);

// initialize services
const auth = getAuth(app);

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
const signupForm = document.querySelector("#signup");

signupForm?.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirmPassword = signupForm.confirmpassword.value;

  if (email === '' && password === '') {

    Toast.fire({
      icon: 'error',
      title: 'All fields must be filled'
    })
  } else if (password !== confirmPassword) {
    Toast.fire({
      icon: 'error',
      title: 'Password does not match'
    })
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(function (cred) {
        console.log(cred.user);
        return updateProfile(cred.user, {
          displayName: username
        })
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Account created successfully'
            })
              .then(() => {
                window.location.href = "../pages/chat.html";
                signupForm.reset();
              })
          })
      }).catch((error) => {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      });
  }
})

// login user
const loginForm = document.querySelector("#login");

loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      Toast.fire({
        icon: "success",
        title: "User Loged In"
      })
        .then(() => {
          window.location.href = "./pages/chat.html";
        })
    })
    .catch((error) => {
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    });
})



export { auth, Toast }
