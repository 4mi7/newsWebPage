const API_KEY = "ee314693ba6d4625ab589d7e5ecb2c45";
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey = ${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
    
}

    function bindData(articles){
        const cardsContainer = document.getElementById("cards-container");
        const newsCardTemplete = document.getElementById("templete-news-card");

        cardsContainer.innerHTML = '';

        articles.forEach((article) => {
          if (!article.urlToImage) return;
          const cardClone = newsCardTemplete.content.cloneNode(true);  
          cardsContainer.appendChild(cardClone);
        })
    }