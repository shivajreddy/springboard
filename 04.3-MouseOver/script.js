// 4.3 - Mouse Over Event

// Creating a HTML element of the body
const body = document.querySelector('body');

// Making the body big, so that the style applies, without no content.
body.style.height = '100vh';
body.style.margin = '0';
body.style.padding = '0';
// If using random colors, use transition to slow down the change of colors
// body.style.transition = 'background 200ms';



// Method 1 //
// Get the current window width & height.
let window_width = window.innerWidth;
let window_height = window.innerHeight;

// Function to generate a RGB color (0-255) based on X,Y position
function positionalColor(x_position, y_position) {

    // Convert X,Y position into a percentage of VW,VH
    let vw = Math.floor((x_position * 100) / window_width)
    let vh = Math.floor((y_position * 100) / window_height)

    // Calculating the R,B values based of the VW,VH values
    let r_vw = Math.floor(vw * 2.55)
    let b_vh = Math.floor(vh * 2.55)

    // console.log(`${vw}, ${vh}`)
    // console.log(`${r_vw}, ${b_vh}`)
    return `rgb(${r_vw}, ${0}, ${b_vh})`
}


// MouseMove event -> Invokes the body color function
body.addEventListener('mousemove', function(event){
    // Method 1 -> X,Y postions
    body.style.background = positionalColor(event.clientX, event.clientY);

    // Methos 2 -> Random color invoked when the position changes
    // body.style.background = randomColor(event.clientX, event.clientY);
})


// Method 2 //
// Function to generate a random RGB color (0-255)
function randomColor() {
    let r = Math.floor(Math.random()*256)
    // let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()* 256)

    console.log(`${r}, ${b}`)
    return `rgb(${r}, ${0}, ${b})`
}
