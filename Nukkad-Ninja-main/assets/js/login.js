
// ***************************************************
// Toggle login/signup forms
function toggleForm(form) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (form === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  } else {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
}

// Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyCF3ruScakSs-qpf4NxSiqBQlZtLS6IATA",
      authDomain: "nukkad-ninja.firebaseapp.com",
      projectId: "nukkad-ninja",
      storageBucket: "nukkad-ninja.firebasestorage.app",
      messagingSenderId: "978499163699",
      appId: "1:978499163699:web:af3c3549d161076bc3b546",
      measurementId: "G-ZZBQFCNDCX"
    };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCred) => {
      alert("Login successful!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html"; // Redirect after login
    })
    .catch((err) => alert("Error: " + err.message));
});

// Handle signup
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const pass = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;

  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  auth.createUserWithEmailAndPassword(email, pass)
    .then((userCred) => {
      return userCred.user.updateProfile({ displayName: name });
    })
    .then(() => {
      alert("Signup successful!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    })
    .catch((err) => alert("Error: " + err.message));
});

// Forgot password
document.getElementById("forgot-password").addEventListener("click", function (e) {
  e.preventDefault();
  const email = prompt("Enter your email to reset password:");
  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => alert("Password reset email sent!"))
      .catch((err) => alert("Error: " + err.message));
  }
});

// Google login/signup
function googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("Google login successful!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    })
    .catch((err) => alert("Error: " + err.message));
}
