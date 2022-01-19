//** Part One */

//* 1
console.log(`Let’s get ready to party with jQuery!`);

//* 2
const $img = $('article img');
//not sure if this is right 
$img.css('style', 'image-center');

//* 3
const $lastP = $('div p').last()
$lastP.remove()

//* 4
const $h1 = $('h1').eq(0);
$h1.css('font-size',`${Math.random()*100}px`)

//* 5
$('ol').append('<li>I love Engineering, Software Engineering ❤️💻</li>')

//* 6
$('ol').find('li').remove()
$('ol').append('<p>Removed the list items, and added a p tag instead</p>')


// TODO
//*7
const $r = $('input').eq(0);
const $g = $('input').eq(1);
const $b = $('input').eq(2);
$('body').css('background',`rgb(${$r},${$g},${$b})`)


//* 8
$('img').on('click',function(){return $(this).remove()});


//** Part Two */
// Form creating in JS instead of HTML
let form = `<form>
    <lable for="movietitle">Title</label>
    <input id="movietitle" type='text'></input>
    <lable for="movierating">Rating</label>
    <input id="movierating" type='number' min="0" max="10" value="0"></input>
    <button type="button" id="moviesubmit">submit</button>
</form>`

// Add the form to the DOM and add margin to title & Input fields
$('html').append(form)
const $form = $('form')
$('h2').css({margin:'20px','text-align':'center'});
$form.css('margin', '20px');

const $title = $('form input').eq(0);
const $rating = $('form input').eq(1);

// Append a new OL html element to the body, and select it with $movieList
$('body').append(`<ol class='movie-app'></ol>`);
const $movieList = $('ol.movie-app');

// Create a list item with input values, and a button that has on click function of fire()
const $moviesubmit = $('#moviesubmit')
$moviesubmit.on('click',()=>{
    $movieList.append(`<li>Movie Title: ${$title.val()} <br> Movie Rating: ${$rating.val()}</li>
    <button onClick="fire(this)" class="remove-movie-item">X</button>`);
    $title.val("");
    $rating.val("0");
});

// The function that runs when any delete button is clicked
const fire = (thisbutton) => {
    (thisbutton.previousElementSibling).remove();
    thisbutton.remove();
};


// TODO 
// 1-Ensure that a title has at least 2 characters in it.
// 2-Allow users to sort alphabetically by the title of the movie 
// or by the rating of the movie from lowest to highest and vice versa.
