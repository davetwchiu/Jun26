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

  const dayRelatedLinks={
    'day-0619.html':[
      ['culture-osaka-museums.html','中之島入館'],['culture-osaka.html#osaka-water-market','中之島／堂島'],['culture-osaka.html#osaka-night','北新地'],['food.html#tosara','十皿'],['food.html#ono','緒乃']
    ],
    'day-0620.html':[
      ['culture-osaka.html#osaka-daily-life','大阪生活史'],['culture-osaka.html#osaka-shitennoji','四天王寺'],['culture-osaka.html#osaka-daily-life','針中野／駒川'],['food.html#tsugimiki','継みき'],['food.html#ueda','上田商店']
    ],
    'day-0621.html':[
      ['culture-osaka.html#osaka-water-market','島之内／空堀'],['culture-osaka.html#osaka-night','天満／京橋'],['food.html#fujimaru','フジマル'],['food.html#kuumakun','くーま君'],['food.html#tenma-bars','天満短飲'],['food.html#iwata','炭火いわ田']
    ],
    'day-0622.html':[
      ['museum-toyama-glass.html','富山玻璃美術館'],['culture-toyama.html','富山文化'],['food.html#hitotsubu','一粒一粒'],['food.html#fukuya','冨久屋']
    ],
    'day-0623.html':[
      ['culture-toyama.html#toyama-iwase','岩瀬／北前船'],['culture-toyama.html#toyama-geography','富山水系'],['food.html#piatto','Piatto Suzuki Cinque'],['food.html#himawari','ひまわり食堂2']
    ],
    'day-0624.html':[
      ['culture-takaoka.html#takaoka-yamachosuji','山町筋／菅野家'],['culture-takaoka.html#takaoka-casting','金屋町鑄造'],['culture-takaoka.html#takaoka-mikurumayama','御車山'],['food.html#ahoraaqui','AhoraAqui'],['food.html#ryuroku','柳緑']
    ],
    'day-0625.html':[
      ['culture-nanto.html#nanto-inami','井波／瑞泉寺'],['culture-nanto.html#nanto-toga','南砺／利賀'],['food.html#lensoleiller','ランソレイエ'],['food.html#levo','L’evo']
    ],
    'day-0626.html':[
      ['culture-nanto.html#nanto-toga','利賀'],['culture-takaoka.html#takaoka-zuiryuji','瑞龍寺'],['food.html#levo','L’evo'],['food.html#narumi','すし処 鳴海']
    ],
    'day-0627.html':[
      ['culture-kanazawa.html#kanazawa-port','大野／金沢港'],['food.html#yusho','立喰い鮨 優勝'],['food.html#respiracion','respiracion'],['food.html#kanazawa-bars','餐後 bar']
    ],
    'day-0628.html':[
      ['culture-kanazawa.html#kanazawa-maeda','兼六園'],['museum-kanazawa-suzuki.html','鈴木大拙館'],['culture-kanazawa.html#kanazawa-literature','室生犀星／犀川'],['food.html#enso','ENSO'],['food.html#akadama','赤玉']
    ],
    'day-0629.html':[
      ['museum-kanazawa-crafts.html#ohi','大樋焼'],['culture-kanazawa-crafts.html#kanazawa-old-town','尾張町／主計町'],['museum-kanazawa-phonograph.html','蓄音器館'],['museum-kanazawa-crafts.html#goldleaf','金箔'],['food.html#kibatani','鮨木場谷']
    ],
    'day-0630.html':[
      ['reference.html','實用參考'],['maps.html','地圖'],['food.html','餐飲']
    ]
  };

  if(inDays && dayRelatedLinks[file] && !document.querySelector('.day-related-links')){
    const style=document.createElement('style');
    style.textContent='.day-related-links{border:1px solid var(--line);background:rgba(255,255,255,.18);padding:14px 16px;margin:18px 0 22px}.day-related-links .label{font-family:"Noto Sans TC","Source Han Sans TC",sans-serif;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--rust);margin-bottom:8px}.day-related-links .chips{display:flex;flex-wrap:wrap;gap:8px}.day-related-links a{display:inline-block;border:1px solid var(--line);background:rgba(255,255,255,.26);padding:4px 10px;text-decoration:none;color:var(--moss);font-family:"Noto Sans TC","Source Han Sans TC",sans-serif;font-size:.88rem;line-height:1.55}.day-related-links a:hover{border-color:var(--rust);color:var(--rust);background:rgba(255,255,255,.44)}';
    document.head.appendChild(style);

    const box=document.createElement('nav');
    box.className='day-related-links';
    box.setAttribute('aria-label','本日相關連結');
    const label=document.createElement('div');
    label.className='label';
    label.textContent='相關連結';
    const chips=document.createElement('div');
    chips.className='chips';
    dayRelatedLinks[file].forEach(([href,text])=>{
      const a=document.createElement('a');
      a.href=prefix+href;
      a.textContent=text;
      chips.appendChild(a);
    });
    box.appendChild(label);
    box.appendChild(chips);

    const panel=document.querySelector('.reading-panel');
    const h2=panel ? panel.querySelector('h2') : null;
    if(panel && h2){
      h2.insertAdjacentElement('afterend', box);
    }else if(panel){
      panel.insertAdjacentElement('afterbegin', box);
    }else{
      const dailyGrid=document.querySelector('.daily-grid');
      if(dailyGrid) dailyGrid.insertAdjacentElement('beforebegin', box);
    }
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