#include <iostream>
#include "stateQueue.h"
#include "level1Words.h"
#include "randomWord.h"
#include "wordGuess.h"
#include "usedLetters.h"
#include "multiplayerMenu.h"
#include "menu.h"
#include "playerName.h"
#include <string>

using namespace std;

int main() {

    // variables
    char level;
    bool singleplayer = false;
    bool multiplayer = false;
    bool easy = false;
    bool hard = false;
    bool extraHard = false;
    bool play = true;
    string correctWord;
    playerName<string> names;
    string name;
    playerName<string> winners;

    while (play) {
        // resetting game mode
        easy = false;
        hard = false;
        extraHard = false;
        singleplayer = false;
        multiplayer = false;

        // menu offering single or multi player
        menu();
        cin >> level;

        if (level == 's' || level == 'S')
            singleplayer = true;
        else if (level == 'm' || level == 'M')
            multiplayer = true;
        else {
            singleplayer = false;
            multiplayer = false;
        }

        while (!singleplayer && !multiplayer) {
            cout << "\n\tNot a valid answer.\n";
            cout << "\tPick the game level: \n" << "\t (S) Singleplayer\n" << "\t (M) Multiplayer\n";
            cout << "\n\tGame Level: ";
            cin >> level;
            if (level == 's' || level == 'S')
                singleplayer = true;
            else if (level == 'm' || level == 'M')
                multiplayer = true;
        }


        if (singleplayer) {   // SINGLEPLAYER
            char answer;
            // Singleplayer menu
            cout << "\n\n\n\t=====SINGLEPLAYER=====\n";
            cout << "\n\tEnter your name: ";
            cin >> name;
            names.addPlayer(name);
            cout << "\t(E) EASY\n" << "\t(H) HARD\n" << "\t(S) SUPER HARD\n";
            cout << "\tSelect the difficulty level: ";
            cin >> answer;

            if (answer == 'E' || answer == 'e')
                easy = true;
            else if (answer == 'H' || answer == 'h')
                hard = true;
            else if (answer == 'S' || answer == 's')
                extraHard = true;
            else {
                easy = false;
                hard = false;
                extraHard = false;
            }

            while (!easy && !hard && !extraHard) {
                cout << "\n\tNot a valid answer.\n";
                cout << "\t (E) EASY\n" << "\t (H) HARD\n" << "\t (S) SUPER HARD\n";
                cout << "\tSelect the difficulty level: \n";
                cin >> answer;
                if (answer == 'E' || answer == 'e')
                    easy = true;
                else if (answer == 'H' || answer == 'h')
                    hard = true;
                else if (answer == 'S' || answer == 's')
                    extraHard = true;
            }


            // create the lists of easy, hard, and extra hard words
            level1Word<string> l1;
            l1.enqueue("trade");
            l1.enqueue("paper");
            l1.enqueue("need");
            l1.enqueue("find");
            l1.enqueue("adult");
            l1.enqueue("mine");
            l1.enqueue("ride");
            l1.enqueue("fake");
            l1.enqueue("rope");
            l1.enqueue("creak");
            l1.enqueue("feel");
            l1.enqueue("shoe");
            l1.enqueue("shape");
            l1.enqueue("hard");
            l1.enqueue("slime");
            l1.enqueue("wrap");
            l1.enqueue("sheep");
            l1.enqueue("proud");
            l1.enqueue("quite");
            l1.enqueue("vase");

            level1Word<string> l2;
            l2.enqueue("baseball");
            l2.enqueue("houses");
            l2.enqueue("quickly");
            l2.enqueue("vermont");
            l2.enqueue("squirrel");
            l2.enqueue("volcano");
            l2.enqueue("forest");
            l2.enqueue("empire");
            l2.enqueue("practice");
            l2.enqueue("breakfast");
            l2.enqueue("orange");
            l2.enqueue("grange");
            l2.enqueue("cracker");
            l2.enqueue("climber");
            l2.enqueue("western");
            l2.enqueue("mountain");
            l2.enqueue("astronaut");
            l2.enqueue("reaper");
            l2.enqueue("present");
            l2.enqueue("wreath");

            level1Word<string> l3;
            l3.enqueue("abbreviation");
            l3.enqueue("bachelorette");
            l3.enqueue("earsplitting");
            l3.enqueue("fabrications");
            l3.enqueue("galvanometer");
            l3.enqueue("nationalism");
            l3.enqueue("fossilisation");
            l3.enqueue("quadrangular");
            l3.enqueue("sabermetrics");
            l3.enqueue("absentminded");
            l3.enqueue("abandonment");
            l3.enqueue("eagerness");
            l3.enqueue("icebreakers");
            l3.enqueue("quadcopters");
            l3.enqueue("tablecloths");
            l3.enqueue("zealousness");
            l3.enqueue("abomination");
            l3.enqueue("adventurous");
            l3.enqueue("backpacking");
            l3.enqueue("discovering");


            // Picking the word that the user will search for.
            if (easy) {
                correctWord = l1.search(randomWord());
            } else if (hard) {
                correctWord = l2.search(randomWord());
            } else {
                correctWord = l3.search(randomWord());
            }

        } else if (multiplayer) {
            cout << "\n\n\n\t =====MULTIPLAYER======\n";
            multiplayerMenu();
            cout << "\n\tEnter a word for your friend to guess: ";
            cin >> correctWord;
            cout << "\n\n\n\n\n\n\n";
        }

        // beginning the game
        string guess;
        string prevGuess;
        char letter;
        int state = 1;

        stateStack<string> s1;
        s1.statePush(state);
        cout << endl << s1.top->display;
        cout << endl;
        cout << "\t" << wordGuess(correctWord);

        guess = wordGuess(correctWord);
        prevGuess = guess;

        usedLetters<char> letterList;

        while (guess != correctWord && state < 7) {

            cout << "\n\tEnter a letter to guess if it is in the word!\n";
            cout << "\tGuess: ";
            cin >> letter;
            cout << endl;

            while (letterList.checkList(letter)) {
                cout << "\tYou have already guessed that letter.\n";
                cout << "\n\tEnter a letter to guess if it is in the word!\n";
                cout << "\tGuess: ";
                cin >> letter;
                cout << endl;
            }

            letterList.addLetter(letter);

            prevGuess = guess;
            guess = letterGuess(correctWord, guess, letter);

            if (prevGuess != guess) {
                cout << "\n\n\n\n\n" << s1.top->display << endl;
                cout << "\t" << guess;
            } else {
                state = state + 1;
                s1.statePush(state);
                cout << "\n\n\n\n\n" << s1.top->display << endl;
                cout << "\t" << letter << " was not found in the word." << endl;
                cout << "\t" << guess;
            }

        } // end while loop

        if (guess != correctWord) {
            s1.statePush(7);
            cout << "\n\n\n\n\n" << s1.top->display << endl;
            cout << "\t" << guess << endl;
            cout << "\tOh no! You did not guess the word in time!" << endl;
            cout << "\tThe correct word was: " << correctWord << endl;
        } else {
            if (singleplayer)
                winners.addPlayer(name);
            winnerMenu();
            cout << "\t" << correctWord << " was the right word!\n";
        }

        winners.displayWinners();

        // Option to continue playing
        char again;
        cout << "\n\tDo you want to play again?\n";
        cout << "\t(Y) YES\t(N) NO\n";
        cout << "\tEnter answer here: ";
        cin >> again;

        while (again != 'y' && again != 'Y' && again != 'n' && again != 'N') {
            cout << "\n\tThat is not a valid answer.\n";
            cout << "\n\tDo you want to play again?\n";
            cout << "\t(Y) YES\t(N) NO\n";
            cout << "\tEnter answer here: ";
            cin >> again;
        }

        if (again == 'Y' || again == 'y')
            play = true;
        else
            play = false;
    }
}
