# The Complete Javascript Course

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

## enhanced object literal syntax（对象字面量的增强写法）
```javascript
const name = 'Amy';
const age = 18;
const gender = 'female';
//ES5
const obj = {
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
