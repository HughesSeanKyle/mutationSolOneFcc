/* 
Basic Algorithm Scripting: MutationsPassed
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution One
function mutation(arr) {                                    //1
    var test = arr[1].toLowerCase();                        //2
    var target = arr[0].toLowerCase();                      //3
    for (var i = 0; i < test.length; i++) {                 //4
      if (target.indexOf(test[i]) < 0)                      //5
      return false;                                         //6
    }
    return true;                                            //7
  }

  
console.log(mutation(["Alien", "line"]));


//Notes
/*
//1
Function which takes in array as an argument

//2 && //3
The toLowerCase() method returns the calling string value converted to lower case.
Source - [https://devdocs.io/javascript/global_objects/string/tolowercase]

In //2 The second word in the array is converted to lowercase and stored in the test variable

The same is done for the first word in the array as above and stored in the target variable

//4, //5 && //6
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
Source - [https://devdocs.io/javascript/global_objects/string/indexof]

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
Source-[https://devdocs.io/javascript/statements/for]

[initialization]    = var i = 0;
[condition]         = i < test.length;
[final-expression]  = i++

This loop will run for the length of the second word in the array (From index 0 to 3 which is 4 iterations)

By adding "test[i]" in the argument of the indexOf method this line checks if any of the indices are missing from the target word (first word). If a value is not found using the indexOf method it will return -1. If -1 is returned in this case the loop will return false as one value/letter in the second word (test) is not present in the first (target).

//7
Will return true if all values/letters in test is present in target

*/