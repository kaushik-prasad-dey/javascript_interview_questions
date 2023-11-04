/* remove duplicate value in javascript */

const my_custom_arr=["kaushik","rahul","kaushik",20,20,10,"rahul"];

/* javascript filter method */
const remove_duplicate_arr=(arr)=>{
  return arr.filter((item, index)=>arr.indexOf(item)==index);
}
console.log("remove array with filter method",remove_duplicate_arr(my_custom_arr));
/*
function remove_duplicate_arr(){

}*/

/* javascript Set Method */
function remove_duplicate_arr_set(arr){
   return [...new Set(arr)];
}
console.log("remove array with set method",remove_duplicate_arr_set(my_custom_arr));

/* javascript foreach method */
const foreach_arr_remove=(arr)=>{
  let new_empty_arr=[]; /* this is my empty array */
  arr.forEach(elm=>{
    if (!new_empty_arr.includes(elm)){
        new_empty_arr.push(elm)
    }
  });
  return new_empty_arr;
};
console.log("remove array with foreach method",foreach_arr_remove(my_custom_arr));


