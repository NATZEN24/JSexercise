//Exercise 1: Creating Objects
// Using Object Literals
const person1 = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  // Using Constructor Function
  function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  const person2 = new Person("Jane", 25, "Designer");
  
  // Using Object.create() Method
  const person3 = Object.create(null);
  person3.name = "Mike";
  person3.age = 35;
  person3.profession = "Engineer";

//Exercise 2: Accessing Object Properties
// Now, let's explore how to access properties of JavaScript objects using dot notation and bracket notation.
console.log(person1.name); // Output: John
console.log(person2["age"]); // Output: 25

// Exercise 3: Modifying Object Properties
// In this exercise, we'll learn how to modify existing properties of JavaScript objects.
person1.age = 32;
person2["profession"] = "Manager";

// Exercise 4: Adding New Properties
// Here, we'll see how to add new properties to JavaScript objects dynamically.
person1.location = "New York";
person2["salary"] = 60000;

// Exercise 5: Iterating Through Object Properties
// Iterating through object properties is a common task in JavaScript. Let's explore various methods to achieve this.
// Using for...in loop
for (let key in person1) {
  console.log(`${key}: ${person1[key]}`);
}

// Using Object.keys() method
Object.keys(person2).forEach(key => {
  console.log(`${key}: ${person2[key]}`);
});

// Exercise 6: Checking Property Existence
// We often need to check if a property exists in a JavaScript object. Here's how to do it.
console.log("name" in person1); // Output: true
console.log(Object.prototype.hasOwnProperty.call(person3, "salary")); // Output: false

// Exercise 7: Deleting Properties
// Learn how to delete properties from JavaScript objects.
delete person1.location;
delete person2.salary;

// Exercise 8: Object Methods
// JavaScript objects can also contain methods. Let's add methods to our objects.
person1.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
person2.introduce = () => {
  console.log(`I'm ${person2.name}, a ${person2.age}-year-old ${person2.profession}.`);
};

// Exercise 9: Object Composition
// Object composition is a powerful concept in JavaScript. Let's create a new object by combining properties from existing objects.
const address = {
  city: "San Francisco",
  country: "USA"
};

const personWithAddress = { ...person1, ...address };
console.log(personWithAddress);

// Exercise 10: Object Serialization and Deserialization
// Learn how to serialize JavaScript objects into JSON strings and deserialize JSON strings into JavaScript objects.
const jsonPerson = JSON.stringify(person1);
console.log(jsonPerson);

const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson)

/*  What are JavaScript objects?
    JavaScript objects are complex data structures used to store collections of key-value pairs.
    
    How do I create a JavaScript object?
    You can create JavaScript objects using object literals, constructor functions, or the Object.create() method.
    
    How do I access object properties?
    You can access object properties using dot notation or bracket notation.
    
    Can I add or remove properties from an object?
    Yes, you can add new properties dynamically and delete existing properties using the delete keyword.
    
    What is object serialization and deserialization?
    Object serialization is the process of converting JavaScript objects into JSON strings, while deserialization is the process 
    of converting JSON strings back into JavaScript objects.sedPerson); */