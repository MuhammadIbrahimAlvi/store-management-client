console.log("login.js")

/* Login Page Functionality */
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("exampleDropdownFormEmail2");
const loginPassword = document.getElementById("exampleDropdownFormPassword2");
const loginSuccessAlert = document.getElementById("loginSuccess");
const loginFailureAlert = document.getElementById("loginFailure");

const verifyLoginEmailAndPassword = (email, password) => {
    if (email === "")
        throw new Error("Email can not be empty");
    if (password === "")
        throw new Error("Password can not be empty");
}

loginForm.addEventListener("submit", (e) => {
    console.log(loginForm)
    e.preventDefault();
    try {
        console.log("Started");
        verifyLoginEmailAndPassword(loginEmail.value, loginPassword.value); 
        loginSuccessAlert.style.display = "inline";
        loginSuccessAlert.innerHTML = "Successful"
        console.log("Successful");
    } catch (ex) {
        console.log("Inside Catch Statement");
        loginFailureAlert.style.display = "inline";
        loginFailureAlert.innerHTML = ex.message;
        console.log(ex.message);
        validationError(ex);
        console.log(ex.message);
        setTimeout(()=>{
            loginFailureAlert.style.display = "none";
        }, 2000);
    }
});