/* Remove null, undefined, NaN from array */
const my_array = [null, undefined, NaN, 10, 20, 40, true];
const filtered_array = my_array.filter((elm) => {
  return !isNaN(elm) && elm != undefined && elm != null;
});
console.log(filtered_array);
