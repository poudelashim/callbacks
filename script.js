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
