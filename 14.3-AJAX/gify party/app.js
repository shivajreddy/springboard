
// Create a gif div and add it to gif-box
const $gifbox = $('#gif-box');

let gifsPresent = false;

async function giphyAPI(searchTerm) {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6R5uDpWuODZVe4b5OQFoSCVURZ0GzuAW&q=${searchTerm}`)
    console.log("res =", res);
    const randomIdx = Math.floor(Math.random()*(res.data.data.length));

    try{
        const randomGifUrl = res.data.data[randomIdx].images.original.url;
    }
    catch (e) {
        console.log(e);
    }
    // console.log(randomGifUrl);

    // <img class="gif" src="${randomGifUrl}" alt="" width="300" height="300" >
    $gifbox.prepend($(`
    <img class="gif" src="${randomGifUrl}" alt="" >
    `));

}

// giphyAPI();


$('#search').on('click',()=>{
    const inputVal = $('input').val();

    giphyAPI(inputVal);

    //TODO create remove button if no remove button
    // if (gifsPresent == false) {
    //     $('#remove').toggleClass('invisible')
    //     gifsPresent = true;
    // };
    
})

$('#remove').on('click', ()=>{
    $gifbox.empty();
    gifsPresent = false;
    $('#remove').toggleClass('invisible')

})
