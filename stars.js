const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const stars = [];
const maxStars = 150;

for (let i = 0; i < maxStars; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random(),
    deltaAlpha: Math.random() * 0.01,
  });
}

function drawStar(star) {
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
  ctx.fill();
}

function updateStars() {
  for (let star of stars) {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > w) star.vx *= -1;
    if (star.y < 0 || star.y > h) star.vy *= -1;
    star.alpha += star.deltaAlpha;
    if (star.alpha <= 0 || star.alpha >= 1) star.deltaAlpha *= -1;
  }
}

function animateStars() {
  ctx.clearRect(0, 0, w, h);
  updateStars();
  for (let star of stars) {
    drawStar(star);
  }
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

animateStars();