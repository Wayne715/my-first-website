//this is for heading search bar,if  input is mario turn to productpage1
document.getElementById("searchBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById("searchInput").value.trim().toLowerCase();    //to make "Mario","mario","  MARIO" same//
    if (input === "mario") {
        window.location.href = "searchresult.html";
    }
});

//this is for heading search bar in moblie mode,if  input is mario turn to productpage1
document.getElementById("searchBtn2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById("searchInput2").value.trim().toLowerCase();    //to make "Mario","mario","  MARIO" same//
    if (input === "mario") {
        window.location.href = "searchresult.html";
    }
});

//this is for verify user input data is email or not,can be used in footer//
const input = document.getElementById("emailInput");
const button = document.getElementById("subscribeBtn");

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!emailPattern.test(email)) {
        input.value = ""; // Clear the input field
        input.placeholder = "Please enter a valid email";
        input.classList.add("error"); // Add error class for styling
    } else {
        alert("Thank you for subscribing!");
    }
});
input.addEventListener("focus", function () {                //when user click on input field,placeholder will be change back to default//
    input.placeholder = "Enter your email address";
    input.classList.remove("error"); // Remove error class on focus
});