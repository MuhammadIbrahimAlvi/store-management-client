console.log("app.js");
/* SignUp Form Handling for the signup.html page */
const signUpForm = document.getElementById("signUpForm");
const email = document.getElementById("inputEmail4");
const password = document.getElementById("inputPassword4");
const confirmPassword = document.getElementById("inputconfirmPassword4");
const address = document.getElementById("inputAddress");
const confirmAddress = document.getElementById("inputAddress2");
const city = document.getElementById("inputCity");
const zip = document.getElementById("inputZip");
const errorAlert = document.getElementById("errorAlert");
const userName = document.getElementById("userNameField");


function validationError(error) {
    console.log(error);
    errorAlert.innerHTML = error.message;
}

function myStopFunction() {
    errorAlert.style.direction = "none";
}

signUpForm.addEventListener("submit", (e) => {

    e.preventDefault();

    try {
        console.log("Started submit function of signUp form");

        verifyIfEmpty(userName.value, email.value, password.value, confirmAddress.value,
            address.value, confirmAddress.value, city.value, zip.value);

        if (validateEmailPattern(email.value)) {
            throw new Error("Email is not in correct format");
        }

        const signUpDto = {
            "userName": userName,
            "email": email.value,
            "password": password.value,
            "address": address.value,
            "city": city.value,
            "zip": zip.value
        }

        console.log("Exiting submit function of signUp form");
    } catch (ex) {

        console.log("Inside Catch Statment")
        errorAlert.style.display = "inline";
        console.log(ex.message)
        validationError(ex);
        console.log(ex.message);

    }
}
)

const verifyIfEmpty = (userName, email, password, confirmPassword, address, confirmAddress, city, zip) => {
    console.log("Entered verifyIfEmpty()")
    if(userName === ""){
        console.error("Username is empty");
        throw new Error("Username can not be empty");
    }
    if (email === "") {
        console.error("Email is empty");
        throw new Error("Email can not be empty");
    }
    if (password === "") {
        console.error("Password is empty");
        throw new Error("Password can not be empty");
    }
    if (confirmPassword === "") {
        console.error("ConfirmPassword is empty");

        throw new Error("Confirm Password can not be empty");
    } if (document.getElementById("inputPassword4") != document.getElementById("inputconfirmPassword4")) {
        console.log(password, confirmPassword)
        console.log("Password ==>", password, "ConfirmPassword ==>", confirmPassword);
        console.error("Password and ConfirmPassword doses not match");

        throw new Error("ConfirmPassword Does not matches Password");
    }
    if (address === "") {
        console.error("Address is empty");

        throw new Error("Address can not be empty");
    }

    if (confirmAddress === "") {
        console.error("ConfirmAddress is empty");

        throw new Error("Confirm Address can not be empty");
    }
    if (city === "") {
        console.error("City is empty");

        throw new Error("City can not be empty");
    }
    if (zip === "") {
        console.error("Zip is empty");

        throw new Error("Zip code can not be empty");
    }
}

const validateEmailPattern = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json" 
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }