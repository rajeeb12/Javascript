let interval;
let color = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
document.querySelector('#start').addEventListener('click', function () {
  if (!interval) {// better way of coding null ko check karna
    interval = setInterval(function () {
      document.body.style.backgroundColor = color();
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(interval);
  interval = null; // flush or de-refernce
});
