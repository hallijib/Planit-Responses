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
    var arr = lowercase.split('');
    var hash = new Map();
    var result = [];

    for (let i = 0; i < arr.length; i++) {

      if (hash.get(arr[i]) === undefined) {

        hash.set(arr[i], true);

      } 
      
      if (hash.get(arr[i]) != undefined) {

        var value = hash.get(arr[i]);

        if (value) {

          hash.set(arr[i], !value);
        }

      }

    }
    hash.forEach((v, k) => {

      if (!v)

        result.push(k);

    });

    return result[0];

}

console.log(Reoccurence('Character'));