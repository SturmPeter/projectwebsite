// onclick turn button purple
const clickButton = document.querySelector('#clickbutton');

clickButton.addEventListener('click', () => {
  if (clickButton.style.backgroundColor !== 'purple') {
    clickButton.style.backgroundColor = 'purple';
  } else {
    clickButton.style.backgroundColor = 'yellow';
  }
});

// smooth scroll on button
clickButton.addEventListener('click', () => {
window.scrollTo({
    top: window.scrollY + 560,
    behavior: 'smooth'
  });
});
