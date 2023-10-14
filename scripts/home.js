// getting data from LS
const getUserDataFromLocalStorage=  ()=>{
    const USER_DATA = localStorage.getItem("user_data");
    JSON.parse(USER_DATA);
    console.log(USER_DATA);
};





// start point
document.addEventListener("DOMContentLoaded", ()=>{
    getUserDataFromLocalStorage()
})