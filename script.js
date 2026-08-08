const button = document.getElementById('magicButton');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
  const now = new Date();
  output.textContent = `Hello! The current time is ${now.toLocaleTimeString()}.`;
  document.body.classList.toggle('active');
});
