/* given a string return a new string with the reversed order of charecters.*/

const my_string = "Helloworld";
/*first approach */
const reversed_order_str = (str) => {
  let reversed = "";
  for (let chr of str) {
    reversed = chr + reversed;
  }
  return reversed;
};
console.log(reversed_order_str("kaushik"));

/*second approach */
const reversed_order_string = (str) => {
  return str.split("").reduce((rev, char) => char + rev);
};
console.log(reversed_order_string(my_string));

/* third approach */
const reversed_order_char = (str) => {
  return str.split("").reverse().join("");
};
console.log(reversed_order_char(my_string));
