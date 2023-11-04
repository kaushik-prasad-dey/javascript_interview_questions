/*Difference between filter and find*/
const my_js_array = [
  { name: "kaushik", skill: "full stack", location: "kolkata", age: 20 },
  { name: "Ali", skill: "Frontend", location: "Bihar", age: 30 },
  { name: "Ahemed", skill: "Backend", location: "MP", age: 40 },
  { name: "Sujay", skill: "AI-Engineer", location: "kolkata", age: 45 },
  { name: "Rahul", skill: "FrontEnd", location: "kolkata", age: 50 },
];

console.log(typeof my_js_array);
/* All matching element from filter method */
const filter_array_with_loc = my_js_array.filter(
  (item) => item.location == "kolkata"
);
const filter_array_with_age = my_js_array.filter((item) => item.age > 30);
console.log("filter with location", filter_array_with_loc);
console.log("filter with age", filter_array_with_age);
/* first matching element from find method */
const find_array_with_loc = my_js_array.find(
  (item) => item.location == "kolkata"
);
const find_array_with_age = my_js_array.find((item) => item.age > 30);
console.log("find with location", find_array_with_loc);
console.log("find with age", find_array_with_age);
