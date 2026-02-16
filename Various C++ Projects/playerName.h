
#include <iostream>
#include <string>
using namespace std;

template <class Type>
struct playerNode {
    playerNode(string n): name(n), next(nullptr){} //constructor
    string name;
    playerNode<Type> *next;
};

template <class Type>
class playerName {

public:
    playerNode<Type>* head;
    playerNode<Type>* tail;

    playerName(): head(nullptr), tail(nullptr) {}

    void addPlayer(Type name) {
        auto n = new playerNode<Type>(name);

        if (this->isEmpty()) {
            tail = n;
            head = n;
        } else {
            tail->next = n;
            tail = n;
        }
    }

    bool isEmpty() {
        if (this->head == nullptr && this->tail == nullptr)
            return true;
        else
            return false;
    }


    void displayWinners () {
        if(this->head == nullptr) {

        }
        else {
            cout << "\n\tSINGLEPLAYER GAME WINNERS\n";
            auto temp = this->head;
            int cnt = 1;
            while (temp != nullptr) {
                cout << "\t" << cnt << "- " << temp->name << endl;
                temp = temp->next;
                cnt++;
            }
        }
    }
};