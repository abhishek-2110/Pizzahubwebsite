
function ok() {
    var email = document.forms["loginForm"]["email"].value;
    var pass = document.forms["loginForm"]["password"].value;
    var error = document.getElementById("errorMessage");
    var trueinfo = false;
 
    if (email == "abhi@gmail.com" && pass == "a12345") {
        trueinfo = true;
    }
 
    if (email == "arsh@op.ac" && pass == "a45678") {
        trueinfo = true;
    }
 
    if (trueinfo) {
        window.location.href = "pizzahub.html"; // Redirect to shopping page
    } else {
        error.innerHTML = "Incorrect email or password.";
    }
 
    return false;
}
 