'use strict'
/*
 //---------127.Default Parameters------------
const bookings = [];

const createBooking = function(
  flightNum,
  numPassengers = 1, 
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  //console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);//如果想跳过第二个参数，直接给第三个参数赋值，可以用undefined,这样第二个参数获取的是默认值

//--------128.How Passing Arguments Works: Value vs. Reference--------------------
const flight = 'LH234';//primitive type 原始类型
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
}
//filghtNum is a copy of original value
//when we pass a reference type to a function what is copied is really just a reference
//to the object in the memory heap
const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 24739479284) {
    alert('Checked in')
  } else {
    alert('Wrong passport!')
  }
}

//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

//Is the same as doing...
const filghtNum = flight;
const passenger = jonas;
//point the same object in the memory heap

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() *
  100000000000);
}
//Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。
newPassport(jonas);
//checkIn(flight, jonas);

//javascript does not have passing by reference, only 
//传递对象的地址

//----------129.First-Class and Higher-Order Functions----------------
//First-Class Functions
//JavaScript treats functions as first-class citizens, this means that functions are simply values
//functions are just another "type" of object
//first-class function is just a feature that a programming language either has or does not have,
//all it means is that all functions are values

//----------130.Functions Accepting Callback Functions------------------
const oneWord = function(str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// spread operator 
// destructive assignment

// Higher-order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// Callback Functions Advantages: 
// 1. It makes it easy to split up or code into more reusable and interconnected parts
// 2. It allows us to create abstraction(抽象)
// what abstract and means is that we hide the detail of some code implementation because we don't really care 
// about all that detail. 

// ---------131. Functions Returning Functions------------
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}
const greeterHey = greet('Hey');//greeterHey存储greet函数的返回值
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//Chanllenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Jonas');
*/

// ----------132. The call and apply Methods-------------
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
  }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// Dose NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
// Call 和 Apply 唯一区别是 apply does not receive a list of arguments after the this keyword
// Apply method 第二个参数是一个数组
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// 在函数调用时使用展开语法，等价于apply的方式
//apply现在基本不用，而是用展开语法
book.call(swiss, ...flightData);
console.log(swiss);
// 现代js中更常使用 call+ ...展开语法 的方法

// ----------133. The bind Method-------------
// The difference is that bind does not immediately call the function
// instead it returns a new function where the this keyword is bound
// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
// set in stone:一成不变的

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);//可以保持一些参数不变
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
// partial application means that a part of the arguments of the original function are already applied

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++
  console.log(this.planes);
}