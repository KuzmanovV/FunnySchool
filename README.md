# FunnySchool
An app for my son to practice arithmetics like a funny play and to use the pc not only for gaming.
A simple multipage app with several pages made with JS, HTML and CSS. Some lit-HTML included with simulation of db using JSON files.
You can run it localy using live server.
Like a real game it got rules, different levels difficulty, clear target and a satisfying award.
The app generates random tasks with addition and subtraction
There is a control line where user could specify the dificulty level by the imput of min and max numbers used in the tasks as well as for the number of the task rows.
User starts a timer together with the generation of the tasks by pressing a START button.
Pressing the READY button submits the tasks for check. If there is any mistake then a mistake message is rendered and user should look for the problem row in order to make a correction. He would not know how much and on which row mistakes would be.
If everything is correct after pressing READY the timer will stop and a success message will appear saying the exact time of the correct submition.
The correct submission also unlocks the links for the pleasant part - a satisfying award in the form of different multimedia - cartoons, songs, photos, comics.
Before the correct submission only one other page is accessible - this is a weekly day schedule with useful info for the class and afterclass activities of the young player.

FUNNYSCHOOL:.
|   index.html
|   README.md
|   style.css
|   
+---css
|       404.css
|       day.css
|       films.css
|       songs.css
|       
+---data
|   |   films.json
|   |   songs.json
|   |   
|   +---filmsImgs
|   |       Griz.png
|   |       Ice.png
|   |       SW.png
|   |       TJ.png
|   |       
|   \---songs
|           x.mp3
|           xx.mp3
|           xxx.mp3
|           xxxx.mp3
|           xxxxx.mp3
|           xxxxxx.mp3
|           
+---html
|       404.html
|       day.html
|       films.html
|       songs.html
|       
+---js
|   |   day.js
|   |   films.js
|   |   maths.js
|   |   songs.js
|   |   
|   \---moduls
|           renderFunction.js
|           rowMaker.js
|           utils.js
|           
+---node_modules
|   \---lit-html
|      
\---static
    +---audio
    |       Clock-ticking.mp3
    |       success.mp3
    |       tap.mp3
    |       Wrong Clakson Sound Effect.mp3
    |       
    \---img
            icons8-pencil-drawing-48.png
            Max.jpg