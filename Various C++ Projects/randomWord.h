//
// Created by logan on 11/6/2023.
//

#ifndef FINALPROJECT_RANDOMWORD_H
#define FINALPROJECT_RANDOMWORD_H

#endif //FINALPROJECT_RANDOMWORD_H

#include <iostream>
#include <cstdlib>

using namespace std;

int randomWord() {
    srand((unsigned) time(NULL));

    int random = 0 + (rand() % 20);

    return random;
}