# Logan Baty
# CS 3620
# M2 Choose Your Own Adventure

import os

# Global Path Variable
path = "story_texts/"
option1 = ""
option2 = ""

# Text File Dictionary 
choices_to_txtFile = {
    "road" : "road.txt",
    "trailhead" : "trailhead.txt",
    "approach cabin" : "approach.txt",
    "keep running" : "lake.txt",
    "enter trail" : "trail_sign.txt",
    "stay" : "onRoad.txt",
    "search key" : "search_key.txt",
    "search out back" : "search_out_back.txt",
    "run into woods" : "enter_woods.txt",
    "head back" : "head_to_car.txt",
    "left" : "lake.txt",
    "right" : "right.txt",
    "take gun" : "take_shed_gun.txt",
    "4x4" : "start_4x4.txt", # add 4x4
    "mountain" : "mountain.txt",
    "ranger station" : "station.txt", 
    "keep going" : "final_stay_on_road.txt",
    "leave road" : "leave_road.txt",
    "get in" : "enter_boat.txt",
    "paddle" : "paddle.txt",
    "stay on lake" : "stay_on_lake.txt",
    "follow shore" : "leave_lake.txt",
    "bunker down" : "bunker_down.txt",
    "hunt" : "hunt.txt",
    "try radio" : "try_radio.txt",
    "keep exploring" : "cont_explore.txt",
    "use trail" : "use_trail.txt",
    "cut trail" : "cut_trail.txt", 
    "turn off" : "turn_off.txt", 
    "talk back" : "talk.txt",
    "shoot" : "shoot.txt",
    "don't shoot" : "dont_shoot.txt",
    "try to start" : "start_4x4.txt",
    "climb" : "hunting_stand.txt",
    "run" : "keep_going.txt",
    "cave" : "enter_cave.txt",
    "woods" : "flee_cave.txt",
    "leave road" : "leave_road.txt",
    "climb down" : "climb_down.txt",
    "wait" : "wait.txt"
}

choices_to_next = {
    "Intro.txt" : ["road", "trailhead"],
    "road.txt" : ["stay", "enter trail"],
    "trailhead.txt" : ["approach cabin", "keep running"],
    "approach.txt" : ["search key", "search out back"],
    "onRoad.txt" : ["run into woods", "head back"],
    "trail_sign.txt" : ["right", "left"],
    "search_key.txt" : ["ending", "ending"],
    "search_out_back.txt" : ["take gun", "4x4"],
    "enter_woods.txt" : ["mountain", "ranger station"],
    "head_to_car.txt" : ["leave road", "keep going"],
    "lake.txt" : ["get in", "follow shore"],
    "take_shed_gun.txt" : ["bunker down", "hunt"],
    "moutain.txt" : ["ending", "ending"],
    "station.txt" : ["try radio", "keep exploring"],
    "final_stay_on_road.txt" : ["ending", "ending"],
    "enter_boat.txt" : ["stay on lake", "paddle"],
    "stay_on_lake.txt" : ["ending", "ending"],
    "paddle.txt" : ["ending", "ending"],
    "leave_lake.txt" : ["mountain", "ranger station"], 
    "bunker_down.txt" : ["ending", "ending"],
    "hunt.txt" : ["use trail", "cut trail"],
    "try_radio.txt" : ["turn off", "talk back"],
    "cont_explore.txt" : ["shoot", "don't shoot"],
    "use_trail.txt" : ["ending", "ending"],
    "cut_trail.txt" : ["ending", "ending"],
    "turn_off.txt" : ["ending", "ending"],
    "talk.txt" : ["ending", "ending"],
    "shoot.txt" : ["ending", "ending"],
    "dont_shoot.txt" : ["ending", "ending"],
    "start_4x4.txt" : ["ending", "ending"],
    "mountain.txt" : ["ending" , "ending"],
    "right.txt" : ["climb", "run"],
    "hunting_stand.txt" : ["climb down", "wait"],
    "climb_down.txt" : ["ending", "ending"],
    "ending.txt" : ["ending", "ending"],
    "keep_going.txt" : ["cave", "woods"],
    "enter_cave.txt" : ["ending", "ending"],
    "flee_cave.txt" : ["ending", "ending"],
    "leave_road.txt" : ["mountain", "ranger station"],
    "leave_lake.txt" : ["mountain", "ranger station"],
    "wait.txt" : ["ending", "ending"]
}

# function to select a text file to read
def read_text_func(file):
    
    try:
        with open(file, "r") as f:
            content = f.read()
            print(content)
            # set options based on text file
            filename = os.path.basename(file)
            global option1 
            option1 = choices_to_next[filename][0]
            global option2 
            option2 = choices_to_next[filename][1]
    except FileNotFoundError:
        print(f"Error: The file '{file}.txt' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

    return 

# function to check if the user input is valid
def input_func(option1, option2, choice):
    if (choice.lower() != option1 and choice.lower() != option2):
        print(f"That is not a valid answer. Enter {option1} or {option2}.")
        choice = input("Choice: ")
        return input_func(option1, option2, choice)
    else:
        return choice

# function to check if story is over
def check_end_func(file):
    isEnd = False
    try:
        with open(file, "r") as f:
            lines = f.readlines()
            if lines:
                last_line = lines[-1].strip()
                words = last_line.split()
                if words:
                    if words[-1] == "end":
                        isEnd = True
    except FileNotFoundError:
        print(f"Error: The file '{file}.txt' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

    return isEnd

############# RUN STORY #############
#Intro
read_text_func(f"{path}Intro.txt")
usrInput = input("Choice: ")
validated_input = input_func(option1, option2, usrInput)

# rest of story
while check_end_func(f"{path}{choices_to_txtFile[validated_input]}") != True:
    read_text_func(f"{path}{choices_to_txtFile[validated_input]}")
    usrInput = input("Choice: ")
    validated_input = input_func(option1, option2, usrInput)

# ending 
read_text_func(f"{path}{choices_to_txtFile[validated_input]}")
print()