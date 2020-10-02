# Tic-Tac-Toe
TIC TAC TOE 

click here to play: https://pages.git.generalassemb.ly/pedrinkski/Tic-Tac-Toe/

1. HOW TO PLAY

Tic tac toe follows the format of O’s and X’s. The objective is simple:  to get a three-in-row formation on the grid. 

The game is best-of-five.

2. DEVELOPMENT
I studied the requirements put out and separated into smaller problems 
firstly I organised the HTML into an appropriate style with a title and utilisation of the grid of divs inside a parent div element NB giving each Div an individual ID as well as an overarching class 
I wrote some logic in my Javascript as a guide to the types of things I was attempting and often re-attempting at each point 
I began by following mainly the same formula- grab any elements and setup and variables, the write the appropriate code and functions then hazard test and tweak. 
I worked on the minimum requirements and once achieved worked to try and apply a some of the bonus features getting a far as applying a player count for each participant and an overall game counter which terminated when a player either won 3 games or a the total game number reached 5. 


3. PROBLEMS 
solved

-messages overlaying the grid; this was more a case of trying not to disturb the HTML layout too much but managed to do it by use of z-index and fixed positions in CSS which was a neat solution.

-achieving ‘win states’ to check. Eventually used a series of if statements to encapsulate the winning state and action appropriate functions 

-switching between x’s go first and o’s go first. I eventually found from extensive debugging that event listeners from previous loops had to be removed to maintain the rigour of the numerical system determining the ‘go’s of respective players

unsolved
styling: there was too much time spent in debugging and JS work to apply a really distinctive style. Ideas to take this further included sound effects and an opening intro along with the usual font and colour work. 
a neater and more efficient method for assessing the ‘winning states’ of the game 



4. CHALLENGES
-the major problem was time and working out the mechanics within Javascript and the sacrifices in the aesthetic to which that led. 
-further developments would be: adding an auto-reset function for every game and a macro “competition reset’ button instead of relying on the refresh function, 

5. LESSONS
time management: 
focus on style at more regular intervals 
plan styling as part of the early stage blueprint production 
further work needed on responsive design 
consult the given resources from hour 1 night one to allow planning for application 
