import { render, renderNotFound } from "./renderer.js";

const apiUrl = "https://newsapi.org/v2/everything";
const apiKey = 'd4727282328646e78f20a614cb5bd9d0';

const renderNews = async (keyword = 'keyword') => {
  try {
    const res = await fetch(`${apiUrl}?q=${keyword}&apiKey=${apiKey}`);
    if(!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await res.json();
    render(data.articles.splice(0, 9));
  } catch (error) {
    console.log(error.message);
  };
};

export { renderNews };