// === Полифил для $ ===
const $ = (selector) => document.querySelector(selector);

// === Логика кнопки "Кредо" с анимацией цитаты ===
const credoBtn = $('.credo-btn');
if (credoBtn) {
  credoBtn.addEventListener('click', () => {
    const modal = $('#quote-modal');
    if (modal) {
      modal.classList.remove('quote-hidden');
      modal.style.display = 'flex';
    }
  });

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 200) {
      credoBtn.classList.add("visible");
    } else {
      credoBtn.classList.remove("visible");
    }
  });
}

// === Закрытие цитаты по клику вне блока или по крестику ===
document.addEventListener('click', (e) => {
  const modal = $('#quote-modal');
  const closeBtn = modal?.querySelector('.close-quote');


  // Закрытие по клику вне контента цитаты
  if (modal && !modal.classList.contains('quote-hidden') && e.target === modal) {
    modal.classList.add('quote-hidden');
    modal.style.display = 'none';
  }
});

// === Логика сворачивания/разворачивания блока "Навыки" ===
const toggleBtn = $('.toggle-btn');
const skillsList = $('.skills-list');

if (toggleBtn && skillsList) {
  toggleBtn.textContent = '▶';

  toggleBtn.addEventListener('click', () => {
    skillsList.classList.toggle('collapsed');
    toggleBtn.textContent = skillsList.classList.contains('collapsed') ? '▶' : '▼';
  });
}

// === Переключение темы ===
const themeToggleBtn = $('#theme-toggle');

let rainSound = null;

function loadRainSound() {
  if (!rainSound) {
    rainSound = new Audio('rain.mp3'); // убедись, что файл рядом с js.js
    rainSound.loop = true;
    rainSound.volume = 0.3;
  }
}

if (themeToggleBtn) {
  // Если пользователь ранее не менял тему — использовать dark mode по умолчанию
const isDarkMode = localStorage.getItem('darkMode') !== 'false'; // По умолчанию true

document.body.classList.toggle('dark-mode', isDarkMode);
themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';

const stars = document.getElementById('stars');
const rain = document.getElementById('rain');

stars.style.display = isDarkMode ? 'block' : 'none';
rain.style.display = isDarkMode ? 'none' : 'block';

if (!isDarkMode) {
  loadRainSound();
  rainSound.play().catch(e => console.log('Не удалось воспроизвести звук:', e));
}

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');

    if (isDark) {
      document.body.classList.remove('dark-mode');
      themeToggleBtn.textContent = '🌙';
      document.getElementById('stars').style.display = 'none';
      document.getElementById('rain').style.display = 'block';

      loadRainSound();
      rainSound.play().catch(e => console.log('Не удалось воспроизвести звук:', e));

    } else {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = '☀️';
      document.getElementById('stars').style.display = 'block';
      document.getElementById('rain').style.display = 'none';

      if (rainSound) {
        rainSound.pause();
        rainSound.currentTime = 0;
      }
    }

    localStorage.setItem('darkMode', !isDark);
  });
}

// === Генерация капель дождя ===
function createRaindrop() {
  const rain = document.getElementById('rain');
  const drop = document.createElement('div');
  drop.classList.add('raindrop');

  drop.style.left = Math.random() * window.innerWidth + 'px';
  drop.style.top = Math.random() * -200 + 'px';

  const duration = 0.5 + Math.random() * 0.5;
  drop.style.animationDuration = duration + 's';

  drop.addEventListener('animationend', () => {
    drop.remove();
  });

  rain.appendChild(drop);
}

setInterval(createRaindrop, 50);