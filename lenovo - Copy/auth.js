// Sign Up Function
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (localStorage.getItem(email)) {
        alert("User already exists! Please sign in.");
    } else {
        let userData = { name, email, password };
        localStorage.setItem(email, JSON.stringify(userData)); // Store user in localStorage
        alert("Sign Up Successful! Please Sign In.");
    }

    document.getElementById("signup-form").reset();
});

// Sign In Function
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem(email);

    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert("Login Successful!");
            localStorage.setItem("loggedInUser", email); // Store session
            window.location.replace("index.html"); // Redirect to index.html
        } else {
            alert("Incorrect Password!");
        }
    } else {
        alert("User does not exist! Please Sign Up.");
    }

    document.getElementById("login-form").reset();
});

// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out Successfully!");
    window.location.replace("login.html"); // Redirect to login.html
}

// Show/Hide Logout Button
document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let logoutButton = document.getElementById("logout-btn");

    if (loggedInUser) {
        if (logoutButton) logoutButton.style.display = "block";
    } else {
        if (logoutButton) logoutButton.style.display = "none";
    }
 });
// document.addEventListener("DOMContentLoaded", function () {
//     let loggedInUser = localStorage.getItem("loggedInUser");

//     // If user is not logged in, redirect to login page
//     if (!loggedInUser) {
//         window.location.href = "login.html";
//     }
// });

// // Logout function
// document.getElementById("logout-btn").addEventListener("click", function () {
//     localStorage.removeItem("loggedInUser"); // Clear login session
//     alert("Logged Out Successfully!");
//     window.location.href = "login.html"; // Redirect to login page
// });