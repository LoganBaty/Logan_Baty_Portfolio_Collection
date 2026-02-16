//
// Created by logan on 11/22/2023.
//

#ifndef FINALPROJECT_MULTIPLAYERMENU_H
#define FINALPROJECT_MULTIPLAYERMENU_H

#endif //FINALPROJECT_MULTIPLAYERMENU_H

#include <iostream>

using namespace std;

void multiplayerMenu () {
    string menu = "";

    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "+---+";
    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "+---+\n";

    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "|   |";
    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "|   |\n";

    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "o   |";
    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "o   |\n";

    for (int i = 0; i < 9; i++) {
        menu = menu + " ";
    }
    menu = menu + "/|\\  |";
    for (int i = 0; i < 9; i++) {
        menu = menu + " ";
    }
    menu = menu + "/|\\  |\n";

    for (int i = 0; i < 9; i++) {
        menu = menu + " ";
    }
    menu = menu + "/ \\  |";
    for (int i = 0; i < 9; i++) {
        menu = menu + " ";
    }
    menu = menu + "/ \\  |\n";

    for (int i = 0; i < 14; i++) {
        menu = menu + " ";
    }
    menu = menu + "|";
    for (int i = 0; i < 14; i++) {
        menu = menu + " ";
    }
    menu = menu + "|\n";

    for (int i = 0; i < 10; i++) {
        menu = menu + " ";
    }
    menu = menu + "==========";
    for (int i = 0; i < 4; i++) {
        menu = menu + " ";
    }
    menu = menu + "==========\n";

    cout << menu;
}