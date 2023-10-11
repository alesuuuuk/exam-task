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
const toNextPage=  ()=>{
    window.open('');
};

// start point
document.addEventListener("DOMContentLoaded", () => {
    const USER_LOGIN_FORM = document.querySelector(".form");
    USER_LOGIN_FORM.addEventListener("submit", (e) => {
        e.preventDefault()
        // getting user data from field
        const USER_PHONE_NUMBER = document.querySelector("#user_phone_number").value; // user phone number
        const USER_EMAIL = document.querySelector("#user_email").value; // user email
        const USER_PASSWORD = document.querySelector("#user_password").value; // user password   
        userDataToLocalStorage(USER_PHONE_NUMBER, USER_EMAIL, USER_PASSWORD); // here we're creating data frame and sending it to LS
        
    });
});
