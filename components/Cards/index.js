// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
  console.log(res.data.articles);
  const articleList = res.data.articles.javascript;
  articleList.forEach(item => {
    const articleCard = createArticleCard({
      authorPhoto: item.authorPhoto,
      headline: item.headline,
      authorname: item.authorName,
    });
    cardContainer.appendChild(articleCard);
  });
});
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
  console.log(res.data.articles.bootstrap);
  const articleList = res.data.articles.bootstrap;
  articleList.forEach(item => {
    const articleCard = createArticleCard({
      authorPhoto: item.authorPhoto,
      headline: item.headline,
      authorname: item.authorName,
    });
    cardContainer.appendChild(articleCard);
  });
});
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
  console.log(res.data.articles.technology);
  const articleList = res.data.articles.technology;
  articleList.forEach(item => {
    const articleCard = createArticleCard({
      authorPhoto: item.authorPhoto,
      headline: item.headline,
      authorname: item.authorName,
    });
    cardContainer.appendChild(articleCard);
  });
});
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
  console.log(res.data.articles.jquery);
  const articleList = res.data.articles.jquery;
  articleList.forEach(item => {
    const articleCard = createArticleCard({
      authorPhoto: item.authorPhoto,
      headline: item.headline,
      authorname: item.authorName,
    });
    cardContainer.appendChild(articleCard);
  });
});
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    console.log(res.data.articles.node);
    const articleList = res.data.articles.node;
    articleList.forEach(item => {
      const articleCard = createArticleCard({
        authorPhoto: item.authorPhoto,
        headline: item.headline,
        authorname: item.authorName,
      });
      cardContainer.appendChild(articleCard);
    });
  })
  .catch(err => {
    console.log(err);
  });

const createArticleCard = ({ headline, authorPhoto, authorname }) => {
  //Create each element
  const card = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  //Add the class
  card.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  //Add src
  image.src = authorPhoto;

  //Add text content
  headLine.textContent = headline;
  authorName.textContent = `By ${authorname}`;

  //Nesting time
  author.appendChild(imageContainer);
  author.appendChild(authorName);

  imageContainer.appendChild(image);

  card.appendChild(headLine);
  card.appendChild(author);

  return card;
};
