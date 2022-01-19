
const createShowBox = (id, name, summary, image) => {
    const show = {
        id: id,
        name : name,
        summary : summary,
        image : image
    };
    return show;
};

var testSummary = [];

async function searchShows(query) {
    const tvMazeSearchUrl = "https://api.tvmaze.com/search/shows";
    const tvMazeGetSearch = await axios.get(tvMazeSearchUrl, {params:{q:`${query}`}})
    console.log("result = ", tvMazeGetSearch);

    const shows = [];

    for ( let i=0; i<tvMazeGetSearch.data.length; i++){
        const show = tvMazeGetSearch.data[i].show;
        const name = show.name;
        const id = show.id;
        let imageUrl;
        if (!show.image){
            imageUrl = "https://tinyurl.com/tv-missing";
        }
        else {
            imageUrl = show.image.original;
        }

        let summary = show.summary;
        if (!summary){
            summary = ""
        }
        else {
            summary = show.summary;
            summary = summary.slice(3,summary.length);
            if (summary.length > 150) {
                testSummary.push(summary);
                summary = summary.slice(0,150) + "..."
            }
        }
        shows.push(createShowBox(id, name, summary, imageUrl));
    }
    return shows
}


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {

    let $item = $(
        `<div class="box-content w-96 rounded-lg p-3 m-3 bg-slate-100">
            <h2 class="text-2xl font-bold p-2 text-[#390A85]">${show.name}</h2>
            <span class="p-2">Id:${show.id}</span>
            <img height="450px" width="350px" class="p-2" src="${show.image}" alt="">
            <p class="p-2">${show.summary}</p>
            <button class="bg-[#3F37C9] text-white p-2 rounded-lg">Get Episodes</button>
        </div>`
    );
    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});



/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */
const episodeObject = (id, name, season, number) => {
    const obj = {
        id : id,
        name: name,
        season : season,
        number : number
    }
    return obj
}

$('#shows-list').on('click','button', async function callback(){
    const div = $(this.parentElement);
    let id = div.children('span').text();
    id = id.slice(3,id.length)
    const episodes = await getEpisodes(id);

    // No episodes are showing, create an UL, and
    if ( (div.children('ul')).length === 0 ) {
        console.log("no episodes");
        let $episodesList = $(
            `<ul class="episode-list"><b>Episodes</b></ul>`
        )
        div.append($episodesList)
        for (let episode of episodes){
            div.children('ul').append(`<li>${episode.season}:${episode.number}-${episode.name}</li>`)
        }
        div.children('button').text('Hide Episodes')
    }
    
    else {
        div.children('ul').remove()
        div.children('button').text('Show Episodes')
    }
});

async function getEpisodes(id) {
  const show = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
  
  const shows = [];

  let show_id;
  let name;
  let season;
  let number;
  for (let episode = 0; episode<show.data.length; episode++) {
    show_id = show.data[episode].id;
    name = show.data[episode].name;
    season = show.data[episode].season;
    number = show.data[episode].number;
    shows.push(episodeObject(show_id,name,season,number))
  }
  return shows
}