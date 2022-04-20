import {initializeApp} from "firebase/app";


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
const db = getFirestore();


