import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
  getDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const auth = window.firebaseAuth;
const db = window.firebaseDB;

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists()) return;

  const data = snap.data();

  document.getElementById("p-name").textContent = data.name;
  document.getElementById("p-username").textContent = data.username;
  document.getElementById("p-email").textContent = data.email;
  document.getElementById("p-age").textContent = data.age;
  document.getElementById("p-gender").textContent = data.gender;
  document.getElementById("p-goal").textContent = data.goal;

});

document.getElementById("logout-btn").onclick = () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
