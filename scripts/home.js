// getting data from LS
const getUserDataFromLocalStorage=  ()=>{
    const USER_DATA = localStorage.getItem("user_data");
    JSON.parse(USER_DATA);
    return USER_DATA
};





// start point
document.addEventListener("DOMContentLoaded", ()=>{
    const USER_DATA = getUserDataFromLocalStorage()
    console.log(USER_DATA)
})