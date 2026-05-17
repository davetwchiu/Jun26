(function(){
  const links=[...document.querySelectorAll('.nav a')];
  const here=(location.pathname.split('/').pop()||'index.html');
  links.forEach(a=>{if(a.getAttribute('href')===here)a.setAttribute('aria-current','page')});

  if(!document.getElementById('back-to-top')){
    const topLink=document.createElement('a');
    topLink.id='back-to-top';
    topLink.className='back-to-top';
    topLink.href='#top';
    topLink.setAttribute('aria-label','回頁首');
    topLink.textContent='回頁首 ↑';
    document.body.appendChild(topLink);
    topLink.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
})();