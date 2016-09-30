# Tic tac toe

## Objective

In order to practice what we have learned regarding OOP and best practices, let's implement a Tic-Tac-Toe (Gato in Spanish) game!

## Rules

* Two players represented with __X__ and __O__
* First time the game is played, __X__ starts
* Each player alternate turns to put a mark in the board on any available slot
* The game ends when either one of the players matches three marks in a horizontal, vertical or diagonal row or there are no more moves available

## Considerations

* Game logic MUST be implemented using OO Javascript and MUST NOT depend on any kind of user interface:
you, as the creator of the code, MUST implement objects that contain everything needed to play the game
and to allow any other developer to reuse your code.
* Will the logic have to change if I want to play on a N x N board instead of the original 3 x 3?
* What if we want to make it configurable for N players instead of 2?
* And, will the logic need to change if we want to create a N x M board instead of N x N?
* Remember this code is supposed to be used by other programmers so they need to be well documented and tested
* Once the game finishes, players are asked if they want to play again. If they do, the player who lost the previous match starts. In case of a draw, the player who did the second-to-last movement starts

## Deliverables

* Class diagram or similar to illustrate how the object are going to communicate among them.
* Code implementation of the game logic.
* Documentation.
* Unit testing.

Once we have all the logic documented and tested, we will create some clients that will use the logic

* A command-line client
* A RESTful API
* A web application
* An electron app

## Milestones

- [x] Make sure the objective, requirements and restrictions are understood
- [x] Create the diagram
- [x] Create the library with all the logic. For this point, investigate NPM and bower and choose one and explain your choice
- [x] Create terminal interface
- [ ] Create web app (Using HTML and CSS)
- [ ] Create RESTful API
- [ ] Create Electron app

Feel free to ask any question at any time
