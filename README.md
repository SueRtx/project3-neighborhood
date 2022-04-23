# Mr. Roboger's Neighborhood

#### By Sue Roberts

#### A web application that takes a number from the user and returns a range of numbers with various substitutions. 

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* javaScript

## Description

This application  takes a number from the user and returns a range of numbers from 0 to inputted number with the following substitutions. Number 1 with "Beep!", 2 with "Boop!",and 3 with "Won't you be my neighbor?". The first substitution should apply unless the second does, and the same with the second and third.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html to your browser.

## Known Bugs

* None

## License

MIT

Copyright (c) 2022 Sue Roberts

## Test 

Describe: neighborhood(num)

Test 1 "It should return 0 to users input number to array."
Code: neighborhood(4);
Expected Output: [0,1,2,3,4]

Test 2: "It should Change numbers to string" 
Code: neighborhood(4);
Expected Output: ["0","1","2","3","4"]

Test 3: "It should check if "3" is included in for loop."
Code: neighborhood(3);
Expected Output: true

Test 4: "It should return "Boop!" for number 2."
Code: neighborhood(2);
Expected Output: "Boop!"

Test 5: "It should return "Beep!" for number 1"
Code: neighborhood(1);
Expected Output: "Beep!"

TEst 6: "It should check if user entered negative number."
Code: neighborhood(-2);
Expected Output: true

Test 7: "It should tell user to enter a positive number if it"s a negative number."
Code: neighborhood(-2);
Expected Output: "Enter a positive number!" 

Test 8: "It should return the correct result."
Code: neighborhood(4);
Expected Output: [0, Beep!, Boop!, Won't you be my Neighbor?,4] 

Test 9: "It should tell the user to enter a number if nothing was entered.."
Code: neighborhood("  ");
Expected Output:"Enter a positive number!"