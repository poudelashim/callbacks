//JavaScript is the best!
const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" "); //rest pattern spread operator
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  //higher order function
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};
transformer("JavaScript is fun!", upperFirstWord);
transformer("JavaScript is fun!", oneWord);

//JS uses callbacks all the time

/* Why are callbacks helpful ?
-> makes it easy to slpit the code into more reuseable and interconnected parts. 
->callback funtions allows to create abstractions.

*/
const high5 = function () {
  console.log("✋");
};
// document.addEventListener("click", high5);

["Ashim", "Ashma", "Love"].forEach(high5);
