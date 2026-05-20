(function(){
  const nav=document.querySelector('.site-header .nav');
  const inDays=/\/days\/[^/]+\.html$/.test(location.pathname);
  const prefix=inDays?'../':'';
  const file=(location.pathname.split('/').pop()||'index.html');

  document.documentElement.style.scrollBehavior='auto';
  document.body.style.scrollBehavior='auto';
  const noSmooth=document.createElement('style');
  noSmooth.textContent='html, body, * { scroll-behavior: auto !important; }';
  document.head.appendChild(noSmooth);

  const items=[['index.html','首頁','home'],['itinerary.html','全行程','itinerary'],['daily.html','每日行程','daily'],['deep-itinerary.html','深度行程','deep'],['culture.html','文化筆記','culture'],['museums.html','入館筆記','museums'],['food.html','餐飲','food'],['reference.html','實用參考','reference'],['maps.html','地圖','maps']];
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
    items.forEach(([href,label,key])=>{const a=document.createElement('a');a.href=prefix+href;a.textContent=label;if(key===current)a.setAttribute('aria-current','page');nav.appendChild(a);});
  }

  const dayRelatedLinks={
    'day-0619.html':[['culture-osaka-museums.html','中之島入館'],['culture-osaka.html#osaka-water-market','中之島／堂島'],['culture-osaka.html#osaka-night','北新地'],['food.html#tosara','十皿'],['food.html#ono','緒乃']],
    'day-0620.html':[['culture-osaka.html#osaka-daily-life','大阪生活史'],['culture-osaka.html#osaka-shitennoji','四天王寺'],['culture-osaka.html#osaka-daily-life','針中野／駒川'],['food.html#tsugimiki','継みき'],['food.html#ueda','上田商店']],
    'day-0621.html':[['culture-osaka.html#osaka-water-market','島之内／空堀'],['culture-osaka.html#osaka-night','天満／京橋'],['food.html#fujimaru','フジマル'],['food.html#kuumakun','くーま君'],['food.html#tenma-bars','天満短飲'],['food.html#iwata','炭火いわ田']],
    'day-0622.html':[['museum-toyama-glass.html','富山玻璃美術館'],['culture-toyama.html','富山文化'],['food.html#hitotsubu','一粒一粒'],['food.html#fukuya','冨久屋']],
    'day-0623.html':[['culture-toyama.html#toyama-iwase','岩瀬／北前船'],['culture-toyama.html#toyama-geography','富山水系'],['food.html#piatto','Piatto Suzuki Cinque'],['food.html#himawari','ひまわり食堂2']],
    'day-0624.html':[['culture-takaoka.html#takaoka-yamachosuji','山町筋／菅野家'],['culture-takaoka.html#takaoka-casting','金屋町鑄造'],['culture-takaoka.html#takaoka-mikurumayama','御車山'],['food.html#ahoraaqui','AhoraAqui'],['food.html#ryuroku','柳緑']],
    'day-0625.html':[['culture-nanto.html#nanto-inami','井波／瑞泉寺'],['culture-nanto.html#nanto-toga','南砺／利賀'],['food.html#lensoleiller','ランソレイエ'],['food.html#levo','L’evo']],
    'day-0626.html':[['culture-nanto.html#nanto-toga','利賀'],['culture-takaoka.html#takaoka-zuiryuji','瑞龍寺'],['food.html#levo','L’evo'],['food.html#narumi','すし処 鳴海']],
    'day-0627.html':[['culture-kanazawa.html#kanazawa-port','大野／金沢港'],['food.html#yusho','立喰い鮨 優勝'],['food.html#respiracion','respiracion'],['food.html#kanazawa-bars','餐後 bar']],
    'day-0628.html':[['culture-kanazawa-kenrokuen.html','兼六園'],['museum-kanazawa-suzuki.html','鈴木大拙館'],['culture-kanazawa.html#kanazawa-literature','室生犀星／犀川'],['food.html#enso','ENSO'],['food.html#akadama','赤玉']],
    'day-0629.html':[['museum-kanazawa-crafts.html#ohi','大樋焼'],['culture-kanazawa-crafts.html#kanazawa-old-town','尾張町／主計町'],['museum-kanazawa-phonograph.html','蓄音器館'],['museum-kanazawa-crafts.html#goldleaf','金箔'],['food.html#kibatani','鮨木場谷']],
    'day-0630.html':[['reference.html','實用參考'],['maps.html','地圖'],['food.html','餐飲']]
  };
  if(inDays && dayRelatedLinks[file] && !document.querySelector('.day-related-links')){
    const style=document.createElement('style');
    style.textContent='.day-related-links{border:1px solid var(--line);background:rgba(255,255,255,.18);padding:14px 16px;margin:18px 0 22px}.day-related-links .label{font-family:"Noto Sans TC","Source Han Sans TC",sans-serif;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--rust);margin-bottom:8px}.day-related-links .chips{display:flex;flex-wrap:wrap;gap:8px}.day-related-links a{display:inline-block;border:1px solid var(--line);background:rgba(255,255,255,.26);padding:4px 10px;text-decoration:none;color:var(--moss);font-family:"Noto Sans TC","Source Han Sans TC",sans-serif;font-size:.88rem;line-height:1.55}.day-related-links a:hover{border-color:var(--rust);color:var(--rust);background:rgba(255,255,255,.44)}';
    document.head.appendChild(style);
    const box=document.createElement('nav');box.className='day-related-links';box.setAttribute('aria-label','本日相關連結');
    const label=document.createElement('div');label.className='label';label.textContent='相關連結';
    const chips=document.createElement('div');chips.className='chips';
    dayRelatedLinks[file].forEach(([href,text])=>{const a=document.createElement('a');a.href=prefix+href;a.textContent=text;chips.appendChild(a);});
    box.appendChild(label);box.appendChild(chips);
    const panel=document.querySelector('.reading-panel');const h2=panel?panel.querySelector('h2'):null;
    if(panel&&h2)h2.insertAdjacentElement('afterend',box);else if(panel)panel.insertAdjacentElement('afterbegin',box);else{const dailyGrid=document.querySelector('.daily-grid');if(dailyGrid)dailyGrid.insertAdjacentElement('beforebegin',box);}
  }

  if(file==='itinerary.html'){
    const photos=[
      ['culture-osaka.html#osaka-water-market','https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_City_Central_Public_Hall.jpg?width=900','大阪市中央公會堂與中之島近代建築','大阪：中之島近代建築','中央公會堂把水都、商都和公共文化空間連在一起。'],
      ['culture-osaka.html#osaka-shitennoji','https://commons.wikimedia.org/wiki/Special:FilePath/Shitennoji_%26_Abeno_Harukas.jpg?width=900','四天王寺與阿倍野現代高樓','四天王寺：古代與現代大阪','寺院伽藍與阿倍野天際線同框，正好對應 20/6 的城市剖面。'],
      ['culture-osaka.html#osaka-shitennoji','https://commons.wikimedia.org/wiki/Special:FilePath/Shitennoji_-_pagoda.jpg?width=900','四天王寺五重塔','大阪佛教軸','四天王寺不是普通景點，而是大阪城市形成以前的宗教座標。'],
      ['culture-toyama.html#toyama-geography','https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg?width=900','富山城與城市中心','富山：城下與平野','富山城補足富山市中心的歷史感，作為入城視覺。'],
      ['culture-takaoka.html','https://commons.wikimedia.org/wiki/Special:FilePath/Takaoka_montage.JPG?width=900','高岡 montage：雨晴海岸、高岡大佛、瑞龍寺','高岡：海、佛與寺','高岡不只金屋町鑄造，也有雨晴、高岡大佛與瑞龍寺。'],
      ['culture-takaoka.html#takaoka-zuiryuji','https://commons.wikimedia.org/wiki/Special:FilePath/Zuiryuji_Temple_2010-08-29_01.jpg?width=900','瑞龍寺佛殿','瑞龍寺：前田利長的政治記憶','26/6 用瑞龍寺收束高岡線，比再硬塞氷見更穩。'],
      ['culture-kanazawa-crafts.html#kanazawa-old-town','https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=900','金沢ひがし茶屋街町家街道','金沢：茶屋街與舊町','用木格子、町家和街道尺度，接上金沢的日常肌理。'],
      ['culture-kanazawa-kenrokuen.html','https://commons.wikimedia.org/wiki/Special:FilePath/Stone_lantern_Kenrokuen.jpg?width=900','兼六園琴柱燈籠','兼六園：庭園的標誌','清晨兼六園不是打卡，而是讀前田家庭園秩序。'],
      ['culture-kanazawa-crafts.html#kanazawa-old-town','https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa-higashiyama04-2006-03-03.jpg?width=900','金沢東山舊街另一角度','金沢舊町：走慢一點','尾張町、主計町和東山一帶，適合慢行而不是掃景點。']
    ];
    document.querySelectorAll('.itinerary-visual-band figure').forEach((figure,index)=>{const data=photos[index];if(!data)return;const link=figure.querySelector('a');const img=figure.querySelector('img');const cap=figure.querySelector('figcaption');if(link)link.href=data[0];if(img){img.src=data[1];img.alt=data[2];img.loading='lazy';img.referrerPolicy='no-referrer';}if(cap)cap.innerHTML='<strong>'+data[3]+'</strong>'+data[4]+' <span class="photo-credit">圖：Wikimedia Commons</span>';});
    if(!document.querySelector('.photo-credit-style')){const style=document.createElement('style');style.className='photo-credit-style';style.textContent='.photo-credit{display:block;margin-top:4px;font-size:.74rem;color:var(--muted);opacity:.82}';document.head.appendChild(style);}
  }

  const smartCrossLinks=[
    ['富山市ガラス美術館','museum-toyama-glass.html'],['TOYAMA キラリ','museum-toyama-glass.html'],['大阪市立東洋陶磁美術館','culture-osaka-museums.html'],['大阪中之島美術館','culture-osaka-museums.html'],['金沢21世紀美術館','culture-kanazawa-21st-century-museum.html'],['鈴木大拙館','museum-kanazawa-suzuki.html'],['金沢蓄音器館','museum-kanazawa-phonograph.html'],['大樋美術館','museum-kanazawa-crafts.html#ohi'],['安江金箔工芸館','museum-kanazawa-crafts.html#goldleaf'],
    ['兼六園','culture-kanazawa-kenrokuen.html'],['四天王寺','culture-osaka.html#osaka-shitennoji'],['大阪くらしの今昔館','culture-osaka.html#osaka-daily-life'],['中之島','culture-osaka.html#osaka-water-market'],['堂島','culture-osaka.html#osaka-water-market'],['北新地','culture-osaka.html#osaka-night'],['空堀','culture-osaka.html#osaka-daily-life'],['天満','culture-osaka.html#osaka-night'],['京橋','culture-osaka.html#osaka-night'],['針中野','culture-osaka.html#osaka-daily-life'],['駒川','culture-osaka.html#osaka-daily-life'],
    ['富岩水上ライン','culture-toyama.html#toyama-iwase'],['旧森家住宅','culture-toyama.html#toyama-iwase'],['岩瀬大町通り','culture-toyama.html#toyama-iwase'],['桝田酒造','culture-toyama.html#toyama-iwase'],['北前船','culture-toyama.html#toyama-iwase'],['岩瀬','culture-toyama.html#toyama-iwase'],['環水公園','culture-toyama.html#toyama-geography'],
    ['菅野家住宅','culture-takaoka.html#takaoka-yamachosuji'],['山町筋','culture-takaoka.html#takaoka-yamachosuji'],['鋳物工房 利三郎','culture-takaoka.html#takaoka-casting'],['利三郎','culture-takaoka.html#takaoka-casting'],['鋳物体験','culture-takaoka.html#takaoka-casting'],['金屋町','culture-takaoka.html#takaoka-casting'],['高岡御車山会館','culture-takaoka.html#takaoka-mikurumayama'],['御車山','culture-takaoka.html#takaoka-mikurumayama'],['高岡大仏','culture-takaoka.html#takaoka-casting'],['瑞龍寺','culture-takaoka.html#takaoka-zuiryuji'],
    ['八日町通り','culture-nanto.html#nanto-inami'],['瑞泉寺','culture-nanto.html#nanto-inami'],['井波','culture-nanto.html#nanto-inami'],['南砺','culture-nanto.html#nanto-toga'],['利賀','culture-nanto.html#nanto-toga'],
    ['大野からくり記念館','culture-kanazawa.html#kanazawa-port'],['金沢港','culture-kanazawa.html#kanazawa-port'],['室生犀星記念館','culture-kanazawa.html#kanazawa-literature'],['室生犀星','culture-kanazawa.html#kanazawa-literature'],['犀川','culture-kanazawa.html#kanazawa-literature'],['西茶屋街','culture-kanazawa-crafts.html#kanazawa-old-town'],['尾張町','culture-kanazawa-crafts.html#kanazawa-old-town'],['主計町','culture-kanazawa-crafts.html#kanazawa-old-town'],['暗がり坂','culture-kanazawa-crafts.html#kanazawa-old-town'],['大樋焼','museum-kanazawa-crafts.html#ohi'],['金箔','museum-kanazawa-crafts.html#goldleaf'],['片町','culture-kanazawa-crafts.html#kanazawa-night'],
    ['十皿','food.html#tosara'],['WINE食堂 緒乃','food.html#ono'],['緒乃','food.html#ono'],['継みき','food.html#tsugimiki'],['上田商店','food.html#ueda'],['島之内フジマル醸造所','food.html#fujimaru'],['フジマル','food.html#fujimaru'],['スタンドくーま君','food.html#kuumakun'],['くーま君','food.html#kuumakun'],['炭火いわ田','food.html#iwata'],['一粒一粒','food.html#hitotsubu'],['冨久屋','food.html#fukuya'],['Piatto Suzuki Cinque','food.html#piatto'],['ひまわり食堂2','food.html#himawari'],['AhoraAqui','food.html#ahoraaqui'],['柳緑','food.html#ryuroku'],['ランソレイエ','food.html#lensoleiller'],['L’evo','food.html#levo'],['すし処鳴海','food.html#narumi'],['すし処 鳴海','food.html#narumi'],['立喰い鮨 優勝','food.html#yusho'],['respiracion','food.html#respiracion'],['ENSO','food.html#enso'],['赤玉','food.html#akadama'],['鮨 木場谷','food.html#kibatani']
  ];

  function linkTargetInfo(href){
    const raw=href.replace(/^\.\//,'').replace(/^\.\.\//,'');
    const parts=raw.split('#');
    return {file:parts[0]||file, hash:parts[1]||''};
  }
  function nearestSectionId(el){
    const section=el.closest('main section[id], main article[id], main div[id]');
    return section ? section.id : '';
  }
  function shouldSkipSmartLink(node, href){
    let el=node.parentElement;
    while(el){
      if(['A','SCRIPT','STYLE','TEXTAREA','INPUT','BUTTON','NOSCRIPT','H1','H2','H3','H4','H5','H6','FIGCAPTION'].includes(el.tagName)) return true;
      if(el.closest && el.closest('.site-header,.nav,footer,.page-hero,.subtitle,.kicker,.small-caps,.brand-title,.brand-sub,.culture-index,.daily-nav,.related-links,.day-related-links,.map-links,.source-links,.prev-next')) return true;
      el=el.parentElement;
    }
    const target=linkTargetInfo(href);
    if(target.file===file){
      const sectionCount=document.querySelectorAll('main section[id], main article[id]').length;
      if(!target.hash || sectionCount<=1) return true;
      if(nearestSectionId(node.parentElement)===target.hash) return true;
    }
    return false;
  }
  function smartAutoLink(){
    const main=document.querySelector('main'); if(!main) return;
    const usedByScope=new Set();
    const terms=smartCrossLinks.slice().sort((a,b)=>b[0].length-a[0].length);
    terms.forEach(([term,href])=>{
      const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT,{acceptNode(node){
        if(!node.nodeValue || !node.nodeValue.includes(term)) return NodeFilter.FILTER_REJECT;
        if(shouldSkipSmartLink(node,href)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }});
      const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node=>{
        const scope=nearestSectionId(node.parentElement)||'page';
        const key=scope+'|'+term+'|'+href;
        if(usedByScope.has(key)) return;
        const text=node.nodeValue;
        const index=text.indexOf(term);
        if(index<0) return;
        const frag=document.createDocumentFragment();
        if(index>0) frag.appendChild(document.createTextNode(text.slice(0,index)));
        const a=document.createElement('a');
        a.href=prefix+href;
        a.textContent=term;
        a.className='auto-crosslink';
        frag.appendChild(a);
        const after=text.slice(index+term.length);
        if(after) frag.appendChild(document.createTextNode(after));
        node.parentNode.replaceChild(frag,node);
        usedByScope.add(key);
      });
    });
  }
  smartAutoLink();

  if(!document.getElementById('back-to-top')){
    const topLink=document.createElement('a');topLink.id='back-to-top';topLink.className='back-to-top';topLink.href='#top';topLink.setAttribute('aria-label','回頁首');topLink.textContent='回頁首 ↑';document.body.appendChild(topLink);
    topLink.addEventListener('click',function(e){e.preventDefault();window.scrollTo(0,0);history.replaceState(null,'',location.pathname+location.search);});
  }
})();