// target the elements
const markAll = document.querySelector('#mark-all');
const number = document.querySelector('#number');
const clickOn = document.querySelectorAll('#click-on');
const circle = document.querySelectorAll('.circle');

// add event listener
markAll.addEventListener('click', function () {
  number.textContent = '0';

    circle.forEach(function (item) {
        item.classList.add('active');
        });
  clickOn.forEach(function (item) {
    item.classList.add('active');
  });
});