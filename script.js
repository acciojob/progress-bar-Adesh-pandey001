const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

next.addEventListener('click', () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  updateProgress();
});

prev.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  // Update active classes
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress bar
  const progressPercent = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressPercent}%`;

  // Handle button states
  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
}

