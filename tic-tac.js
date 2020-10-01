// Technical Requirements
// Your app must:

// Render a game in the browser
// Switch turns between more than one player
// Design logic for winning & visually display which player won
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)
// Necessary Deliverables
// At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - Due tomorrow
// A working game, that can win, draw & lose, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your GitHub repo
// A git repository hosted on GitHub, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Submission & presentation on Friday 2:30pm
// Bonus extensions
// These are for extra credit! DON'T focus on these until you've hit the core requirements.

// Keep track of multiple game rounds with a win counter
// Allow game customizable options, time limits, board size, game rounds, name & profiles etc
// Allow players to customize their token (X, O, name, picture, avatar etc)
// Get inventive with your styling - research CSS effects, animations to spiff things up
// Research LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Use timers to display "waiting..." messages while users are waiting to be matched
// Research web audio API and add sound effects to your game
// Be creative! Bend the rules and give it a twist!



// //jumping off point - we want to click in a cell and add an x
// //to that end we must
// // -set an event listener for a click on that 
// // -when it is clicked we must invoke a function
// // -that function must add an X to the innerHTML of a selected div

// //import my nodes/cells as buttons



var button_divs = document.querySelectorAll('.cell')
var button_reset = document.querySelector('.reset')

var go_counter = 0;




function addLetter (event) {
    if (go_counter % 2 == 0) {
        event.target.textContent = 'O';
        
    } else {
        event.target.textContent = 'X';
    }
    go_counter++;
    checkVictory();
    
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

// =======================
// Blue skying the process of players 1+2 assignment and turns
// second function for adding letters where O goes first
// if statemnet in front ofd the event listener click assignment at the start. Have a Gaame Counter variable to base this on. If even then Os go first if odd then Xs go first 


//Messaging Section - adding revealing elements

var game_over = document.querySelector('.game-over');

function revealElement(element) {
    
    element.classList.remove('hidden');
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
        if (go_counter == 9){

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


function endGame() {
    for (var i = 0; i < button_divs.length; i++) {
        
        button_divs[i].textContent =  "*"
        
    }
}



//now add a new class and words "game over"
//the endGame function should:
//fill the remaining cells with red $ signs and produce a message for clicking 
//by looping through the cells adding $ and a new class 'red-ending'


//The next focus is on the process of drawing - likely we'll need to add an if to establish or ---- just an else // nope
//an else statement doesn't work, we have to think agout 

//OK so the drawMessage function now works 

//Next task is to change console logs to announcements

//put a pin in the message pronouncements and work on that later

//next work on some style - 
//1. centralise the box 
//2. centralise the x's and o's
//3. increase the size of the x's and o's
//4. centralise the main box vertically + the reset button move to central and below
//5 mkae the reset button central, and 
//6 make the reset button larger
//7 Then move to give popups to the win and draw messages. 
//8 create a background - try a plane theme- sky etc 
//9 centralise the grid on the vertical plane
//10 start adding the bonus features

//11 need to find a way of definitively ending the game too- message and all


//======================================
// BONUS Requirements

// Keep track of multiple game rounds with a win counter
// Allow game customizable options, time limits, board size, game rounds, name & profiles etc
// Allow players to customize their token (X, O, name, picture, avatar etc)
// Get inventive with your styling - research CSS effects, animations to spiff things up
// Research LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Use timers to display "waiting..." messages while users are waiting to be matched
// Research web audio API and add sound effects to your game
// Be creative! Bend the rules and give it a twist!



/// just  a thought but a sky theme with a plane flying across at the end towing the message "you've won" could work-
//thoughts on giving it an aerial theme- could change signs to something aerial, clouds or planes etc - could 



//This eveing: add counters for Xs and Os with a win when you reach 3
//Could think of adding a prompt input for the number of games you want- best of an odd number etc.


// 1 october: first make player log counters
// make a way for player 1 and player two to pick O or X or just alternate who goes first 
// first make a basic counter in the corner of the screen . 


// Morning goals till 12:30 - 
// get a first message to appear and disappear
// -"game over" message should disappear then appear within the endGame function
//hence we will apply a class of hidden with another class of it's style and remove it when we don't want it
//use the classList.remove() and classList(add) function 
// first set up and HTML Element and position it
//then grab it using querySelector then add a classList to it of .hidden to it

// 
// ok so proof of concept has been established- now apply the principal to a function called reveal element and place that in a 'finished game portion' to work into your code
//now that we have a game over message and reveal element function the next step is when to establish this message. Perhaps the player should win, their console message should be logged and then game over should appear after then reset button re-hides it


//While waiting for inspiration on the front of delayed production of messages, time to do the following for 1 hour:
// -prepare new messages you want to come up- speicifically a welcome messages
// -enlarge the 'player counter ' boxes and think of a way to make player one / player two 
//OK so blue-skying the process of player score.... 
// firstly need a way to assign a player to O and a player to X and player two to O's then message a changeover - preferably it would be a random allocation 
//this means primarly we need a way to switch between O's and X's in terms of order in which they play 

