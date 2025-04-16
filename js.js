const button = document.querySelector('button');

button.addEventListener('click', function() {
  alert('Даже после самой темной ночи наступает рассвет.');
});

window.addEventListener("scroll", function () {
  const button = document.querySelector(".credo-btn");
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 10) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
});
