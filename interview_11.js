/* Types of Error in Javascript */
/* 
syntax error: This error occurs when there is a mistake in the syntax of the code.
/*if (x====5{
    console.log("x is 5")
}*/

/* 
Reference error: the error occurs when u trying to access a variable that is not
defined or declared.


const func=()=>{
    console.log(hello);
}
func();
*/

/* Type Error: An error occurs when a value is used 
outside the scope of its data type.

*/
/*let num =15;
console.log(num.split(""));*/
/*let kd = null;
console.log(kd.toUpperCase());*/

/* 
Range Error : The error occurs when a numeric variable or parameters
is outside of its valid range. */

/*let arr1=new Array(-1);
console.log(arr1);*/

/*const checkRange=(num)=>{
    if(num<30) throw new RangeError("this is wrong number");
    return true
}
checkRange(20);*/

/* 
Evaluation Error: 
This error occurs when the `eval()` function is used incorreectly.
*/
/*try{
    throw new EvalError("'Throws an new error'")
}catch(error){
    console.log(error.name, error.message);
}*/

/* 
URI Error: When the wrong charectr(s) are used in a URI function, then
this error is called.

*/

/*console.log(decodeURI("https://www.educative.io/shorteditor"));*/
/*console.log(decodeURI("%sdfk"));
console.log(decodeURIComponent('%'));*/

/*
Internal Error: 
*/
fetch('https://jsonplaceholder.typicode.com/invalidEndpoint')
.then(response=>{
    if(!response.ok){
        throw new Error("Internel Server Error");
    }
    return response.json();
})
.then(data=>console.log('Data:', data))
.catch(error=> console.log('Error',error.message));

















