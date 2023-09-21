let currentDate = new Date().toLocaleDateString();
console.log(currentDate);
let date = document.querySelector("#date");
let currentYear = new Date().getFullYear();
console.log(currentYear);
let year = document.querySelector("#year");

date.textContent = currentDate;
year.innerHTML = currentYear;

