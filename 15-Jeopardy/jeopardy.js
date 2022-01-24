// Jeopardy game that starts with 6 random categories.
// 1st click= show clue, 2nd click=show answer

let total_categories = 6;
let total_clues = 5;

let categories = [];
let category_clues = [];

const clueObject = {
    title : "cat Title",
    clues : [
        {question : "q1", answer : "a1", showing : null},
        {question : "q1", answer : "a1", showing : null},
        {question : "q1", answer : "a1", showing : null},
        {question : "q1", answer : "a1", showing : null},
    ]
}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

//* call the api, and return an array of category ids
async function getCategoryIds() {
    const categories = await axios.get('https://jservice.io/api/random/', {params:{count:6}})
    // console.log("categories = ",categories);
    const category_ids = [];
    for(category of categories.data){
        category_ids.push(category.category_id);
    }
    return category_ids
    // console.log("caatids = ", category_ids);
}


//* Takes an Id and add's catName to 'categories', and returns an array of 5 clue objects
async function getCategory(catId) {

    const category = await axios.get('https://jservice.io/api/category',{params:{id:catId}});

    const cat_name = category.data.title
    categories.push(cat_name)
    const clueArray = [];
    // console.log('category = ', category);

    //? Taking only 5 clues, if clue count should be dynamic, fix edge case where max clues<needed
    for (let i=0; i<5; i++) {
        const clue = category.data.clues[i];
        // console.log("clue", clue);

        clueArray.push({
            question : clue.question,
            answer : clue.answer,
            showing : null
        })

    }
    return clueArray;
}

//* call the getCategoryIds, and for each of the returned id, call getCategory(id)
async function createClues (){
    const ids = await getCategoryIds();
    // console.log("ids=", ids);

    // push the every array of clue objects, into main array of category_clues
    for (let id of ids) {
        category_clues.push(await getCategory(id))
    }
}


//* create a table item, and add it to #game div (tailwind works best if both table 
// and table contents created on single file)
$('#game').append(`<table class="bg-indigo-200 w-full"></table>`)


//* create the total rows
$tableBody = $('#game').children('table');
for (let i=0; i<total_categories;++i) {
    $tableBody.append(
        `<tr id=row-${i} class ="w-screen"></tr>`
    )
};

//* create Category Headings
async function fillTable(){
    await createClues();
    // console.log("category names = ", categories);
    for (let i=0; i<categories.length; i++) {
        const $row = $('tr').eq(0);
        $row.append(`<th class = "p-4 bg-blue-400 w-1/6 text-center">${categories[i]}</th>`)
    }

    //* traverse the category_clues so that for every row-i, append the traversed item
    for (let r=0; r<5; r++){
        
        const row = $tableBody.children(`#row-${r+1}`);
        // console.log(row);

        for (let c=0; c<6; c++) {
            const item = category_clues[c][r]
            // console.log(item);
            row.append(`<td class = "item-${c} p-4 w-1/6 bg-cyan-100 text-center">?</td>`)
            // row.append(`<td class = "item-${c} p-4 w-1/6 bg-cyan-100 text-center">${item.question}</td>`)
        }
    }

    // add the reset button
    const $resetButton = $('#reset');
    $resetButton.toggleClass('hidden');
    $resetButton.on('click', ()=>window.location.reload(true))
}
fillTable();



//* on click, on any tr, retrieve the row, column clicked on, and the clue_item
// from category_clues array

$('#game').on('click','td', function callback(e){
    
    const row = parseInt((e.target.parentElement.id).slice(4));
    const column = parseInt((e.target.classList.item(0)).slice(5));
    
    const item = category_clues[column][row-1];
    // console.log(item);
    
    if(!item.showing){
        $(e.target).text(item.question)
        item.showing = 1;
        
    }
    else if (item.showing == 1){
        $(e.target).text(item.answer)
        $(e.target).addClass('bg-green-500');
        // item.showing = 2
    }
});
