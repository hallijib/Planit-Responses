// Challenge 2:
// Write a solution to find the character that has the highest number of occurrences within a certain string, ignoring
// case. If there is more than one character with equal highest occurrences, return the character that appeared first
// within the string.
// For example:
// Input: "Character"
// Output: c

//In visual studio code click Run / Run Without Debugging to run

let Reoccurence = function (input) {

    var lowercase = input.toLowerCase();

    var maximum = 0;

    var maximumChar = '';

        lowercase.split('').forEach(function(char){

        if(lowercase.split(char).length > maximum) {

            maximum = lowercase.split(char).length;

            maximumChar = char;
            }
        });
    return maximumChar;

}

console.log(Reoccurence('Character'));