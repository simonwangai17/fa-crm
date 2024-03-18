function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
//stimulate login check
    var isCorrect = validateLogin(username, password);

    if (isCorrect) {
        //redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        //alert incorrect
        alert("Incorrect username or password. Please try again.");
    }
}
//function server side to stimulate login validation
function validateLogin(username, password) {
    if (username === "correctUsername" && password === "correctPassword") {
        return true;
    } else {
        return false;
    }
}

//stimulate loader
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
  });