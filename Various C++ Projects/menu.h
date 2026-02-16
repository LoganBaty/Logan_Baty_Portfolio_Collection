//
// Created by logan on 11/8/2023.
//

#ifndef FINALPROJECT_MENU_H
#define FINALPROJECT_MENU_H

#endif //FINALPROJECT_MENU_H

#include <string>
#include <iostream>

using namespace std;

void menu() {
    string menu = "";

    menu = "\n\tThe";
    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "+---+\n";

    menu = menu + "\tHangman";
    for (int i = 0; i < 6; i++) {
        menu = menu + " ";
    }
    menu = menu + "|   |\n";

    menu = menu + "\tGame";
    for (int i = 0; i < 9; i++) {
        menu = menu + " ";
    }
    menu = menu + "o   |\n";

    menu = menu + "\t";
    for (int i = 0; i < 12; i++) {
        menu = menu + " ";
    }
    menu = menu + "/|\\  |\n";

    menu = menu + "\t";
    for (int i = 0; i < 12; i++) {
        menu = menu + " ";
    }
    menu = menu + "/ \\  |\n";

    menu = menu + "\t";
    for (int i = 0; i < 17; i++) {
        menu = menu + " ";
    }
    menu = menu + "|\n";

    menu = menu + "\t";
    for (int i = 0; i < 13; i++) {
        menu = menu + " ";
    }
    menu = menu + "==========\n";

    menu = menu + "\tPick the game level: \n";
    menu = menu + "\t (S) Singleplayer\n";
    menu = menu + "\t (M) Multiplayer\n";
    menu = menu + "\tGame Level: ";
    cout << menu;
}

void winnerMenu () {
    cout << "\n\n\n\n\n\n";
    cout << "\t\t+---+\n";
    cout << "\t\t|   |\n";
    cout << "\t\\o/\t" << "    |\n";
    cout << "\t |\t" << "    |\n";
    cout << "\t/ \\\t" << "    |\n";
    cout << "\t\t==========\n";
    cout << "\n\tCONGRATULATIONS!\n";
}