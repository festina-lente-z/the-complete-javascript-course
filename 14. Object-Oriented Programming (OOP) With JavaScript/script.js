'use strict';
/* 
// 205. Constructor Functions and the new Operator
const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
}
// 不要在构造函数中创建method。因为如果要用这个构造函数创建成百上千个实例，每个实例都会携带这些method, 
// that would be terrible for the performance of our code
// 为了解决这个问题，we are gonna use prototypes and prototype inheritance
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。


// 206. Prototypes
// first each and every function in JavaScript automatically has a property called prototype
// And that includes, of course, constructor functions
// Now every object that's created by a certain constructor function will get access to all
// the methods and properties that we define on the constructors prototype property.
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}
// the "this" keyword in each of them is as always set to the object that is calling the method
// this 指向调用这个函数的对象 （下面例子里的jonas）

jonas.calcAge();
matilda.calcAge();
// any object always has access to the methods and properties from its prototype
// and the prototype of Jonas and Matilda is Person.prototype
console.log(jonas.__proto__);
// __proto__ is the prototype of Jonas ,is not the prototype property
// each object has a special property called __proto__
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
// __proto__ of the Jonas object is essentially the prototype property of the constructor function
console.log(Person.prototype === Person.__proto__); // false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); */

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
Person.prototype.greet = function() {
  console.log('Hello');
}
 
function newPerson(firstName, birthYear) {
  // 1. Create an empty object
  const person = {};
 
  // 2. Link the object with its constructor's prototype
  person.__proto__ = Person.prototype;
 
  // 3. Bind the 'this' keyword to the newly created 'person' object
  // Here's it's called 'that' to not collide with the reserved 'this' keyword
  const that = person;
 
  // 4. Execute the constructor function
  Person.call(that, firstName, birthYear);
 
  // 5. Return 'this'
  return that;
}
 
const john = newPerson('John', 1990);
const amy = new Person('John', 1990)
console.log(john);
console.log(amy);

