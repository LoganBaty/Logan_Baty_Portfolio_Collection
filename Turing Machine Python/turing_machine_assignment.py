# Logan Baty
# W01333703
# Date: 11/25/2025
# CS 4110 
# Coding Project - Turing Machines

# Part A: Implement a Turing Machine Simulator
class TuringMachine:
    def __init__(self, states, input_symbols, tape_symbols, transitions, blank_symbol, start_state, accept_states, reject_states):
        self.states = set(states)
        self.input_symbols = set(input_symbols)
        self.tape_symbols = set(tape_symbols)
        self.transitions = transitions  # Dictionary of form {(state, symbol): (new_state, new_symbol, direction)}
        self.blank_symbol = blank_symbol
        self.start_state = start_state
        self.accept_states = set(accept_states)
        self.reject_states = set(reject_states)

        self.tape = []
        self.head_position = 0
        self.current_state = start_state

    # Converts the input string into the tape and Resets the machine to the start state
    def set_input(self, input_string):
        self.tape = [self.blank_symbol] + list(input_string) + [self.blank_symbol]
        self.head_position = 1
        self.current_state = self.start_state

    # Returns the symbol under the head
    def read_symbol(self):
        if self.head_position >= len(self.tape):
            return self.blank_symbol
        return self.tape[self.head_position]

    # Writes a symbol at the current head position
    def write_symbol(self, symbol):
        if self.head_position >= len(self.tape):
            self.tape.extend([self.blank_symbol] * (self.head_position - len(self.tape) + 1))
        self.tape[self.head_position] = symbol

    # Reads the current symbol and performs the transition rule
    def step(self):
        symbol = self.read_symbol()
        key = (self.current_state, symbol)

        if key not in self.transitions:
            return False  # Halt if no transition defined

        new_state, new_symbol, direction = self.transitions[key]
        self.write_symbol(new_symbol)
        self.current_state = new_state

        if direction == 'R':
            self.head_position += 1
        elif direction == 'L':
            self.head_position = max(0, self.head_position - 1)

        return True

    # Executes until machine enters an accept or reject state, if no valid transition exists, or the steps reach 1000
    def run(self, max_steps=1000):
        steps = 0
        while steps < max_steps:
            #self.print_tape()  -- USED TO SEE THE STEPS
            if self.current_state in self.accept_states or self.current_state in self.reject_states:
                break
            if not self.step():
                break
            steps += 1
        #self.print_tape()   -- USED TO SEE THE STEPS

    # Turns tape into a string, returns clean output
    def get_tape_contents(self):
        tape_str = ''.join(self.tape)
        return tape_str.strip(self.blank_symbol)
    
    # Function used to track the tape and head
    def print_tape(self):
        tape_str = ''
        for i, symbol in enumerate(self.tape):
            if i == self.head_position:
                tape_str += f'[{symbol}]'  # Highlight head position
            else:
                tape_str += f' {symbol} '
        print(f"State: {self.current_state} | Tape: {tape_str}")


# Part B: Design a Binary Doubler TM
def create_binary_doubler_tm():
    states = ['start', 'move_right', 'write_zero', 'accept']
    input_symbols = ['0', '1']
    tape_symbols = ['0', '1', '_'] 
    blank_symbol = '_'
    start_state = 'start'
    accept_states = ['accept']
    reject_states = []

    transitions = {
        # Move right over 0s and 1s
        ('start', '0'): ('move_right', '0', 'R'),
        ('start', '1'): ('move_right', '1', 'R'),

        ('move_right', '0'): ('move_right', '0', 'R'),
        ('move_right', '1'): ('move_right', '1', 'R'),

        # When blank is found, write 0 and accept
        ('move_right', '_'): ('write_zero', '0', 'L'),
        ('write_zero', '0'): ('accept', '0', 'R'), 
        ('write_zero', '1'): ('accept', '1', 'R'), 
    }

    return TuringMachine(
        states=states,
        input_symbols=input_symbols,
        tape_symbols=tape_symbols,
        transitions=transitions,
        blank_symbol=blank_symbol,
        start_state=start_state,
        accept_states=accept_states,
        reject_states=reject_states
    )


