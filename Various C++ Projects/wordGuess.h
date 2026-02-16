//
// Created by logan on 11/8/2023.
//

#ifndef FINALPROJECT_WORDGUESS_H
#define FINALPROJECT_WORDGUESS_H

#endif //FINALPROJECT_WORDGUESS_H

#include <string>
#include <iostream>

using namespace std;

string wordGuess(string correctWord) {
    string cW = correctWord;
    string out;
    for (int i = 0; i < cW.size(); i++) {
        out += "_";
    }
    return out;
};

string letterGuess(string correctWord, string guess, char letter) {
    string cW = correctWord;
    string g = guess;
    char l = letter;
    char space = '_';
    string newOut = "";
    for (int i = 0; i < cW.size(); i++) {
        if (g.at(i) == space) {
            if (l == cW.at(i)) {
                newOut += l;
            }
            else {
                newOut += '_';
            }
        }
        else {
            newOut += g.at(i);
        }
    }
    return newOut;
}