/* what will be the output of following script */

console.log(1)
setTimeout(() => {console.log(4)}, 1000);
setTimeout(() => {console.log(5)}, 0);
async function myAsyncFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(3);
}
console.log(2)
myAsyncFunction();
