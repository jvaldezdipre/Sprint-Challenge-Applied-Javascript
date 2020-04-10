// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const mainTopicDiv = document.querySelector('.topics');

const getTopics = () => {
  axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
      //Create a variable to store the data we need
      const topicList = res.data.topics;

      //Loop through each item to in the list and for each item make a tab
      topicList.forEach(item => {
        mainTopicDiv.appendChild(createTab(item));
      });

      console.log(res.data.topics);
    })
    .catch(err => {
      console.log(err);
    });
};

getTopics();

const createTab = data => {
  const topic = document.createElement('div');
  topic.classList.add('tab');
  topic.textContent = data;

  return topic;
};
