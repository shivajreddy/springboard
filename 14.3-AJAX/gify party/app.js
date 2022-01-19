
// Create a gif div and add it to gif-box
const $gifbox = $('#gif-box');

let gifsPresent = false;


//*async function for 'search end point' giphy api, return <img>

async function giphyAPI(searchTerm) {

    $('#loadingimg').toggleClass('invisible')
    
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6R5uDpWuODZVe4b5OQFoSCVURZ0GzuAW&q=${searchTerm}`)

    const randomIdx = Math.floor(Math.random()*(res.data.data.length));
    
    const randomGifUrl = res.data.data[randomIdx].images.original.url;
    
    $gifbox.prepend($(`
    <img class="gif" src="${randomGifUrl}" alt="" >
    `));
    
    $('#loadingimg').toggleClass('invisible')

}


//* GET request for the input search term & append the result image

$('#search-gif').on('click',()=>{

    const inputVal = $('input').val();

    giphyAPI(inputVal);

    if (gifsPresent == false) {
        $('#remove').toggleClass('invisible')
        gifsPresent = true;
    };
})


//* Remove all gifs and toggle button visibility

$('#remove').on('click', ()=>{
    $gifbox.empty();
    gifsPresent = false;
    $('#remove').toggleClass('invisible')

})
