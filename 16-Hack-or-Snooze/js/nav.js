"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);


/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();

  //? Show User's nav links
  $navUser.show();


  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}


//? Create Posts Functionality

$navCreatePost.on('click',()=>{
  hidePageComponents();
  $addPost.show();
  $newPostForm.show();
  $submitPostResult.text('');
  $newPostForm.trigger('reset')
});


//? Show User created posts

$navMyPosts.on('click',async ()=>{
  hidePageComponents();
  $myPosts.show();
  $myPosts.empty();

  //? get the stories from the api, and create dom elements of each story
  const userStoryList = await getUsersStories();
  putUserStoriesOnPage(userStoryList);
});


//? Show User's favorite posts

$navFavorites.on('click', async ()=>{
  hidePageComponents();
  $myFavorites.empty();
  $myFavorites.show();

  const favStoryList = await getFavorites();
  console.log("this is 77", favStoryList);
  putFavortiePostsOnPage(favStoryList);
  // console.log(getFavorites());
});

