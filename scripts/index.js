// functions
const userDataToLocalStorage=  (phone, email, password) =>{
    let temp_user = {
        phone, email, password
    };
    localStorage.setItem("user_data", temp_user)
};


// start point
document.addEventListener("DOMContentLoaded", () => {
    localStorage.clear
    const USER_LOGIN_FORM = document.querySelector(".form");
    USER_LOGIN_FORM.addEventListener("submit", (e) => {
        e.preventDefault()
        // getting user data from field
        const USER_PHONE_NUMBER = document.querySelector("#user_phone_number").value; // user phone number
        const USER_EMAIL = document.querySelector("#user_email").value; // user email
        const USER_PASSWORD = document.querySelector("#user_password").value; // user password
        console.log(USER_EMAIL)   
        userDataToLocalStorage(USER_PHONE_NUMBER, USER_EMAIL, USER_PASSWORD); // here we're creating data frame and sending it to LS
        console.log(localStorage)
    });
});