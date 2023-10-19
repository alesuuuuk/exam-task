// getting data from LS
const getUserDataFromLocalStorage=  ()=>{
    const USER_DATA = localStorage.getItem("user_data");
    JSON.parse(USER_DATA);
    return USER_DATA;
};

// showing burger menu(calling in DOM by onclick)
const showAndHideBurgerMenu = (element) => {
    const burgerMenu = document.querySelector('.burger__menu');
    if (burgerMenu.style.display === 'flex') {
      burgerMenu.style.display = 'none';
    } else {
      burgerMenu.style.display = 'flex';
    };
  };
  


// start point
document.addEventListener("DOMContentLoaded", ()=>{
    const USER_DATA = getUserDataFromLocalStorage(); // data got
    // getting elements from DOM
    // const BURGER_BTN=  document.querySelector(".burger__menu")
    // const BURGER_BTN_CLOSE = document.querySelector(".")
    
    
})