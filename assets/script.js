(function(){
  const nav=document.querySelector('.site-header .nav');
  const inDays=/\/days\/[^/]+\.html$/.test(location.pathname);
  const prefix=inDays?'../':'';
  const file=(location.pathname.split('/').pop()||'index.html');

  // Disable smooth-scrolling effects site-wide. Keep anchor behaviour instant.
  document.documentElement.style.scrollBehavior='auto';
  document.body.style.scrollBehavior='auto';
  const noSmooth=document.createElement('style');
  noSmooth.textContent='html, body, * { scroll-behavior: auto !important; }';
  document.head.appendChild(noSmooth);

  const items=[
    ['index.html','首頁','home'],
    ['itinerary.html','全行程','itinerary'],
    ['daily.html','每日行程','daily'],
    ['deep-itinerary.html','深度行程','deep'],
    ['culture.html','文化筆記','culture'],
    ['museums.html','入館筆記','museums'],
    ['food.html','餐飲','food'],
    ['reference.html','實用參考','reference'],
    ['maps.html','地圖','maps']
  ];

  function sectionFor(filename){
    if(filename==='index.html'||filename==='') return 'home';
    if(filename==='itinerary.html') return 'itinerary';
    if(filename==='daily.html'||/^day-\d+\.html$/.test(filename)) return 'daily';
    if(filename==='deep-itinerary.html') return 'deep';
    if(filename==='food.html') return 'food';
    if(filename==='reference.html') return 'reference';
    if(filename==='maps.html') return 'maps';
    if(filename==='museums.html'||filename.startsWith('museum-')||filename==='culture-osaka-museums.html'||filename==='culture-kanazawa-21st-century-museum.html') return 'museums';
    if(filename==='culture.html'||filename.startsWith('culture-')) return 'culture';
    return '';
  }

  if(nav){
    const current=sectionFor(file);
    nav.innerHTML='';
    items.forEach(([href,label,key])=>{
      const a=document.createElement('a');
      a.href=prefix+href;
      a.textContent=label;
      if(key===current) a.setAttribute('aria-current','page');
      nav.appendChild(a);
    });
  }

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
      window.scrollTo(0,0);
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
})();