<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login • GymBRO</title>
  <link rel="stylesheet" href="stylehome.css" />
</head>
<script src="login.js"></script>

<body>
  <div class="theme-toggle" onclick="toggleTheme()">☾</div>

  <section class="auth-page">

  <video class="bg-video" autoplay muted loop playsinline>
    <source src="gym-bg.mp4" type="video/mp4">
  </video>

  <!-- DARK LAYER ON TOP OF VIDEO -->
  <div class="video-overlay"></div>

  <div class="auth-box">
    <h2>Welcome Back</h2>
    <p>Login to continue</p>

    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button class="auth-btn" type="submit">Login</button>
    </form>

    <a href="register.html" class="switch-link">Don't have an account? Register</a>
  </div>
</section>


<script>
// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

// Toggle Theme + Save preference
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}
</script>

</body>
</html>
