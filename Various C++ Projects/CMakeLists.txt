cmake_minimum_required(VERSION 3.26)
project(finalProject)

set(CMAKE_CXX_STANDARD 17)

add_executable(finalProject main.cpp
        stateQueue.h
        level1Words.h
        randomWord.h
        wordGuess.h
        menu.h
        usedLetters.h
        multiplayerMenu.h
        playerName.h
)
