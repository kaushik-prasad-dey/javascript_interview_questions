/* var, let and const */
// example using var
var x=10;
if (true){
    var x =20;
    console.log(x) //output is 20
}
console.log("var keyword output",x); //output is 20
/* 
var has a function level scope, so the value of x
is modified within the if block and outside the if block as well.
*/

// example using let keyword
let m=10;
if(true){
    let m =20;
    console.log("let keyword inside the if condition",m);
}
console.log("let keyword outside the if condition",m);
/* 
let has a block level scope. so, the value of m
is not modified outside the if block but it has
modified inside the if block.
*/

// example using const keyword
const mn="kaushiksssss";
//mn="any name";
console.log(mn);
/* 
once you declare any value inside this variable which has const keyword
you can't reassign the other value .
*/
/* 
in summary we can say that
var has a function level scope where let has a block level scope and const once
you declare any variable with const keyword, you can't reassign any value or not
update this variable.

*/