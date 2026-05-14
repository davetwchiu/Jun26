
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"], a[href*=".html#"]').forEach(a => {
    a.addEventListener('click', () => document.body.classList.add('anchor-used'));
  });
});
