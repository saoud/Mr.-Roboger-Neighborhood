# Saoud's 3rd Epicodus project

#### Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

* There are 3 exceptions to the rules above ordered in most imporatant to least:
* 1) The number 32 should be replaced with "Won't you be my neighbor?"
* 2) The number 21 should be replaced with "Boop".
* 3) The number 13 should be replaced with "Won't you be my neighbor?"

#### By Saoud Rana

## Technologies Used

* Javascript
* jquery-3.5.1
* HTML
* CSS/bootstrap
* VS Code
* GitHub / GitPages

## Tests

Describe: roboRogers();

Test: It should return "Won't you be my neighbor?" when "32" is input.

Expect: roboRogers(32).toEqual("Won't you be my neighbor?")

Test: It should return "Won't you be my neighbor?" when "21" is input.

Expect: roboRogers(21).toEqual("Boop")

Test: It should return "Won't you be my neighbor?" when "13" is input.

Expect: roboRogers(13).toEqual("Won't you be my neighbor?")

Test: It should return an empty array if the number "0" is input.

Expect: roboRogers(0).toEqual([0]);

Test: It should return the string "Beep!" if the number "1" is input.

Expect: roboRogers(1).toEqual("Beep!");

Test: It should return a string "Boop!" if the number "2" is input.

Expect: roboRogers(2).toEqual("Boop!");

Test: It should return a string "Won't you be my neighbor?" if the number "3" is input.

Expect: roboRogers(3).toEqual("Won't you be my neighbor?");




## Setup/Installation Requirements

* Open terminal
* _In terminal, type 'git clone https://github.com/saoud/Mr.-Roboger-Neighborhood.git' and press enter._
* _You have two options, you can just drag the index.html file to your browser or you can follow the following steps:_
* _1. In terminal, type 'cd portfolio' and press enter._
* _2. In terminal, type 'code .' and press enter to open project in VS Code._
* _3. Right click on 'index.html' and select 'Open with Live Server' to view page in your favorite web browser._
* _Make sure you have Live Server installed in VS Code https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer_


## Known Bugs

No known bugs at this time

## License

MIT

## Contact Information

githubissues@saoud.dev
