// Универсальный $ как замена querySelector
const $ = (selector) => document.querySelector(selector);

// Логика кнопки "Кредо"
const credoBtn = $('.credo-btn');

if (credoBtn) {
  credoBtn.addEventListener('click', () => {
    alert('Даже после самой темной ночи наступает рассвет.');
  });

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) {
      credoBtn.classList.add("visible");
    } else {
      credoBtn.classList.remove("visible");
    }
  });
}

// Логика сворачивания/разворачивания блока "Навыки и стек"
const toggleBtn = $('.toggle-btn');
const skillsList = $('.skills-list');

if (toggleBtn && skillsList) {
  toggleBtn.textContent = '▶';

  toggleBtn.addEventListener('click', () => {
    skillsList.classList.toggle('collapsed');
    toggleBtn.textContent = skillsList.classList.contains('collapsed') ? '▶' : '▼';
  });
}

// Переключение светлой/тёмной темы
const themeToggleBtn = $('#theme-toggle');

if (themeToggleBtn) {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
  });
}