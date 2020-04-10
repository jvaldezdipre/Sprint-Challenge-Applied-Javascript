// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const Header = () => {
  //create the elements
  const headerContainer = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');

  //Add class
  headerContainer.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  //Add content
  date.textContent = 'SMARCH 28, 2019';
  title.textContent = 'Lambda Times';
  temp.textContent = '98°';

  //Nest them properly
  headerContainer.appendChild(date);
  headerContainer.appendChild(title);
  headerContainer.appendChild(temp);
  return headerContainer;
};

document.querySelector('.header-container').appendChild(Header());
