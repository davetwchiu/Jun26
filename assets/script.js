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

  if(file==='itinerary.html'){
    const photos=[
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Osaka_City_Central_Public_Hall.jpg/900px-Osaka_City_Central_Public_Hall.jpg', alt:'大阪市中央公會堂與中之島近代建築', caption:['大阪：中之島近代建築','中央公會堂把水都、商都和公共文化空間連在一起。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Shitennoji_%26_Abeno_Harukas.jpg/900px-Shitennoji_%26_Abeno_Harukas.jpg', alt:'四天王寺與阿倍野現代高樓', caption:['四天王寺：古代與現代大阪','寺院伽藍與阿倍野天際線同框，正好對應 20/6 的城市剖面。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Shitennoji_-_pagoda.jpg/900px-Shitennoji_-_pagoda.jpg', alt:'四天王寺五重塔', caption:['大阪佛教軸','四天王寺不是普通景點，而是大阪城市形成以前的宗教座標。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg/900px-Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg', alt:'富山城與城市中心', caption:['富山：城下與平野','富山城補足富山市中心的歷史感，作為入城視覺。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Takaoka_montage.JPG/900px-Takaoka_montage.JPG', alt:'高岡 montage：雨晴海岸、高岡大佛、瑞龍寺', caption:['高岡：海、佛與寺','高岡不只金屋町鑄造，也有雨晴、高岡大佛與瑞龍寺。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Zuiryuji_Temple_2010-08-29_01.jpg/900px-Zuiryuji_Temple_2010-08-29_01.jpg', alt:'瑞龍寺佛殿', caption:['瑞龍寺：前田利長的政治記憶','26/6 用瑞龍寺收束高岡線，比再硬塞氷見更穩。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kanazawa_higashi_yama_2006_03_03.JPG/900px-Kanazawa_higashi_yama_2006_03_03.JPG', alt:'金沢ひがし茶屋街町家街道', caption:['金沢：茶屋街與舊町','用木格子、町家和街道尺度，接上金沢的日常肌理。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stone_lantern_Kenrokuen.jpg/900px-Stone_lantern_Kenrokuen.jpg', alt:'兼六園琴柱燈籠', caption:['兼六園：庭園的標誌','清晨兼六園不是打卡，而是讀前田家庭園秩序。']},
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kanazawa-higashiyama04-2006-03-03.jpg/900px-Kanazawa-higashiyama04-2006-03-03.jpg', alt:'金沢東山舊街另一角度', caption:['金沢舊町：走慢一點','尾張町、主計町和東山一帶，適合慢行而不是掃景點。']}
    ];
    document.querySelectorAll('.itinerary-visual-band figure').forEach((figure,index)=>{
      const data=photos[index];
      if(!data) return;
      const img=figure.querySelector('img');
      const cap=figure.querySelector('figcaption');
      if(img){
        img.src=data.src;
        img.alt=data.alt;
        img.loading='lazy';
        img.referrerPolicy='no-referrer';
      }
      if(cap){
        cap.innerHTML='<strong>'+data.caption[0]+'</strong>'+data.caption[1]+' <span class="photo-credit">圖：Wikimedia Commons</span>';
      }
    });
    if(!document.querySelector('.photo-credit-style')){
      const style=document.createElement('style');
      style.className='photo-credit-style';
      style.textContent='.photo-credit{display:block;margin-top:4px;font-size:.74rem;color:var(--muted);opacity:.82}';
      document.head.appendChild(style);
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