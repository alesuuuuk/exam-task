// functions
// setting user data to ls
const userDataToLocalStorage = (name, email, password) => {
    // creating data frame
    const temp_user = {
        name, email, password
    };
    // setting to LS
    localStorage.setItem("user_data", JSON.stringify(temp_user));
};

// opening home page 
const toNextPage = () => {
    window.open('/pages/home.html', '_self');
};

// showing password on click to img
const showPassword = (selector) => {
    const passwordInput = document.querySelector(selector);
    const passwordIcon = document.querySelector("#password_img");

    if (passwordInput && passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.setAttribute("name", "lock-open-outline");
    } else {
        passwordInput.type = "password";
        passwordIcon.setAttribute("name", "lock-closed-outline");
    }
};

// start point
document.addEventListener("DOMContentLoaded", () => {
    // getting elements from DOM
    const USER_LOGIN_FORM = document.querySelector(".form");
    const PASSWORD_ICON = document.querySelector("#password_img");
    // adding listeners
    USER_LOGIN_FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        // getting user data from field
        const USER_NAME = document.querySelector("#user_name").value; // user phone number
        const USER_EMAIL = document.querySelector("#user_email").value; // user email
        const USER_PASSWORD = document.querySelector("#user_password").value; // user password   
        userDataToLocalStorage(USER_NAME, USER_EMAIL, USER_PASSWORD); // here we're creating data frame and sending it to LS
        toNextPage(); // opening home page 

    });
    PASSWORD_ICON.addEventListener("click", () => {
        showPassword("#user_password");
    });
});

