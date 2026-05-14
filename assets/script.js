(function(){
  const links=[...document.querySelectorAll('.nav a')];
  const here=(location.pathname.split('/').pop()||'index.html');
  links.forEach(a=>{if(a.getAttribute('href')===here)a.setAttribute('aria-current','page')});
})();
