/* 
Given a string and from that string return the charecter 
which is most commonly used in that string 
"abcccddddff"
 a => 1 time || b=> 1 time || c=> 3 times || d=> 4 times || f=> 2 times
 a:1
 b:1
 c:3
 d:4
 f:2
*/

const max_char_print = (string) => {
  const charMap = {};
  let max = 0,
    maxChar = "";

  //string="abcccdddff"
  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  console.log("charMapVal",charMap);
  for(let char in charMap){
    if(charMap[char]>max){
        max=charMap[char];
        maxChar=char;
    }
  }
  return maxChar;
};

console.log(max_char_print("abcccddddff"))
