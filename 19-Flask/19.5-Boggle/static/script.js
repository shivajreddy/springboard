const ding = new Audio('static/ding.mp3');
let score = 0;
const correct_answers = [];

const $button = $('#submit-word');
$button.on('click', get_respons_for_word)


async function get_respons_for_word(){
    const user_input = document.querySelector('input').value;

    // no input check
    if (user_input.length === 0){return}

    // make a request to server with user's input
    const response = await axios.get(`/req/${user_input}`);
    const obj = response.data
    const result = obj.result
    $('form').children('input').val('');

    //* log checks
    // console.log(response, obj);
    // console.log(`actual response=${response.data.result}`);

    if (result === "ok"){
        right_word(user_input);
    }
    if (result === "not-on-board"){return
        // console.log("Word ain't on board");
    }
    if (result === "not-word"){return
        // console.log("This ain't a word");
    }
}
// Post Score if correct guess
const right_word = (user_input) => {
    // console.log(`Score=${user_input.length}Great found the word`);
    ding.play();
    score += user_input.length

    $('#score-board').children('h2').text(`Score:${score}`);
    
}

$('body').append($('<button id="start-game">StartGame</button>'))
$('body').append($('<button id="restart-game">Restart</button>'));
$('body').append($('<section id="score-board"><h2>Score:0</h2></section>'));

// Hide form unless the start-game button is clicked
const $form = $('form')
$form.css('display','none');
$('#score-board').css('display','none');
$('#restart-game').css('display','none');

// Add a form after clicking start-game button
$('#start-game').on('click', ()=>{
    $form.css('display','block');
    $('#score-board').css('display','block');
    $('#start-game').css('display','none');
    $form.children('input').focus();
    
    // set time out to hide the form
    setTimeout(()=>{
        $('form').css('display','none');
        $('#restart-game').css('display','block');
        $('#score-board').children('h2').text(`🔥Final Score:${score}`);
    },6000);
    
    
})

// On restarting the game
$('#restart-game').on('click',()=>{
    $form.css('display','block');
    $('#score-board').css('display','none');
    $('#restart-game').css('display','none');
})
