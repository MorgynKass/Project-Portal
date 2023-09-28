let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

let cardList = document.querySelector('.cards');
let cards = [];
let cardObject = {
    title: "Html Project",
    urlLink: "Project_1/project1.html",
};

cards.push(cardObject);
console.log(cards);

cards.map((item) => {
    cardList.innerHTML += `<div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h2>${item.title}</h2>
      </div>
      <div class="card-back">
        <a href="${item.urlLink}">Project Link</a>
      </div>
    </div>
  </div>`
});

date.textContent = currentDate;
year.textContent = currentYear;