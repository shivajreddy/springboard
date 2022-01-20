"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  // console.log("first got stories here", storyList);
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
      <input type="checkbox"/>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        <button class='delete-post'>X</button>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  // console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  // console.log("this is storyList at 47=", storyList);
  for (let story of storyList.stories) {
    
    const $story = generateStoryMarkup(story);
    // console.log("this is tory.userFavorite=", story.userFavorite);

    //! set the checkbox to true
    if(story.userFavorite){
      console.log("this is the one, its id is", story.storyId)
      console.log("and item is ", $(`#${story.storyId}`));
      $(`#${story.storyId}`).children('input').attr("checked",true)
    }
    $allStoriesList.append($story);
  }


  $allStoriesList.show();
}

async function getUsersStories() {
  const currentUserStoryList = [];
  const storyList = await StoryList.getStories();
  const currentUserName = localStorage.getItem('username');

  for (let story of storyList.stories) {
    if (story.username === currentUserName){
      currentUserStoryList.push(story);
    }
  }
  return currentUserStoryList;
}

function createUserStoryMarkup(userStory){
  const hostName = userStory.getHostName();
  return (`
      <li id="${userStory.storyId}">
        <a href="${userStory.url}" target="a_blank" class="story-link">
          ${userStory.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${userStory.author}</small>
        <small class="story-user">posted by ${userStory.username}</small>
      </li>
    `);

};

function putUserStoriesOnPage(userStories) {

  for (let userStory of userStories) {
    const $userStory = createUserStoryMarkup(userStory);
    $myPosts.append($userStory)
  }
}

// ? Submit post to api
$submitPost.on('click', async function submitpost(e){
  e.preventDefault();

  //? Evaluate if form is filled completely
  if ($newPostAuthor.val() && $newPostTitle.val() && $newPostUrl.val()){
    try {
      await axios.post((BASE_URL + "/stories"), {
        "token" : localStorage.getItem('token'),
        "story" : {
          "author" : `${$newPostAuthor.val()}`,
          "title" : `${$newPostTitle.val()}`,
          "url" : `${$newPostUrl.val()}`
        }
      });
      $submitPostResult.text('Successfully added the story');
    }
    catch(event){
      console.debug(event);
      $submitPostResult.text(`${event}`)
    }
  }
  else{
    $submitPostResult.text(`Error: Make sure to fill the form correctly`)
    console.log(e);
  }
})


//? Favorite Checkbox 
$('ol').on('click', 'input',async (e)=>{
  const storyId = e.target.parentElement.id;
  // const story = axios.get(`https://hack-or-snooze-v3.herokuapp.com/stories/${storyId}`);

  // console.log(storyList);
  for(let s of storyList.stories) {
    if (s.storyId === storyId) {
      s.userFavorite = e.target.checked
    }
  }
});


//? Get stories that are favorite
async function getFavorites() {
  const favStoriesList = [];
  for (let story of storyList.stories) {
    if (story.userFavorite == true){
      favStoriesList.push(story);
    }
  }
  return favStoriesList;
}


function createFavortieStoryMarkup(favStory){
  const hostName = favStory.getHostName();
  return (`
      <li id="${favStory.storyId}">
        <a href="${favStory.url}" target="a_blank" class="story-link">
          ${favStory.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${favStory.author}</small>
        <small class="story-user">posted by ${favStory.username}</small>
      </li>
    `);
};


function putFavortiePostsOnPage(favStories) {
  console.log('input favstories are ', favStories);
  if (favStories.length !== 0){
    for (let story of favStories) {
      const $favStory = createFavortieStoryMarkup(story);
      $myFavorites.append($favStory);
    }
  }
}


//? Delete posts on delete push
$('ol').on('click', 'button',async (e)=>{
  const storyId = e.target.parentElement.id;

  for ( let i=0; i<storyList.stories.length; i++) {
    const s = storyList.stories[i];
    if (s.username !== localStorage.getItem('username')) {
      console.log("s.username=", s.username, "and ls.username =", localStorage.getItem('username'));
      return alert('you did not create this story')
    }
    if (s.storyId === storyId) {
      await axios.delete(`https://hack-or-snooze-v3.herokuapp.com/stories/${storyId}`, {params:{token:localStorage.getItem('token')}})
      alert('Successfully deleted')
      return window.location.reload(true)
    }
  }
});
