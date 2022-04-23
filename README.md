Describe: neighborhood(num)

Test 1 "It should return 0 to users input number to array."
Code: neighborhood(4);
Expected Output: [0,1,2,3,4]

Test 2: "It should Change numbers to string" 
Code: neighborhood(4);
Expected Output: ["0","1","2","3","4"]

Test 3: "It shoud check if "3" is included in for loop."
Code: neighborhood(3);
Expected Output: true

Test 4: "It shoud return "Boop!" for number 2."
Code: neighborhood(2);
Expected Output: "Boop!"

Test 5: "It shoud return "Beep!" for number 1"
Code: neighborhood(1);
Expected Output: "Beep!"

TEst 6: "It shoud check if user enter negative number."
Code: neighborhood(-2);
Expected Output: true

Test 7: "It shoud tell user to enter positive number if it"s a negative number."
Code: neighborhood(-2);
Expected Output: "Enter a positive number!" 

Test 8: "It should return correct result."
Code: neighborhood(4);
Expected Output: [0, Beep!, Boop!, Won't you be my Neighbor?,4] 

Test 9: "It should tell the user to enter a number if nothing was entered.."
Code: neighborhood("  ");
Expected Output:"Enter a positive number!"