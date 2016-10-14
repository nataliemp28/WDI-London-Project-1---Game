# WDI-London-Project-1---Word unscrambler game
**First WDI course project. Simple online game using JS, jQuery, HTML and CSS.**

##Technologies used:
###HTML5
###CSS3
###Javascript
###jQuery
###Heroku
###Git

[https://natalie-wdi-london-p1.herokuapp.com/]

###How the game works
1.Click on start the timer now to begin the countdown.
2.Select the category of word you'd like to unscramble.
3.Type in the box the unscrambled work.
4.Click on submit and see your points increase! 
5.At the end of the countdown your score will be recorded, select play again to try to beat your score and post a score on the highscore board.

##Approach
 
*I took the approach of initially coming up with a whole range of ideas, just thinking completely openly about games, particularly games from my childhood that I'd enjoyed as I'm not a big gamer. I wrote down a whole bunch of ideas and discussed them with people outside of the project just to get ideas about what would be interesting and to challenge myself to think about what would be possible. Taking a balance of the interesting and the practical seemed the best approach. I narrowed my choices to three games, one of which was boggle which I was very keen on. In the end, after quite a lot of sketching and planning, I came to the decision that based on the time frame and my current skill level, boggle was a bit too big a challenge. I decided to do a word unscramble game instead. I sketched this out using pen and paper as this gave me a better feel for it at this stage rather than wireframing it out using a program. After several drafts of this I settled on a basic layout, level of functionality and purpose to the game, which is basically to score as many points as you can over 60 seconds and log a high score which you can then try to beat, or even challenge someone else to beat!
*I then set up my Trello project board and created lists of tasks to be completed, allocating them as essential to funcionality(purple) or nice-to-have(yellow). I set several deadlines to ensure I stayed on track. 
*By Friday I was ready to start some actual coding. Setting up the HTML file and creating each element was the first step. After doing this I got into the app.js file. I chose to use jQuery for this project, as although initially I was feeling much more comfortable with the idea of doing it in Javascript I decided that I needed to challenge myself to embrace jQuery which I'm very glad I did!
*Creating arrays of categories and a click event listener to display a random word from the array was relatively easy. It was then that I encountered my first hurdle, which was actually scrambling that word. I enlisted the help of Mike, stackover flow and Google on this one and was able to write a function to shuffle the word. 
*I then had to create the rest of the functionality, including a countdown timer that turns red during the final five seconds, a scoring system, incrementing by the number of letters in the word and decrementing one point if incorrect, a high score system, a reset to play again button, whilst retaining the high score, a sound track including a 'fail' sound for when the player gets the word wrong.

##Challenges
*Overall my biggest challenges were probably getting my head around doing it in jQuery to begin with (there was a LOT of googling, for every little step, which I could have done in JS) and working with CSS.
*Setting up the counter initially was a challenge and I didn't want it to just start counting when the page loaded, so this needed to be put into a function that triggered when the player actually clicked on the button to start the game. This was useful later on so that the timer function could be called again when the play again button was clicked. 
*The next challenge was CSS, which was a big one! I will definitely be using some form of grid for my next project and spending a lot more time learning more CSS, as styling all my random divs and elements proved to be very challenging and unfortunately my game has ended up not being responsive so that would be something else to come back to, a complete restyle. I was quite happy with my colour palette though. 

##Ongoing issues
*The music still has a slight bug in the sense that the 'fail' sound plays over the background music as opposed to instead of, so you can almost hear both. I left my code in where I'd tried to do that in order to relook at it at a later date and know what I had been thinking of and trying to do. 

##Resources Utilised
*Resources I utilised included lesson notes, instructors and TA's, stack overflow, MDN, W3 Schools and Google.

##Next Steps/Further Development
*If I had more time I definitely would have started the CSS from scratch in a more organised fashion. I would have looked at adding some kind of animation in addition to the sound effects and I definitely would have replaced the alert box that indicates when the time is up with something far more styled. I would also have refined my code to be a bit more DRY as it is a little repetitive with regards to the button for each category but I couldn't figure out how to do this as the buttons linked to separate arrays.


