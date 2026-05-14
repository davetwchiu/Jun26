
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#day-"]');
  links.forEach(a => a.addEventListener('click', () => {
    history.replaceState(null, '', a.getAttribute('href'));
  }));
});
