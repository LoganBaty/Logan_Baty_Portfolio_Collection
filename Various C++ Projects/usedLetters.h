
#include <iostream>
using namespace std;

template <class Type>
struct letterNode {
    letterNode(char l): letter(l), next(nullptr){} //constructor
    char letter;
    letterNode<char> *next;
};

template <class Type>
class usedLetters {

public:
    letterNode<Type>* head;

    usedLetters(): head(nullptr) {}

    void addLetter(char letter) {
        auto newLetter = new letterNode<char>(letter);
        if (head == nullptr) {
            this->head = newLetter;
            newLetter->next = nullptr;
        }
        else {
            newLetter->next = this->head;
            this->head = newLetter;
        }
    }

    bool checkList(char letter) {
        auto temp = this->head;
        while (temp != nullptr) {
            if (temp->letter == letter) {
                return true;
            }
            temp = temp->next;
        }
        return false;
    }


};