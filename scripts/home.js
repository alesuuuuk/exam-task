// getting data from LS
const getUserDataFromLocalStorage=  ()=>{
    const USER_DATA = localStorage.getItem("user_data");
    JSON.parse(USER_DATA);
    return USER_DATA;
};

// showing burger menu
const showBurgerMenu = ()=>{
    const BURGER_BTN_OPEN=  document.querySelector(".burger__menu")
    BURGER_BTN_OPEN.style.display = "flex"
}



// start point
document.addEventListener("DOMContentLoaded", ()=>{
    const USER_DATA = getUserDataFromLocalStorage(); // data got
    // getting elements from DOM
   
    // const BURGER_BTN_CLOSE = document.querySelector(".")
    
})