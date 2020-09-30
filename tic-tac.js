//jumping off point - we want to click in a cell and add an x
//to that end we must
// -set an event listener for a click on that 
// -when it is clicked we must invoke a function
// -that function must add an X to the innerHTML of a selected div

//import my nodes/cells as buttons


var button_divs = document.querySelectorAll('.cell')
var button_reset = document.querySelector('.reset')

var go_counter = 0;

function addLetter (event) {
    if (go_counter % 2 == 0) {
        event.target.textContent = 'O';
        
    } else {
        event.target.textContent = 'X';
    }
    checkVictory();
    go_counter++;
}



for(var i = 0; i < button_divs.length; i++) {
    button_divs[i].addEventListener('click', addLetter)
}


button_reset.addEventListener('click', reset_game)

function reset_game() {
    go_counter = 0;
    for (var i = 0; i < button_divs.length; i++) {
        button_divs[i].textContent = '';
    }
}

//next add a reset button
// how will this work? Simply as above 
// desired goal: set the textContent of each div to null
//OK SOOOOO- give me a button to press, label it reset, then we need a function that will loop over all of the cells and will set the textContent to null.

//Working x application is applied 
//Now we need to work on the Os 
//This is slightly harder as we need to check the textContent is empty first of all, if not then we can console log or prompt a message saying "You can't go here, space is taken"

//but no it's slightly more complex than that because we need to establish a go system now whereby the second person to go puts an o in when clicked ... 

//there will be max nine 'gos' 
//let odd numbers 1,3,5,7 and 9 be x's turn and 2,4,6 and 8 for O's to go - likely we can use the modulus % function to achieve this  
// add a counter to the function add_letter so we can tell how many times we've gone and when counter is odd we only put an 'x' when counter is even we put an 'O' 
//ALSO REMEMBER THAT RESET BUTTON WILL NEED TO SET GO COUNTER TO 0 when pressed.

//Now what next - well we need to start to establish the logic by which someone wins. How is that? By getting three xs in a row diagnoally or in a horizontal or vertical line
//could we do this by applying data or class to the div sections as we put xs and os in them... 

//there are 8 states in which someone can 'win' this game with 3 in a row. 

//winning states for 'X'
// cell 1, 2 and 3 = "X"
// cell 4,5 and 6 = "X"
// cell 7,8 and 9 = "X"
// cell 1,4 and 7 = 'X'
// cell 2,5 and 8 = "x"
// cell 3,6 and 9 = "x"
// cell 1,5 and 9 = 'x'
//cell  3, 5 and 7 = 'x'

// we will need to write a function which is called within add_letter. This function will need to loop? over the grid and

// oOOOOORRRRR use the technique from cards where all three units are clicked and something hape 
//add a classList to the div of class "O" or class "X"

//make a function which checks if cell 1 has an 'X' if so console log a victory for Xs
//THen try for 3 in a row
function checkVictory() {
    for(var j = 0; j < button_divs.length; j++) {
        if (button_divs[0].textContent == "X" && button_divs[1].textContent == "X" && button_divs[2].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[0].textContent == "O" && button_divs[1].textContent == "O" && button_divs[2].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[3].textContent == "X" && button_divs[4].textContent == "X" && button_divs[5].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[3].textContent == "O" && button_divs[4].textContent == "O" && button_divs[5].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[6].textContent == "X" && button_divs[7].textContent == "X" && button_divs[8].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[6].textContent == "O" && button_divs[7].textContent == "O" && button_divs[8].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[0].textContent == "X" && button_divs[3].textContent == "X" && button_divs[6].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[0].textContent == "O" && button_divs[3].textContent == "O" && button_divs[6].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[1].textContent == "X" && button_divs[4].textContent == "X" && button_divs[7].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[1].textContent == "O" && button_divs[4].textContent == "O" && button_divs[7].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[2].textContent == "X" && button_divs[5].textContent == "X" && button_divs[8].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[2].textContent == "O" && button_divs[5].textContent == "O" && button_divs[8].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[0].textContent == "X" && button_divs[4].textContent == "X" && button_divs[8].textContent == "X") {
            victoryMessageX()
            break
        }
        if (button_divs[0].textContent == "O" && button_divs[4].textContent == "O" && button_divs[8].textContent == "O") {
            victoryMessageO()
            break
        }
        if (button_divs[2].textContent == "X" && button_divs[4].textContent == "X" && button_divs[6].textContent == "X") {
           victoryMessageX()
            break
        }
        if (button_divs[2].textContent == "O" && button_divs[4].textContent == "O" && button_divs[6].textContent == "O") {
            victoryMessageO()
            break
        }
        else if (go_counter == 9){
            drawMessage()
            break
        }
    }
}

function victoryMessageO() {
    console.log("The O Empire Reigns");
}

function victoryMessageX() {
   console.log("The X's have it")
}

function drawMessage() {
    console.log("It's a draw!")
}


//The next focus is on the process of drawing - likely we'll need to add an if to establish or ---- just an else // nope
//an else statement doesn't work, we have to think agout 