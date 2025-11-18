document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get all fields
    const name = document.getElementById("regName").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const age = document.getElementById("regAge").value.trim();
    const gender = document.getElementById("regGender").value;
    const goal = document.getElementById("regGoal").value;

    // Check if account already exists
    const existing = JSON.parse(localStorage.getItem("gymbro-user"));
    if (existing && existing.email === email) {
        showError("Account already exists. Try logging in.");
        return;
    }

    // Save user data in ONE storage key
    const userData = {
        name,
        username,
        email,
        password,
        age,
        gender,
        goal
    };

    localStorage.setItem("gymbro-user", JSON.stringify(userData));

    // Success
    showSuccess("Registration Successful!");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 900);
});


// UI: Premium-style error message
function showError(msg) {
    const box = document.querySelector(".auth-box");
    const error = document.createElement("div");
    error.className = "error-box";
    error.innerText = msg;
    box.prepend(error);
    setTimeout(() => error.remove(), 3000);
}

// UI: Premium-style success
function showSuccess(msg) {
    const box = document.querySelector(".auth-box");
    const success = document.createElement("div");
    success.className = "success-box";
    success.innerText = msg;
    box.prepend(success);
    setTimeout(() => success.remove(), 3000);
}
