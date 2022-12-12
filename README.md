# FunnySchool
An app for my son to practice arithmetic like a funny play and to use the pc not only for gaming.
A simple multipage app with several pages made with JS, HTML and CSS. Some lit-HTML is included with simulation of db using JSON files. There are also effects with jquery 3.3.1, bootstrap 4.0.0 and ekko-lightbox 5.3.0 included.

You can run it locally using live server.

Like a real game it got rules, different levels difficulty, clear target and a satisfying award.
The app generates random tasks with addition and subtraction.
There is a control line where the user can specify the difficulty level by the input of min and max numbers used in the tasks as well as for the number of the task rows. There are 3 different kinds of possible games to choose and 2 levels of hints possible. Unlike the base Normal game, in the Mixed game user should solve tasks by finding out either the first number or the second one. Unlike the Normal game in the Triple one user should solve tasks with 3 numbers. 100% Hint option would mark the wrong row if any. 50% Hint would mark half of the rows with where a mistake has been detected. In case of hints using the app would target and reveal mistakes one by one.

The user starts a timer together with the generation of the tasks by pressing a START button.
Pressing the READY button submits the tasks for check. If there is any mistake, then a mistake message is rendered, and user should look for the problem row to make a correction. He would not know how much and on which row mistakes would be.
If everything is correct after pressing READY the timer will stop and a success message will appear saying the exact time of the correct submission.
The correct submission unlocks the links for the pleasant part - a satisfying award in the form of different multimedia - cartoons, songs, photos, comics.
Before the correct submission only 2 other pages are accessible. A weekly day schedule with useful info for the class and after class activities of the young player. It shows dynamically the actual day and its date except for the weekend. And a Board of records registering all trys of the user which comply to the following requirements - min number 0, max number 10, rows number 6 and no hints used. Records are registered with their date, time and seconds used to solve. Last try is marked and all records in the 3 tables respectively for each kind of game - Normal, Mixed and Triple - are sorted ascending by seconds. They can be cleared separately for each one table.