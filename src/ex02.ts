// 2. Create a generic interface called `Data` with two properties: 
// `id` (number) and `value` (of any type). 
// Define an object of type `Data` where `value` is a string "Generic" and `id` is 1.
// Log the object.

interface Data <T,U>{
  id:T,
  value:U
}

const data: Data <number, string> = { id: 1, value: "Generic" };
console.log(data); // Expected output: { id: 1, value: "Generic" }