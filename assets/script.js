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
    'day-0624.html':[['culture-takaoka.html#takaoka-yamachosuji','山町筋／菅野家'],['culture-takaoka.html#takaoka-casting','金屋町鑄造'],['culture-takaoka.html#takaoka-daibutsu','高岡大佛'],['culture-takaoka.html#takaoka-mikurumayama','御車山'],['food.html#ahoraaqui','AhoraAqui'],['food.html#ryuroku','柳緑']],
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

  if(file==='culture-takaoka.html'){
    const cultureIndex=document.querySelector('.culture-index');
    if(cultureIndex && !cultureIndex.querySelector('a[href="#takaoka-daibutsu"]')){
      const a=document.createElement('a');
      a.href='#takaoka-daibutsu';
      a.textContent='高岡大佛';
      cultureIndex.appendChild(a);
    }
    const daibutsuHeading=Array.from(document.querySelectorAll('main h3')).find(h=>/高岡大[佛仏]/.test(h.textContent));
    if(daibutsuHeading){
      daibutsuHeading.id='takaoka-daibutsu';
      daibutsuHeading.textContent='五、高岡大佛：銅器城市的信仰與災後記憶';
      let n=daibutsuHeading.nextSibling;
      while(n && !(n.nodeType===1 && n.tagName==='H3')){const next=n.nextSibling;n.parentNode.removeChild(n);n=next;}
      daibutsuHeading.insertAdjacentHTML('afterend',`<p>高岡大佛不應只當作二十分鐘打卡點。它的價值不在「大」，也不只在「日本三大佛」這類彈性很高的觀光名號，而在它把高岡三條主線壓縮在一個城市中心的佛像裏：第一是佛教信仰，第二是木造城市的火災與重建記憶，第三是高岡銅器與金屬鑄造技術。瑞龍寺保存前田利長和武家追悼，山町筋保存商人町信用，金屋町保存職人生產；高岡大佛則把信仰、火、銅和市民重建意志放在同一個可見形象中。</p><p>今日所見的大佛是銅造阿彌陀如來坐像。其前史可上溯至木造大佛，歷代大佛在火災中反覆受損或燒失，最後由高岡銅器職人與地方力量支撐，以金屬重新塑造。這個轉換很重要：木造佛像容易被火奪走，高岡用自己最擅長的金屬技術回應火災記憶。它不是單純把木改成銅，而是把城市受傷後的重建能力，轉化成一尊可長久坐在市街中的佛。</p><h4>火災記憶：和山町筋土蔵造り同讀</h4><p>高岡大佛應和山町筋一起看。山町筋的土蔵造り，是商家用厚牆、藏、黑漆喰和耐火構造回應火災風險；高岡大佛則是信仰和工藝對火災的另一種回應。前者保護貨物、帳簿和家業信用；後者保護城市的精神象徵。兩者都說明一件事：高岡不是沒有災害記憶的漂亮古城，而是一座反覆把火災變成重建技術的城市。</p><p>因此，行程上先看山町筋，再去金屋町和利三郎，最後看高岡大佛，是有邏輯的。山町筋讓人理解火如何威脅商家町；利三郎讓人用手理解砂型、金屬、澆注和表面；高岡大佛則把這些東西放大成信仰和公共象徵。若只拍正面照片，會錯過這條線。</p><h4>鑄造城市的公共宣言</h4><p>做過鋳物工房 利三郎體驗後，再看高岡大佛，感受會不同。銅佛不是平滑地從美術想像中出現；它背後有模、分件、澆注、接合、修整、表面處理和長期維修。佛像的重量、銅色、接合感、台座與城市尺度，都在提醒人：高岡的金屬技術不只做小器物、佛具、酒器和工藝品，也能做城市象徵。</p><p>這就是高岡大佛比一般「地方大佛」更值得寫的原因。它不是孤立宗教物件，而是高岡銅器城市的公共宣言。金屋町是技術的出生地；利三郎是可觸摸的工序；御車山是工藝進入祭禮；高岡大佛則是工藝進入信仰和城市身份。</p><h4>町人信仰：和瑞龍寺的對照</h4><p>瑞龍寺和高岡大佛都屬佛教空間，但性格不同。瑞龍寺是前田利長的菩提寺，是武家追悼、禪宗伽藍和前田家記憶的嚴整空間；高岡大佛則更接近市街中的信仰和市民記憶。瑞龍寺的軸線莊嚴、空間封閉、比例穩定；高岡大佛坐在城市中，和街道、商店、行人、觀光客和日常生活貼得更近。</p><p>這種對照使高岡更立體。高岡不是只有前田家，也不只是工匠町；它還有市民在反覆災害後仍想保存和重塑的信仰形象。大佛不是瑞龍寺的附屬景點，而是另一種城市記憶：不是由大名家菩提寺建立，而是由工藝、街道和民間信仰共同支撐。</p><h4>「日本三大佛」不必過度依賴</h4><p>旅遊介紹常把高岡大佛稱為日本三大佛之一，但這個說法本身並非嚴格固定的學術分類。網站不應把重點放在爭名號。真正值得寫的是：為何高岡會需要一尊銅造大佛，為何它能由高岡職人和市民力量重建，為何它能和金屋町、山町筋、御車山共同說明這座城市。</p><p>換言之，高岡大佛的價值，不是因為它在某個排行榜中排第幾，而是因為它讓人看到高岡怎樣把火災記憶、金屬技術和信仰放到城市中心。這比「三大佛」更穩，也更有說服力。</p><h4>現場看法：二十分鐘也可以看得有深度</h4><p>行程上，高岡大佛仍然不需要長留。二十分鐘到三十分鐘足夠，但要看得準。不要只拍正面；先看它和周邊市街的距離，再看銅色、佛身比例、台座、表面質感和佛像尺度。若台座內展示開放，可留意與火災、舊佛像和重建相關的資料。最後把它接回金屋町和利三郎：同一座城市如何由小器物、鑄造體驗、祭禮山車，走到一尊城市佛像。</p><table class="table-map"><thead><tr><th>看點</th><th>表層看法</th><th>較深讀法</th></tr></thead><tbody><tr><td>銅造佛身</td><td>一尊很大的佛像。</td><td>高岡銅器技術被放大成城市信仰象徵。</td></tr><tr><td>火災與重建</td><td>舊大佛曾被燒毀。</td><td>和山町筋土蔵造り同讀：一邊保護商家信用，一邊重塑精神象徵。</td></tr><tr><td>台座與展示</td><td>附屬空間。</td><td>若有舊部材或重建資料，可視為災害記憶的物證。</td></tr><tr><td>城市中心位置</td><td>方便順路看。</td><td>大佛不是山中寺院，而是坐在市街中的公共信仰。</td></tr><tr><td>和利三郎體驗</td><td>兩個不同景點。</td><td>先用手理解鑄造，再看金屬如何變成公共佛像。</td></tr><tr><td>和御車山</td><td>佛像與祭禮不同。</td><td>前者是工藝進入信仰，後者是工藝進入祭禮；兩者共同說明高岡。</td></tr></tbody></table>`);
    }
  }

  const smartCrossLinks=[
    ['富山市ガラス美術館','museum-toyama-glass.html'],['TOYAMA キラリ','museum-toyama-glass.html'],['大阪市立東洋陶磁美術館','culture-osaka-museums.html'],['大阪中之島美術館','culture-osaka-museums.html'],['金沢21世紀美術館','culture-kanazawa-21st-century-museum.html'],['鈴木大拙館','museum-kanazawa-suzuki.html'],['金沢蓄音器館','museum-kanazawa-phonograph.html'],['大樋美術館','museum-kanazawa-crafts.html#ohi'],['安江金箔工芸館','museum-kanazawa-crafts.html#goldleaf'],
    ['兼六園','culture-kanazawa-kenrokuen.html'],['四天王寺','culture-osaka.html#osaka-shitennoji'],['大阪くらしの今昔館','culture-osaka.html#osaka-daily-life'],['中之島','culture-osaka.html#osaka-water-market'],['堂島','culture-osaka.html#osaka-water-market'],['北新地','culture-osaka.html#osaka-night'],['空堀','culture-osaka.html#osaka-daily-life'],['天満','culture-osaka.html#osaka-night'],['京橋','culture-osaka.html#osaka-night'],['針中野','culture-osaka.html#osaka-daily-life'],['駒川','culture-osaka.html#osaka-daily-life'],
    ['富岩水上ライン','culture-toyama.html#toyama-iwase'],['旧森家住宅','culture-toyama.html#toyama-iwase'],['岩瀬大町通り','culture-toyama.html#toyama-iwase'],['桝田酒造','culture-toyama.html#toyama-iwase'],['北前船','culture-toyama.html#toyama-iwase'],['岩瀬','culture-toyama.html#toyama-iwase'],['環水公園','culture-toyama.html#toyama-geography'],
    ['菅野家住宅','culture-takaoka.html#takaoka-yamachosuji'],['山町筋','culture-takaoka.html#takaoka-yamachosuji'],['鋳物工房 利三郎','culture-takaoka.html#takaoka-casting'],['利三郎','culture-takaoka.html#takaoka-casting'],['鋳物体験','culture-takaoka.html#takaoka-casting'],['金屋町','culture-takaoka.html#takaoka-casting'],['高岡御車山会館','culture-takaoka.html#takaoka-mikurumayama'],['御車山','culture-takaoka.html#takaoka-mikurumayama'],['高岡大佛','culture-takaoka.html#takaoka-daibutsu'],['高岡大仏','culture-takaoka.html#takaoka-daibutsu'],['瑞龍寺','culture-takaoka.html#takaoka-zuiryuji'],
    ['八日町通り','culture-nanto.html#nanto-inami'],['瑞泉寺','culture-nanto.html#nanto-inami'],['井波','culture-nanto.html#nanto-inami'],['南砺','culture-nanto.html#nanto-toga'],['利賀','culture-nanto.html#nanto-toga'],
    ['大野からくり記念館','culture-kanazawa.html#kanazawa-port'],['金沢港','culture-kanazawa.html#kanazawa-port'],['室生犀星記念館','culture-kanazawa.html#kanazawa-literature'],['室生犀星','culture-kanazawa.html#kanazawa-literature'],['犀川','culture-kanazawa.html#kanazawa-literature'],['西茶屋街','culture-kanazawa-crafts.html#kanazawa-old-town'],['尾張町','culture-kanazawa-crafts.html#kanazawa-old-town'],['主計町','culture-kanazawa-crafts.html#kanazawa-old-town'],['暗がり坂','culture-kanazawa-crafts.html#kanazawa-old-town'],['大樋焼','museum-kanazawa-crafts.html#ohi'],['金箔','museum-kanazawa-crafts.html#goldleaf'],['片町','culture-kanazawa-crafts.html#kanazawa-night'],
    ['十皿','food.html#tosara'],['WINE食堂 緒乃','food.html#ono'],['緒乃','food.html#ono'],['継みき','food.html#tsugimiki'],['上田商店','food.html#ueda'],['島之内フジマル醸造所','food.html#fujimaru'],['フジマル','food.html#fujimaru'],['スタンドくーま君','food.html#kuumakun'],['くーま君','food.html#kuumakun'],['炭火いわ田','food.html#iwata'],['一粒一粒','food.html#hitotsubu'],['冨久屋','food.html#fukuya'],['Piatto Suzuki Cinque','food.html#piatto'],['ひまわり食堂2','food.html#himawari'],['AhoraAqui','food.html#ahoraaqui'],['柳緑','food.html#ryuroku'],['ランソレイエ','food.html#lensoleiller'],['L’evo','food.html#levo'],['すし処鳴海','food.html#narumi'],['すし処 鳴海','food.html#narumi'],['立喰い鮨 優勝','food.html#yusho'],['respiracion','food.html#respiracion'],['ENSO','food.html#enso'],['赤玉','food.html#akadama'],['鮨 木場谷','food.html#kibatani']
  ];

  function linkTargetInfo(href){const raw=href.replace(/^\.\//,'').replace(/^\.\.\//,'');const parts=raw.split('#');return {file:parts[0]||file,hash:parts[1]||''};}
  function nearestSectionId(el){const section=el.closest('main section[id], main article[id], main div[id]');return section ? section.id : '';}
  function shouldSkipSmartLink(node,href){let el=node.parentElement;while(el){if(['A','SCRIPT','STYLE','TEXTAREA','INPUT','BUTTON','NOSCRIPT','H1','H2','H3','H4','H5','H6','FIGCAPTION'].includes(el.tagName)) return true;if(el.closest&&el.closest('.site-header,.nav,footer,.page-hero,.subtitle,.kicker,.small-caps,.brand-title,.brand-sub,.culture-index,.daily-nav,.related-links,.day-related-links,.map-links,.source-links,.prev-next')) return true;el=el.parentElement;}const target=linkTargetInfo(href);if(target.file===file){const sectionCount=document.querySelectorAll('main section[id], main article[id]').length;if(!target.hash||sectionCount<=1)return true;if(nearestSectionId(node.parentElement)===target.hash)return true;}return false;}
  function smartAutoLink(){const main=document.querySelector('main');if(!main)return;const usedByScope=new Set();const terms=smartCrossLinks.slice().sort((a,b)=>b[0].length-a[0].length);terms.forEach(([term,href])=>{const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue||!node.nodeValue.includes(term))return NodeFilter.FILTER_REJECT;if(shouldSkipSmartLink(node,href))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}});const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{const scope=nearestSectionId(node.parentElement)||'page';const key=scope+'|'+term+'|'+href;if(usedByScope.has(key))return;const text=node.nodeValue;const index=text.indexOf(term);if(index<0)return;const frag=document.createDocumentFragment();if(index>0)frag.appendChild(document.createTextNode(text.slice(0,index)));const a=document.createElement('a');a.href=prefix+href;a.textContent=term;a.className='auto-crosslink';frag.appendChild(a);const after=text.slice(index+term.length);if(after)frag.appendChild(document.createTextNode(after));node.parentNode.replaceChild(frag,node);usedByScope.add(key);});});}
  smartAutoLink();

  const pageVisuals={
    'daily.html':{title:'三段城市節奏',text:'每日行程用一眼看出旅程的轉場：大阪的水都與商都、富山的城下與山水、金沢的庭園與町。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_City_Central_Public_Hall.jpg?width=900','大阪中之島：城市由水、商業和公共文化空間展開。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg?width=900','富山：城下、平野、運河與立山水系之間的城市。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Stone_lantern_Kenrokuen.jpg?width=900','金沢：庭園秩序、前田家文化和町家生活共同收束。']]},
    'deep-itinerary.html':{title:'深度行程的三條主線',text:'不是再排一次時間表，而是用幾個空間標誌提醒自己：寺院、港町、庭園和工藝如何支撐每日取捨。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Shitennoji_-_pagoda.jpg?width=900','四天王寺：大阪城市形成以前的宗教座標。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Zuiryuji_Temple_2010-08-29_01.jpg?width=900','瑞龍寺：高岡的武家記憶與前田利長。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Stone_lantern_Kenrokuen.jpg?width=900','兼六園：金沢的制度、美學和庭園時間。']]},
    'culture.html':{title:'文化筆記的入口圖像',text:'文化頁的作用不是裝飾名詞，而是把城市空間、工藝和歷史放回同一張地圖。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Shitennoji_%26_Abeno_Harukas.jpg?width=900','大阪：古代寺院與現代天際線並置。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Takaoka_montage.JPG?width=900','高岡：海、佛、寺、祭禮和金屬工藝交疊。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=900','金沢：町家、茶屋街與工藝城市的街道尺度。']]},
    'osaka.html':{title:'大阪：水、寺、夜',text:'大阪段由中之島的公共空間開始，經四天王寺拉回古代，再落到夜間街區。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_City_Central_Public_Hall.jpg?width=900','中之島：水都、商都與近代公共建築。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Shitennoji_-_pagoda.jpg?width=900','四天王寺：大阪的宗教與都市原點之一。'],['assets/images/food-sashimi.jpg','大阪夜飲：北新地、天満、京橋、針中野不是同一種夜。']]},
    'toyama.html':{title:'富山：山水、港町、高岡',text:'富山段不是單一城市頁，而是一條由玻璃、運河、港町、銅器和山村構成的北陸中段。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg?width=900','富山城下：理解平野與城市中心。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Takaoka_montage.JPG?width=900','高岡：大佛、瑞龍寺、海岸與城市記憶。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Zuiryuji_Temple_2010-08-29_01.jpg?width=900','瑞龍寺：高岡歷史線的莊嚴收束。']]},
    'kanazawa.html':{title:'金沢：庭、町、工藝',text:'金沢重訪不應只看名所，而要看庭園秩序、茶屋街尺度、工藝和夜生活如何連成城市。',items:[['https://commons.wikimedia.org/wiki/Special:FilePath/Stone_lantern_Kenrokuen.jpg?width=900','兼六園：庭園不是打卡，而是前田家文化政治。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=900','茶屋街：金沢舊町的木格子與街道尺度。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa-higashiyama04-2006-03-03.jpg?width=900','舊町散步：尾張町、主計町、犀川要慢看。']]},
    'museums.html':{title:'入館筆記：看建築，也看地方語境',text:'入館不是用來填空檔；每一間館都應回答一個問題：它如何說明這座城市。',items:[['assets/images/craft-cup.jpg','陶磁與工藝：器物不是小東西，而是地方審美的入口。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Stone_lantern_Kenrokuen.jpg?width=900','金沢館舍：庭園、思想、工藝和城市空間互相照明。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg?width=900','富山入館：從城下、玻璃和城市再生切入。']]},
    'food.html':{title:'餐桌也是地方閱讀',text:'餐廳頁不只是訂位清單。大阪的酒場、富山灣和山村、金沢的壽司與おでん，都是地方語言。',items:[['assets/images/food-sashimi.jpg','北陸餐桌：海味、壽司和季節感。'],['assets/images/craft-cup.jpg','器與酒：工藝、酒場和餐桌不應分開看。'],['https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=900','金沢夜：片町、赤玉、bar 和舊町構成餐後路線。']]}
  };
  function resolveVisualSrc(src){return src.startsWith('http')?src:prefix+src;}
  function injectPageVisuals(){
    const data=pageVisuals[file];
    if(!data||document.querySelector('.page-context-visual')) return;
    const hero=document.querySelector('.page-hero');
    if(!hero) return;
    if(!document.querySelector('.page-context-visual-style')){
      const style=document.createElement('style');
      style.className='page-context-visual-style';
      style.textContent='.page-context-visual{border-bottom:1px solid var(--line);background:rgba(255,255,255,.10);padding:22px 0}.page-context-visual .visual-wrap{display:grid;grid-template-columns:260px 1fr;gap:22px;align-items:stretch}.page-context-visual .visual-text{border-right:1px solid var(--line);padding-right:22px}.page-context-visual h2{font-size:1.35rem;font-weight:500;line-height:1.45;margin:.2em 0 .45em}.page-context-visual p{font-size:.92rem;color:var(--muted);line-height:1.75;margin:0}.page-context-visual .visual-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.page-context-visual figure{margin:0;border:1px solid var(--line);background:rgba(255,255,255,.18);overflow:hidden}.page-context-visual img{width:100%;height:150px;object-fit:cover;filter:saturate(.82) contrast(.98)}.page-context-visual figcaption{padding:8px 10px 10px;font-size:.8rem;line-height:1.55;color:var(--muted)}@media(max-width:900px){.page-context-visual .visual-wrap{grid-template-columns:1fr}.page-context-visual .visual-text{border-right:0;border-bottom:1px solid var(--line);padding:0 0 14px}.page-context-visual .visual-grid{grid-template-columns:1fr}.page-context-visual img{height:220px}}';
      document.head.appendChild(style);
    }
    const section=document.createElement('section');
    section.className='page-context-visual';
    section.setAttribute('aria-label','頁面視覺導讀');
    section.innerHTML='<div class="wrap visual-wrap"><div class="visual-text"><div class="small-caps">Visual cue</div><h2>'+data.title+'</h2><p>'+data.text+'</p></div><div class="visual-grid">'+data.items.map(item=>'<figure><img loading="lazy" referrerpolicy="no-referrer" src="'+resolveVisualSrc(item[0])+'" alt="'+item[1]+'"><figcaption>'+item[1]+'</figcaption></figure>').join('')+'</div></div>';
    hero.insertAdjacentElement('afterend',section);
  }
  injectPageVisuals();

  if(!document.getElementById('back-to-top')){const topLink=document.createElement('a');topLink.id='back-to-top';topLink.className='back-to-top';topLink.href='#top';topLink.setAttribute('aria-label','回頁首');topLink.textContent='回頁首 ↑';document.body.appendChild(topLink);topLink.addEventListener('click',function(e){e.preventDefault();window.scrollTo(0,0);history.replaceState(null,'',location.pathname+location.search);});}
})();