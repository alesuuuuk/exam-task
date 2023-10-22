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
    const BURGER_MENU = document.querySelector('.burger__menu');
    if (BURGER_MENU.style.display === 'flex') {
        BURGER_MENU.style.display = 'none';
    } else {
        BURGER_MENU.style.display = 'flex';
    };
};

// showing username in DOM 
const showUserName = (selector, name) => {
    let html = `${name}`;
    const AREA = document.querySelector(selector);
    AREA.innerHTML = html;
};

// reacting on user booking a room
const bookFormSubmit = () => {
    const date = document.getElementById('book__room_box_form_date').value;
        const adults = document.getElementById('book__room_box_form_select_adults').value;
        const children = document.getElementById('book__room_box_form_select_children').value;

        // Виводимо введені дані в консоль
        console.log('Дата: ' + date);
        console.log('Кількість дорослих: ' + adults);
        console.log('Кількість дітей: ' + children);
};

// start point
document.addEventListener("DOMContentLoaded", () => {
    const USER_DATA = getUserDataFromLocalStorage(); // data got
    // getting elements from DOM;
    showUserName('#user_name', USER_DATA.name);
    const form = document.querySelector('.book__room_box_form');

    // Додаємо обробник події submit
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        // get data from field
        bookFormSubmit();
    });






})