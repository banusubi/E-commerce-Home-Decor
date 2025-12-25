function showLogin() {
    document.getElementById("loginBox").classList.remove("hidden");
    document.getElementById("regBox").classList.add("hidden");
    document.getElementById("forgetBox").classList.add("hidden");
}

function showRegister() {
    document.getElementById("regBox").classList.remove("hidden");
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("forgetBox").classList.add("hidden");
}

function showForget() {
    document.getElementById("forgetBox").classList.remove("hidden");
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("regBox").classList.add("hidden");
}


// ==========================
// REGISTER
// ==========================
function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (name === "" || email === "" || pass === "") {
        alert("❗ Please fill all fields");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("✅ Registration Successful! Please Login.");
    showLogin();
}



// ==========================
// LOGIN
// ==========================
function login() {
    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPass");

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    if (!savedEmail) {
        alert("❗ No account found. Please Register first!");
        return;
    }

    if (email.trim() === "" || pass.trim() === "") {
        alert("❗ Please enter Email & Password");
        return;
    }

    if (email === savedEmail && pass === savedPass) {
        alert("✅ Login Successful!");

        // store login status
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", savedEmail);

        window.location.href = "index.html";
    } 
    else {
        alert("❌ Incorrect Email or Password");
    }
}



// ==========================
// RESET PASSWORD
// ==========================
function resetPass() {
    let np = document.getElementById("newPass").value;

    if (np === "") {
        alert("❗ Please enter a new password");
        return;
    }

    localStorage.setItem("userPass", np);

    alert("✅ Password Reset Successfully!");
    showLogin();
}
