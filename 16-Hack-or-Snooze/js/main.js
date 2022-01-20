"use strict";

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");

//* New Story Form functionality
const $addPost = $('#add-post');

const $navUser = $('#nav-user');
const $navCreatePost = $('#nav-create-post');
const $navMyPosts = $('#nav-my-posts');
const $navFavorites = $('#nav-favorites');

const $newPostForm = $('#new-post-form');
const $myPosts = $('#my-posts');
const $myFavorites = $('#my-favorites');

const $newPostAuthor = $('#new-post-author');
const $newPostTitle = $('#new-post-title');
const $newPostUrl = $('#new-post-url');

const $submitPost = $('#submit-post');
const $submitPostResult = $('#submit-post-result');

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
  const components = [
    $allStoriesList,
    $loginForm,
    $signupForm,
    $newPostForm,
    $addPost,
    $myPosts,
    $myFavorites,
  ];
  components.forEach(c => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
  // console.debug("start");

  // "Remember logged-in user" and log in, if credentials in localStorage
  hidePageComponents();
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app


$(start);
