# Rugby Match
## A JavaScript Memory Card game with an international Rugby Theme
### Interactive Front End Development Milestone Project

### The Story
I began a version of this project in 2019 while I was doing the fast track course without grasping the concepts of JavaScript programming. In an effort to try and complete it in time I clicked on the first YouTube tutorial I could find about building a similar project and tried to follow that to build my own. This however ended in disaster as I was following on with code that we were not taught and I had no idea how I could edit or change the tutorial to fit what I wanted. It would of ended in straight plagiarism if I submitted my original project. I ended up writing a single line JQuery function as my previous submission.

This time around however after I switched to the part time track, I took my time to learn more about JavaScript going over the course materials more carefully and taking my time to build other projects. I wanted to get myself used to programming concepts and familarize myself with some of JavaScirpts keywords and how they can be used. My extra research took me to many different sources and as my understanding grew I was able to better recognize what can be done. I read some text books and followed tutorials from other sources such as freecodecamp.org, Udemi, SkillShare and other blogs with Javascript tutorials. My GitHub repositories list is now populated with other games that I have built following outside learning materials. These include a whole bunch of retro arcade style games including 3-4 different versions of a memory card game. 

The repitition and complexity of completing these projects gave me the confidence and understanding to tackle a project on my own. I decided to reuse the art assets that I created in 2019 and built this project in vanilla JavaScript.

### Inspiration for this project
In my research about building a Memory Card Game I found that there are countless examples and tutorials. Apparently it is a popular subject for beginners to build their first interactive application. For my project I took inspiration from a few different sources. **Kyle** from **Web Dev Simplified** [YouTube] (youtube.com/watch?v=28VfzEiJgy4&t=844s&ab_channel=WebDevSimplified) **Ania Kubow** and her Arcade Game tutorials for freecodecamp.org [YouTube] (https://www.youtube.com/watch?v=lhNdUVh3qCc&t=338s&ab_channel=freeCodeCamp.org) and **Tania Rascia** and her blogpost [medium] (https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) were my main sources of inspiration when it came to developing this project. 

I coded my project using the above sources as references for project planning and work flow. However there is one single line which I took from **Ania Kubow** and it is her random shuffling method. I have seen many ways this has been approached in other blogs and tutorials but nothing as clean and elegant looking as this. **Tania Rascia** has made use of this code in her project too and as such I have used it in mine. It is line 20 in my js file. I am not sure which source to credit with it but I believe **Tania Rascia** blog is dated before the freecodecamp video so I give her the code credit.

## Development
### Game Plan
My game had to have an international rugby tournament theme for the 2019 world cup.

I wanted my game to have dynamically created cards as opposed to hard coded in HTML. 

The game had to have animations to show them turning instead of just changing into another image.

Matches will make the cards dissappear without changing the positions of the other cards on the board.

My matching logic will be based on comparing data attributes of the images together. 

Game over will be handled by populating an array with the cleared images until it reaches 12. 


### 1. Bringing The Assets Together
Most of the assets came from wikipedia. I took the team logos then put them into an image editor and gave them transparent backgrounds.

### 2. Setting up Project in GitPod
Created new project, set my directories, created index with boilerplate and linked css and javascript. Uploaded assets to into images folder

### 3. Creating the Cards. CSS, HTML, JavaScript
1. I created a container div to hold my game div that will hold the card divs created in Javascript. I made some styles in CSS for the cards and gave borders to the containers so I can see them on screen. 

2. Starting with an array of images I created a for loop to go over the array to create a div for each image. Every image was given a name attribute for matching and then fixed to the DOM. There are 24 divs in total. 12 that hold team logos and 12 that hold the rugby ball image. 

3. Attached a click event listener to the created divs.

4. Using CSS I could apply animation properties and make the 24 divs behave like they are 12 divs with a front and back side that revealed different images when clicked.

### 4. Flipping The Cards
1. For my flipping animations to work the event handler needed to be attached to the parent div that held the divs for the card front and card back images. But my card matching logic is based on comparing the data attributes of the images. Everytime I clicked a card the information that i wanted to store was 2 levels under the div being clicked. To access this I declared what elements I wanted with each click using the firstChild and parentElement methods. Not the most elegant solution but it worked. 

2. I created an array to store the images of the divs being clicked and created a compare function that will handle the comparison. 


### 5. Checking The Cards For Match
1. Now with the images stored in an array I declared what needed to be compared. First I had to make sure the div being clicked corresponds to the image using the parentElement method. 

2. Using the data attribute I gave the image in the first function I wrote my following conditions.
A. If the name of each image matches each other, take them off the board and store them into another array called cardsCleared. Else flip them back over.
B. If cardsCleared Array === 12 display game over message.

Since my comparison logic was checking the data attribute of the image inside the div and the event handler was attached to the parent elements of the images it is impossible to click on the same card twice to break the logic. 

### 6. Testing

Functionality testing was carried out throughout the development process. Since my logic was based on capturing specific information inside the clicks of the event handler I set up console.logs through my code that showed me the information I was looking for at each stage of coming up with the functions. Without the correct information being stored my game would not work. Those console.logs are still in the code commented out so you can see them.

I validated my JS syntax on Esprima with no errors.
HTML and CSS validated on w3Schools
HTML thew an error with a google font link 

### Summary
In the end it all turned out rather simple. But as I entered into this I did not understand the flow of how to write a program. It took me way too many weeks, reading other materials, working on other projects and looking up cheatsheets, w3Schools, Mozilla and countless google searches trying to find out what keywords I needed to perform an action. I have come to realize now that there isn't a specific word or method that handles every action you want to do in a single line. But rather using what you know and gaining an understanding of programming concepts you can make something work even if it is more verbose or does not look as clean as somebody elses project. 

I have also come to realize the value of planning out a project with what you need to deliver and breaking those tasks into smaller steps to help you build on your code to get where you need it to be. This project has helped me to understand that programming does have a back and forward nature to it. Where one line is written that calls on another written somewhere else and you may have to go back up the page to change or to add something. 