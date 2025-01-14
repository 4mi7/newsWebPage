const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("Canada"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey = ${API_KEY}`);
    const data = await res.json();
    // bindData(data.articles);
    console.log(json.data);
    
}

//     function bindData(articles){
//         const cardsContainer = document.getElementById("cards-container");
//         const newsCardTemplete = document.getElementById("template-news-card");

//         cardsContainer.innerHTML = '';

//         articles.forEach((article) => {
//           if (!article.urlToImage) return;
//           const cardClone = newsCardTemplete.content.cloneNode(true);  
//           fillDataInCard(cardClone, article);
//           cardsContainer.appendChild(cardClone);
//         });
//     }


// function fillDataInCard(cardClone, article){
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", {
//         timezone : "Aisa/jakarta"
//     });

//     newsSource.innerHTML = `${article.source.name} • ${date}`;
// }
