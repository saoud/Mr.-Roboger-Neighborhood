# Saoud's 3rd Epicodus project

#### A web-based application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the some exceptions list below:

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

## Description

_This website takes a numerical input from that user. It will then display all of the integers from zero to the input (inclusive) with the following rules applied:_

1. Numbers that contain a "1" digit: all digits are replaced with _"Beep!"_

2. Numbers that contain a "2" digit: all digits are replaced with _"Boop!"_

3. Numbers that contain a "3" digit: all digits are replaced with _"Won't you be my neightbor?"_

## Tests

Describe: roboRoger();  
  
Test: "It should return the string "0" if the number "0" is inputted."    
Expect(roboRoger(0).toEqual("0"));  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!".  
Expect(roboRoger(1).toEqual("0 Beep!"))  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" and all numbers that include numeral 2 replaced by "Boop!"."  
Expect(roboRoger(2).toEqual("0 Beep! Boop!"))  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" all numbers that include the numeral 2 replaced by "Boop!" and all numbers that include numeral 3 replaced by "Won't you be my neighbor?"."  
Expect(roboRoger(3).toEqual("0 Beep! Boop! Won't you be my neighbor?"))  

Test: "It should return a string with rules as the previous test, but the rule for numeral 3 should have priority of numeral 2 which should have priority over numeral 1."  
Expect(roboRoger(13).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?"))  



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
