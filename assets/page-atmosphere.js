(function(){
  const file=(location.pathname.split('/').pop()||'index.html');
  const inDays=/\/days\//.test(location.pathname);
  if(inDays||file==='index.html') return;

  const visuals={
    'food.html':{
      image:'assets/images/restaurant-interior.jpg',
      caption:'餐桌、器物與空間',
      position:'center center'
    },
    'culture.html':{
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=1200',
      caption:'町家、格子與街道尺度',
      position:'center center'
    },
    'museums.html':{
      image:'assets/images/craft-cup.jpg',
      caption:'器物與展館的安靜關係',
      position:'center center'
    },
    'osaka.html':{
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_City_Central_Public_Hall.jpg?width=1200',
      caption:'中之島近代建築與水都記憶',
      position:'center center'
    },
    'toyama.html':{
      image:'assets/images/toyama-mountain-bay.jpg',
      caption:'山、水與北陸中段',
      position:'center center'
    },
    'kanazawa.html':{
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa-higashiyama04-2006-03-03.jpg?width=1200',
      caption:'舊町街景與木格子',
      position:'center center'
    },
    'daily.html':{
      image:'assets/images/hero-water-mountain.jpg',
      caption:'山、水、町與每日節奏',
      position:'center center'
    },
    'deep-itinerary.html':{
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Zuiryuji_Temple_2010-08-29_01.jpg?width=1200',
      caption:'寺院軸線與歷史層次',
      position:'center center'
    }
  };

  const data=visuals[file];
  const hero=document.querySelector('.page-hero');
  if(!data||!hero||hero.classList.contains('atmosphere-hero')) return;

  const prefix=/\/days\//.test(location.pathname)?'../':'';
  const src=data.image.startsWith('http')?data.image:prefix+data.image;
  hero.classList.add('photo-hero','atmosphere-hero');
  hero.style.setProperty('--hero-url',"url('"+src.replace(/'/g,"%27")+"')");
  hero.style.setProperty('--hero-pos',data.position||'center center');

  const style=document.createElement('style');
  style.textContent=`
    .page-hero.atmosphere-hero{
      position:relative;
      overflow:hidden;
      min-height:360px;
      display:flex;
      align-items:center;
      background:
        linear-gradient(90deg,rgba(245,240,230,.98) 0%,rgba(245,240,230,.94) 30%,rgba(245,240,230,.72) 52%,rgba(245,240,230,.36) 74%,rgba(245,240,230,.12) 100%),
        radial-gradient(ellipse at 30% 50%,rgba(245,240,230,.90),rgba(245,240,230,.38) 55%,rgba(245,240,230,.08) 100%),
        var(--hero-url) !important;
      background-size:cover !important;
      background-position:var(--hero-pos) !important;
      background-repeat:no-repeat !important;
    }
    .page-hero.atmosphere-hero:after{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:rgba(245,240,230,.10);
      backdrop-filter:saturate(.60) contrast(.92) brightness(1.08);
    }
    .page-hero.atmosphere-hero .wrap{position:relative;z-index:2}
    .page-hero.atmosphere-hero h1,.page-hero.atmosphere-hero .subtitle,.page-hero.atmosphere-hero .intro,.page-hero.atmosphere-hero .kicker{max-width:670px}
    .page-hero.atmosphere-hero .image-note{position:absolute;right:24px;bottom:16px;z-index:3;background:rgba(245,240,230,.62);border:1px solid rgba(200,185,159,.55);font-size:.78rem;color:var(--muted);padding:2px 7px;line-height:1.5}
    @media(max-width:900px){
      .page-hero.atmosphere-hero{min-height:340px;background-position:center center !important}
      .page-hero.atmosphere-hero .image-note{right:14px;bottom:10px}
    }
  `;
  document.head.appendChild(style);

  if(data.caption && !hero.querySelector('.image-note')){
    const note=document.createElement('div');
    note.className='image-note';
    note.textContent=data.caption;
    hero.appendChild(note);
  }
})();
