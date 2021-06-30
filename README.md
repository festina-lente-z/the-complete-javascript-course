# the-complete-javascript-course

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