# Part C: Testing the Binary Doubler TM
def test_binary_doubler():
    test_cases = {
        '1': '10',
        '0': '00',
        '101': '1010',
        '111': '1110',
        '1101': '11010',
        '000': '0000',
    }

    for input_str, expected_output in test_cases.items():
        tm = create_binary_doubler_tm()
        tm.set_input(input_str)
        tm.run()
        output = tm.get_tape_contents()
        print(f"Input: {input_str}")
        print(f"Output: {output}")
        print(f"Expected: {expected_output}")
        print(f"Correct: {output == expected_output}")
        print("-" * 30)


# Part D: String Reverser Function
def create_string_reverser_tm():
    states = [
        'start',
        'q1',
        'q2',
        'q3',
        'q4',
        'q5',
        'accept'
    ]

    input_symbols = ['a', 'b']
    tape_symbols = ['a', 'b', '_', 'X']
    blank_symbol = '_'
    start_state = 'start'
    accept_states = ['accept']
    reject_states = []

    transitions = {
        # start state
        ('start', 'a'): ('start', 'a', 'R'),
        ('start', 'b'): ('start', 'b', 'R'),
        ('start', '_'): ('q1', '_', 'L'),

        # q1 state
        ('q1', 'a'): ('q2', 'X', 'R'),
        ('q1', 'b'): ('q3', 'X', 'R'),
        ('q1', 'X'): ('q1', 'X', 'L'),
        ('q1', '_'): ('q5', '_', 'R'),

        # q2 state
        ('q2', 'a'): ('q2', 'a', 'R'),
        ('q2', 'b'): ('q2', 'b', 'R'),
        ('q2', 'X'): ('q2', 'X', 'R'),
        ('q2', '_'): ('q4', 'a', 'L'),

        # q3 state
        ('q3', 'a'): ('q3', 'a', 'R'),
        ('q3', 'b'): ('q3', 'b', 'R'),
        ('q3', 'X'): ('q3', 'X', 'R'),
        ('q3', '_'): ('q4', 'b', 'L'),

        # q4 state
        ('q4', 'a'): ('q4', 'a', 'L'),
        ('q4', 'b'): ('q4', 'b', 'L'),
        ('q4', 'X'): ('q1', 'X', 'L'),

        # q5 state
        ('q5', 'X'): ('q5', '_', 'R'),
        ('q5', 'b'): ('accept', 'b', 'R'),
        ('q5', 'a'): ('accept', 'a', 'R'),
    }

    return TuringMachine(
        states=states,
        input_symbols=input_symbols,
        tape_symbols=tape_symbols,
        transitions=transitions,
        blank_symbol=blank_symbol,
        start_state=start_state,
        accept_states=accept_states,
        reject_states=reject_states
    )


# Part E: Testing the string reverser
def test_string_reverser():
    test_cases = [
        "", "a", "b", "ab", "ba", "aa", "bb", "aba", "bab",
        "abba", "abab", "baba", "aabb", "bbaa", "aaabbb", "bbbaaa"
    ]

    for input_str in test_cases:
        expected_output = input_str[::-1]  # Python reverse
        tm = create_string_reverser_tm()
        tm.set_input(input_str)
        tm.run()
        output = tm.get_tape_contents()

        print(f"Input: '{input_str}'")
        print(f"Output: '{output}'")
        print(f"Expected: '{expected_output}'")
        print(f"Correct: {output == expected_output}")
        print("-" * 40)



if __name__ == "__main__":
    print("Binary Doubler Test Results...")
    test_binary_doubler()
    print("String Reverser Test Results...")
    test_string_reverser()