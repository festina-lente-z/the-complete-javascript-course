'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const p = document.querySelector('p');
// p.textContent = 'My name is Bella!'
// alert('Text set!');
// p.style.color = 'red';

// Example: Timer with callback
// const p = document.querySelector('p');
// setTimeout(function () {
//   p.textContent = 'My name is bella!'
// }, 5000);
// p.style.color = 'red';

// Example: Asynchronous image loading with event and callback
const img = document.querySelector('.dog');
img.src = './img/img-1.jpg';
img.addEventListener('load', function () {
  img.classList.add('fade');
});
img.style.width = '300px';
