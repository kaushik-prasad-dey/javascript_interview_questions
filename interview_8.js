/* 
Given a string , return true if the string is a palindrome
or flase if it is not palindrome. 
So, Palindrome are string that form the same word if it is reversed.
it includes spaces and also punctuation in determining if the string
is a palindrome.
example
console.log("abba") == true
console.log("kaushik")== flase
console.log("abcdefgh") === false 
*/

/* solution 1 */
function palindrome_text(str) {
  return str.split("").reverse().join("") == str;
}
console.log(palindrome_text("abba"));
console.log(palindrome_text("kaushik"));
console.log(palindrome_text("abcdefgh"));
console.log(palindrome_text("kbbk"));

/* solution 2 */
function palindrome_text_1(str){
    return str.split("").every((char,i)=>{
        return char === str[str.length-i-1];
    })
};
console.log("new function",palindrome_text_1("kaushik"));
console.log("new function",palindrome_text_1("abcdefgh"));
console.log("new function",palindrome_text_1("abba"));
console.log("new function",palindrome_text_1("kbbk"));
