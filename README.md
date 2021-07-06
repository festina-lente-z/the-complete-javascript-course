# The Complete Javascript Course

## 8. How JavaScript Works Behind the Scenes 
### 89. An High-Level Overview of Javascript

### 94. Variable Environment: Hoisting and the TDZ
- Hoisting: Makes some types of variables accessible/usable in the code before they are
actually declared. "Variables lifted to the top of their scope".
- Before execution, code is scanned for variable declarations, and for each variable, a new
property is created in the **variable environment object**.

|pk                             |HOISTED?              |INITIAL VALUE    |SCOPE|
|----                           |----                  |----             |----|
|function declarations          |:white_check_mark: YES|Actual function  |Block|
|var variables                  |:white_check_mark: YES|undefined        |Function|
|let and const variables        |:x: NO                |uninitialized,TDZ|Block|
|function expressions and arrows|Depends it using var or let/const|

>TDZ: Temporal Dead Zone(暂时性死区)

## 10. A Closer Look at Function
### 127. Default Parameters
```javascript
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

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
//如果想跳过第二个参数，直接给第三个参数赋值，可以用undefined,这样第二个参数获取的是默认值
```
#### enhanced object literal syntax（对象字面量的增强写法）
```javascript
const name = 'Amy';
const age = 18;
const gender = 'female';
//ES5
var obj = {
  name: name,
  age: age,
  gender: gender,
}

//ES6
const obj = {
  name,
  age,
  gender,
}
```
```javascript
//ES5
var lufthansa = {
  book: function() {

  }
}

//ES6
const lufthansa = {
  book() {
    
  }
}
```

### 128. How Passing Arguments Works: Value vs. Reference

### 132. The call and apply Methods
```javascript
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
```
