// functions
// setting user data to ls
const userDataToLocalStorage = (phone, email, password) => {
    // creating data frame
    let temp_user = {
        phone, email, password
    };
    // setting to LS
    localStorage.setItem("user_data", JSON.stringify(temp_user));
};

// opening home page 
const toNextPage = () => {
    window.open('');
};

const showPassword = (selector) => {
    const passwordInput = document.querySelector(selector);
    const passwordIcon = document.querySelector("#password_img");

    if (passwordInput && passwordInput.type === "password") {
        passwordInput.type = "text";
        // passwordIcon.setAttribute("name", "unlock-outline");
    } else {
        passwordInput.type = "password";
        // passwordIcon.setAttribute("name", "lock-closed-outline");
    }
};

// start point
document.addEventListener("DOMContentLoaded", () => {
    // getting elements from DOM
    const USER_LOGIN_FORM = document.querySelector(".form");
    const PASSWORD_ICON = document.querySelector("#password_img");
    
    
    // adding listeners
    USER_LOGIN_FORM.addEventListener("submit", (e) => {
        e.preventDefault()
        // getting user data from field
        const USER_PHONE_NUMBER = document.querySelector("#user_phone_number").value; // user phone number
        const USER_EMAIL = document.querySelector("#user_email").value; // user email
        const USER_PASSWORD = document.querySelector("#user_password").value; // user password   
        userDataToLocalStorage(USER_PHONE_NUMBER, USER_EMAIL, USER_PASSWORD); // here we're creating data frame and sending it to LS

    });
    PASSWORD_ICON.addEventListener("click", () => {
        showPassword("#user_password");
    });
});
