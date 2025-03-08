

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCF_mheuaXU4cM-XjJAjx841NrcZj5e6yo",
    authDomain: "tesla-571c4.firebaseapp.com",
    projectId: "tesla-571c4",
    storageBucket: "tesla-571c4.firebasestorage.app",
    messagingSenderId: "929722360498",
    appId: "1:929722360498:web:037438ebd34f4a9a4edfab",
    measurementId: "G-KTVYS0WS3S"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getbtn = document.getElementById('btn')
getbtn.addEventListener('click',function(){
    let email = document.getElementById('semail').value
    let password = document.getElementById('spass').value


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
  });

})
