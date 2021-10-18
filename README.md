240511240511# The Complete Javascript Course

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

## 14. OOP

### 203. What is Object-Oriented Programming?

:point_right: Object-oriented programming (OOP) is a programming *paradigm* based on the concept of objects;

> Paradigm: Style of code, "how" we write and organize code

:point_right:  We use objects to **model** (describe) *real-world* or *abstract features*;

> real-world: user or todo list item
>
> abstract features: HTML component or data structure

:point_right:  Objects may contain data (properties) and code (methods). By using objects, we pack **data and the corresponding behavior** into one block;

:point_right:  In OOP, objects are self-contained pieces/blocks of code;

:point_right:  Objects are **building blocks** of applications, and **interact** with one another;

:point_right:  Interactions happen through a **public interface** (API): methods that the code **outside** of the object can access and use to communicate with the object;

:point_right:  OOP was developed with the goal of **organizing** code, to make it **more flexible and easier to maintain** (avoid "spaghetti code").

![avatar](/Users/whz/web-projects/the-complete-javascript-course/img/oop1.png)



:point_right:  **Abstraction:** Ignoring or hiding details that **don't matter,** allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

![avatar](/Users/whz/web-projects/the-complete-javascript-course/img/oop2.jpeg)

:point_right:  **Encapsulation (封装):** Keeping properties and methods **private** inside the class, so they are **not accessible from outside the class.** Some methods can be **exposed** as a public interface (API).



:point_right:  **Inheritance:** Making all properties and methods of a certain class **available to a child class,** forming a hierarchical (分层的) relationship between classes. This allows us to **reuse common logic** and to model real-world relationships.



:point_right:  **Polymorphism (多态性):** A child class can **overwrite (改写)** a method it inherited from a parent class [it's more complex that, but enough for our purposes].

### 204. OOP in JavaScript

:point_right: **Prototypal inheritance:** The prototype contains methods (behavior) that are **accessible to all objects linked to that prototype;**

> an instance inheriting from a class

:point_right: Behavior is **delegated** to the linked prototype object.

**Q: How do we implement Object-Oriented Programming in JavaScript in practice?**

















