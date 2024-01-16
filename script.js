var users = [
    { email: "calogeroraia3@gmail.com", name: "Calogero", contatore: 1 },
];

var isLoggedIn = false;
var currentUser = null;
var resetLogin = false;

document.getElementById("email").addEventListener("input", function () {
    var loginButton = document.querySelector("#loginForm button");
    loginButton.disabled = !this.checkValidity();
});

function login() {
    var emailInput = document.getElementById("email");
    var loginForm = document.getElementById("loginForm");
    var loginContent = document.getElementById("loginContent");
    var welcomeContent = document.getElementById("welcomeContent");

    var enteredEmail = emailInput.value.trim().toLowerCase();
    currentUser = users.find(user => user.email === enteredEmail);

    if (currentUser) {
        loginContent.style.display = "none";
        welcomeContent.style.display = "block";

        var welcomeMessage = document.getElementById("welcomeMessage");
        if (currentUser.contatore > 1) {
            welcomeMessage.innerText = "Bentornato " + currentUser.name;
        } else {
            welcomeMessage.innerText = "Benvenuto " + currentUser.name;
        }

        isLoggedIn = true;
        currentUser.contatore++; 
    } else {
        alert("Email non valida. Inserisci l'indirizzo email consentito.");
    }
}

function logout() {
    var loginContent = document.getElementById("loginContent");
    var welcomeContent = document.getElementById("welcomeContent");

    isLoggedIn = false;
    
    if (resetLogin) {
        resetLoginForm();
        resetLogin = false;
    } else {
        loginContent.style.display = "block";
        welcomeContent.style.display = "none";
        resetLoginForm();
    }
}

function resetLoginForm() {
    document.getElementById("loginForm").reset();
    document.getElementById("email").disabled = false;
    document.querySelector("#loginForm button").disabled = true;

    document.getElementById("welcomeContent").style.display = "none";
    document.getElementById("loginContent").style.display = "block";
}