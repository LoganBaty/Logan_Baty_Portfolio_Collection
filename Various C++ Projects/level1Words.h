
#include <string>
using namespace std;

template <class Type>
struct wordNode{
    wordNode(string w): word(w), next(nullptr){}
    string word;
    wordNode<Type>* next;
};

template<class Type>
class level1Word {

private:
    int cnt;
public:
    wordNode<Type> *tail;
    wordNode<Type> *head;

    level1Word() {
        tail = nullptr;
        head = nullptr;
        cnt = 0;
    }

    void enqueue(Type word) {
        auto n = new wordNode<Type>(word);

        if (this->isEmpty()) {
            tail = n;
            head = n;
        } else {
            tail->next = n;
            tail = n;
        }
        cnt++;
    }

    bool isEmpty() {
        if (this->head == nullptr && this->tail == nullptr)
            return true;
        else
            return false;
    }

    string search(int s) {
        int i = 0;
        auto temp = this->head;

        while (i < s) {
            temp = temp->next;
            i++;
        }
        return temp->word;
    }

};