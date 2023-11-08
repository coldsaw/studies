const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    removeClass();
    event.target.classList.add('active');
  });
});

function removeClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
