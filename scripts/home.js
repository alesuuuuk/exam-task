// getting data from LS
const getUserDataFromLocalStorage = () => {
    const USER_DATA = localStorage.getItem("user_data");
    

    if (USER_DATA) {
        try {
            const userDataObject = JSON.parse(USER_DATA);
            return userDataObject;
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return null; // Return null or handle the error in an appropriate way
        }
    }
    
    return null; // Handle the case where "user_data" is not in local storage
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

const showUserName = (selector, name) => {
    let html = `${name}`
    const AREA = document.querySelector(selector)
    AREA.innerHTML = html
   
}

// start point
document.addEventListener("DOMContentLoaded", () => {
    const USER_DATA = getUserDataFromLocalStorage(); // data got
    // getting elements from DOM
    showUserName('#user_name', USER_DATA.name)
    const BOOK_ROOM_FORM=  document.querySelector(".book__room_box_form")
    BOOK_ROOM_FORM.addEventListener("submit", (e)=>{
        e.preventDefault
        alert("tets")
    })
    
    
    



})