'use strict';

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

