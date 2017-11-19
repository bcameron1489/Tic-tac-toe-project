Brian Cameron Tic Tac Toe Project

Wireframes : https://i.imgur.com/haj2Frs.jpg

User Stories :  As a new user, I want to create a username so I can play tic tac toe.
              - As a user with appropriate credentials, I want to play tic tac toe
                  -- I want to be player 1 so I can pick first
                  -- I want to pick x-coordinate so I can win
                  -- I want to play again because that was fun!
              - As a pre existing user, I want to change my password so I can remember it
              - As a pre existing user, I want to click on the leaderboards tab in the nav bar so I can check my stats
              - As a user, I want to sign out

                As a developer, I want to write modular code so it can be readable.
                As a developer, I want to use jquery for dom interactions.
                As a developer, I want my game functionality to be simple and easy for the user .
                As a developer, I want my code to work within a SPA without any page refresh.


Technologies used: html, css/sass, javascript, ajax, jquery, gitHub, linux ubuntu, atom, terminal/curl shell scripts

1. Draw up my wire frames and conceptualize interaction with user stories.
2. Write down an order of operations (what do I need before I...)
3. Create a github repository for my tic tac toe project
4. Revisit project requirements then install dependencies
5. Start by adding html boiler plate
6. Create placeholder buttons to represent my signup/in/out forms.
7. Address minimalistic front end style needs for proper spacing.
8. Create game board using an html table
9. Plan an approach for taking on game logic
10. Create a bare bones working version of tic tac toe with js/jquery (functional game but falls short of requirements)
11. Revisit game api preprerequisite work and plan an approach for tackling sign in forms and game actions
12. Start building forms in terms of need (signup -> signin -> change password -> sign out etc.)
13. Continue to check for proper responses to the back end using curl scripts as I progress through each action systematically
    (Do I have my event handlers?  Am I reaching the api?  If so am I getting feed back from my UI?)
14. Begin and repeat process on game actions
15. Test/debug issues and adjust code accordingly
16. Revisit game logic and trim the fat (Is code repetitive?  Create smaller reusable functions)
17. Test/debug for any errors the changes may have created
18. Begin to style and create proper space
19. Address if and when forms should clear
20. Repeat debugging prcoess until I think the game is complete
21. Clear all console logs and double check for bugs
22. Deploy final product
23. Finish documentation


Things I learned in my development process:

  -  Looking back I feel completely underestimated just how hard the tic tac project was going to be.  I thought my preperation and plan of attack was a bit overkill at the time and going forward I now know I have to put just as much effort into my planning as I do in my code.
  -  Keep it simple...  In terms of game logic and my js functions, I need to take things one step at a time.  Break each action down one by one and approach.  This comes back to planning once again.  Asking yourself questions like what acting you might reuse can save yourself a lot of trouble.
  -  In terms of my forms I wasted a lot of time rushing through and skipping easy checks using curl for api responses.  Simple checks could have kept me on the pace I had set for myself.
  - There's a fine line between being eager to learn and stubborn.  At a certain point you have to be self aware and make that call to step back and ask for help or guidance.  I found myself getting fixated on solving problems on my own to a point where it was counter productive especially with my game logic.
  - NAME YOUR CLASSES AND ID'S BETTER!  I had an id on a parent div to an html element with a class that had nearly the same name.  Trying to debug my issue as the id kept overriding the class was a nightmare.

What did you take away from this project:

  This project was quite the learning experience and not just in terms of the technologies used.  When I decided on web development as a potential career pursuit I THOUGHT it was something I would be happy doing.  The second day in, I hit a wall on my game logic.  I was frozen, confused, lost and had little to no idea how to approach any of the issues I had.  Although this was a humbling and borderline demoralizing day, it really brought with it personal growth and clarity.  As I turned in for the night I found myself wide awake and unable to sleep.  All I could think about was code.  My struggles confirmed just how much I wanted this.  Upon finishing this project my comfort level and deductive reason increased ten fold.  I look forward to tackling future obstacles with the knowledge gained from this project.

  In terms of problem solving it was simply trial and error.  Return to the route of the problem and systematically move forward until I find the problem.  Console logs are your friend and if all else fails seek an alternative route.  At one point I had a smaller problem when my turn switch wasn't responding the way I had anticipated so I created a new branch and commented out the function.  I then very carefully retyped the same function out just to make sure that there weren't any typos and fortunately that fixed the problem.  Small oversights like typos hindered my progress throughout this process so at the very least I came away from this knowing how to look for them.

Unsolved Problems

  Css as a whole was a nightmare for me.  Positioning things properly both in my code and on the page needs to be an area of improvement.  I'd also like to come back to this project and add some style and functionality to my page using jquery.  I settled on just using .html for my board because I had issues show images on my board.  Additionally this prevented me from using hover as it just didn't fit with the style of the board.  I initially started out my game logic using arrays but found myself early on getting a bit too complex and scatter brained a bit.  I decided to take a more simplistic approach but I'd definitely like to take a stab at it again.
