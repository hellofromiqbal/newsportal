import { renderNews } from "./fetcher.js";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchInput.addEventListener('keyup', (e) => {
  // On Enter Key Clicked
  // if(e.keyCode === 13) {
  //   renderNews(e.target.value);
  // }

  // Live Search
  renderNews(e.target.value);
});

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  renderNews(searchInput.value);
});

renderNews();