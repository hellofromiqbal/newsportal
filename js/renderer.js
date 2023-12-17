const render = (articles) => {
  document.getElementById("mainWrapper").innerHTML = '';
  if(articles.length > 0) {
    articles.forEach(article => {
      const articleCard = `
        <a class="articleCard d-flex flex-column shadow border rounded border-light-subtle text-decoration-none text-black overflow-hidden" href=${article.url} target='_blank'>
          <div class="articleImageWrapper position-relative bg-primary-subtle">
            <img class="articleImage position-absolute" src="${article.urlToImage}"/>
          </div>
          <div class="articleDetailWrapper p-3">
            <h5>${article.title}</h5>
            <small>${article.content.split("[")[0]}</small>
          </div>
        </a>
      `;
      document.getElementById("mainWrapper").insertAdjacentHTML('beforeend', articleCard);
    });
  } else {
    const notFound = `
      <div class="alert alert-primary" role="alert">
        Content not found. Please make sure the keyword is correct.
        <a href="/">Back</a>
      </div>
    `;
    document.getElementById("mainWrapper").insertAdjacentHTML('beforeend', notFound);
  }
};

const renderNotFound = () => {
  const notFound = `<h3>No Result. Please check again or use another keyword.</h3>`;
  document.getElementById("mainWrapper").insertAdjacentHTML('beforeend', notFound);
}

export { render, renderNotFound };