'use strict'
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
checkIn(flight, jonas);

//javascript does not have passing by reference, only 
//传递对象的地址

//----------129.First-Class and Higher-Order Functions----------------
//First-Class Functions
//JavaScript treats functions as first-class citizens, this means that functions are simply values
//functions are just another "type" of object
//first-class function is just a feature that a programming language either has or does not have,
//all it means is that all functions are values

//----------130.Functions Accepting Callback Functions------------------