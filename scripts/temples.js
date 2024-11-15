// Update the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle functionality
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header nav ul");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("visible");
});
