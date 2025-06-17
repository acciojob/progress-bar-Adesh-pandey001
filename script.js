const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateProgress();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const percent = ((currentActive - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${percent}%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}
