
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# Hangman Game

In this project, we implemented a classic two player game using traditional methods. The first player will be the one to choose the word he desires, and the second player is guessing what word was selected based on the oral description of the first person. The main purpose is to foster human connections and communication between players through a digital game.


## Built with

**User Interface:** 
* [![HTML]][HTML-url]
* [![CSS]][CSS-url]

**Functionalities:**
* [![JS]][JS-url]

[HTML]: https://img.shields.io/badge/html-%23E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
[CSS]: https://img.shields.io/badge/css-%231572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JS]: https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JS-url]: https://www.javascript.com/


## Contributors

* Vivian Lee - vlee42@mylangara.ca 
* Robert Watson - rwatson01@mylangara.ca
* Huy Tang - htang35@mylangara.ca


## Deployment

We deployed this project on the internet using GitHub Pages.

Please navigate to the link below.

```bash
https://huytang10.github.io/CPSC_1045_Group_2/pages/index.html
```


## Installation

```bash
git clone https://github.com/HuyTang10/CPSC_1045_Group_2.git
```


## How To Play

1.	This game is for **2 players**. 
2.	**Launch the Game**: Open the game.html file in your web browser.
3.	**Input the word**: Once the game loads, one player will be prompted to enter a word containing only letters and/or spaces. The user could press enter or click next to finalize their input.
4.	**Start Guessing**: Now that we have a word to guess, letters will appear on the screen. The second player can make their guesses by clicking on the letters.
5.	**Guess Wisely**: If your chosen letter is in the word, it will be revealed in its correct position(s). If not, part of the hangman will be drawn, and the letter will be grayed out and unable to be selected again.
6.	**Win or Lose**: Keep guessing until you either guess the word correctly or run out of 6 lives. If you guess the word, you win! If the hangman is fully drawn before you guess the word, you lose.
7.	You can restart the game again by pressing the reset button.


## Features and Functionalities
**hangman.js**: All the functions to draw the hangman using canvas including 4 main components: head, body, arms, and legs.

**input.js**: All the functions to handle the player input word. We built 2 separate functions to handle player input through clicking the button and pressing the “Enter” key. We also handled the invalid inputs from players by excluding all the characters that are not alphabetical letters and displaying an error box to inform players. Furthermore, we encoded the input transfer from the input page to the main game into Base64 format so that the second player will not be able to see the word entered in the website URL.

**game.js**: All the functions to display the letters and hangman, and handle the game logic. First, we retrieved the input sent from the input page by decoding it. The setup stage consists of drawing the scaffold, displaying the input word in the format of underscore (e.g. dragon => _ _ _ _ _ _) and showing all the letters from the alphabet (A - Z) for players to make a choice. When the second player guesses and chooses a word, that word will become unavailable, and the player cannot choose it again. After each guessing attempt, we will have a function to check if the word includes the selected letter; a part of the hangman will be drawn if it was a wrong attempt, otherwise the game just continues. At the end of each attempt, no matter being right or wrong, 4 functions will always be executed to draw the hangman (if it is wrong), display the word again (e.g. dragon => d _ _ g _ n), display the letters, and check game status. If the second player makes 6 wrong attempts before successfully guessing the word, the game is over and a message will popup to announce it. Otherwise, a congratulation message will be shown to the player.


## Demo

https://github.com/HuyTang10/CPSC_1045_Group_2/assets/158626248/b171914b-9b72-44ed-9bae-9c30794e0401


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Acknowledgements

* [FontSpace](https://www.fontspace.com/)
* [Interface In Game](https://interfaceingame.com/)
* [Tool for creating a decent README file](https://readme.so/)
