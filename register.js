// register.js
import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("regEmail").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const goal = document.getElementById("goal").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  try {
    // Create account
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // Update display name
    await updateProfile(user, { displayName: fullName });

    // Save additional user data
    await setDoc(doc(db, "users", user.uid), {
      name: fullName,
      username: username,
      email: email,
      age: age,
      gender: gender,
      goal: goal
    });

    alert("Registration successful!");
    window.location.href = "login.html";

  } catch (err) {
    alert(err.message);
  }
});
