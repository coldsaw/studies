const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let step = 1;

next.addEventListener('click', () => {
  if (step < circles.length) {
    step++;
    prev.disabled = false;
    progressBar();
  }
  if (step === circles.length) {
    next.disabled = true;
  }
});

prev.addEventListener('click', () => {
  if (step > 1) {
    step--;
    next.disabled = false;
    progressBar();
  }
  if (step === 1) {
    prev.disabled = true;
  }
});

function progressBar() {
  let progressWidth = ((step - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressWidth + '%';
  for (let i = 0; i < circles.length; i++) {
    if (i < step) {
      circles[i].classList.add('active');
    }
    if (i >= step) {
      circles[i].classList.remove('active');
    }
  }
}
