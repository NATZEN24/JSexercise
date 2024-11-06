// Task 5
// Given the object below, modify the value of the property city so that the first letter is correctly capitalised.
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
// IMPORTANT: try to use and modify the current value of city rather than manually typing London.
// Expected output:
// {
//     firstName: "Sylvia",
//     lastName: "Sun",
//     city: "London"
// };
person.city = person.city.charAt(0).toUpperCase() + person.city.slice(1).toLowerCase();

console.log(person);