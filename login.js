// login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "profile.html";
        })
        .catch((err) => {
            alert(err.message);
        });
});
