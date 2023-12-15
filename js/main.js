import { renderNews } from "./fetcher.js";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    renderNews(e.target.value);
  }
});

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  renderNews(searchInput.value);
});

renderNews();