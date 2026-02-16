//
// Created by logan on 10/20/2023.
//

#ifndef FINALPROJECT_STATEQUEUE_H
#define FINALPROJECT_STATEQUEUE_H

#endif //FINALPROJECT_STATEQUEUE_H

#include <string>

using namespace std;

template <class Type>
struct Node{
    Node(string d): display(d), next(nullptr){} //constructor
    string display;
    Node<Type>* next;
};

template<class Type>
class stateStack{

    public:
        Node<Type>* top;

        stateStack(): top(nullptr) {}

        void statePush(int state) {
           if (state == 1) {
               auto n = new Node<Type>(stateNode(1));
               top = n;
           }
           else if (state == 2) {
               auto n = new Node<Type>(stateNode(2));
               top->next = n;
               top = n;
           }
           else if (state == 3) {
               auto n = new Node<Type>(stateNode(3));
               top->next = n;
               top = n;
           }
           else if (state == 4) {
               auto n = new Node<Type>(stateNode(4));
               top->next = n;
               top = n;
           }
           else if (state == 5) {
               auto n = new Node<Type>(stateNode(5));
               top->next = n;
               top = n;
           }
           else if (state == 6) {
               auto n = new Node<Type>(stateNode(6));
               top->next = n;
               top = n;
           }
           else if (state == 7) {
               auto n = new Node<Type>(stateNode(7));
               top->next = n;
               top = n;
           }
        }

        string stateNode(int state) {
            string display = "\n";

            if (state == 1) {
                display = "\t  +---+\n";
                display = display + "\t  |   |\n";
                for (int i = 0; i < 4; i++) {
                    display = display + "\t      |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 2) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                for (int i = 0; i < 3; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 3) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                display = display + "\t |   |\n";
                for (int i = 0; i < 2; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 4) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                display = display + "\t/|   |\n";
                for (int i = 0; i < 2; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 5) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                display = display + "\t/|\\  |\n";
                for (int i = 0; i < 2; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 6) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                display = display + "\t/|\\  |\n";
                display = display + "\t/    |\n";
                for (int i = 0; i < 1; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }

            if (state == 7) {
                display = display + "\t +---+\n";
                display = display + "\t |   |\n";
                display = display + "\t o   |\n";
                display = display + "\t/|\\  |\n";
                display = display + "\t/ \\  |\n";
                for (int i = 0; i < 1; i++) {
                    display = display + "\t     |\n";
                }
                display = display + "\t =========\n";
            }
            return display;
        }


    };

