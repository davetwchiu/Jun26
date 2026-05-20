(function(){
  const file=(location.pathname.split('/').pop()||'index.html');
  const inDays=/\/days\//.test(location.pathname);
  if(inDays||file==='index.html') return;

  const visuals={
    'food.html':{
      title:'器物、吧台、季節',
      text:'餐飲頁不需要景點照。它應該像一張安靜的餐桌：器物、木、紙、食材和低光，把地方風土收在細節裏。',
      image:'assets/images/restaurant-interior.jpg',
      caption:'餐桌、器物與空間'
    },
    'culture.html':{
      title:'文化不是名所清單',
      text:'文化筆記以城市肌理作入口：橋、寺、町家、工藝、庭園和港口。圖像只作氣氛提示，不搶正文。',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa_higashi_yama_2006_03_03.JPG?width=1200',
      caption:'町家、格子與街道尺度'
    },
    'museums.html':{
      title:'入館，是看空間如何說話',
      text:'入館筆記重點不是把展館列完，而是看建築、光線、器物和地方故事如何互相支撐。',
      image:'assets/images/craft-cup.jpg',
      caption:'器物與展館的安靜關係'
    },
    'osaka.html':{
      title:'大阪：水都、寺院、夜',
      text:'大阪頁用水面與近代建築定調，避開過度熱鬧的旅遊圖像。真正的城市感在水、商業和夜路之間。',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_City_Central_Public_Hall.jpg?width=1200',
      caption:'中之島近代建築與水都記憶'
    },
    'toyama.html':{
      title:'富山：水、山、工藝',
      text:'富山頁應該有較淡的山水感，但不要變成風景明信片。重點是山水如何支撐港町、玻璃、銅器與餐桌。',
      image:'assets/images/toyama-mountain-bay.jpg',
      caption:'山、水與北陸中段'
    },
    'kanazawa.html':{
      title:'金沢：庭、町、工藝',
      text:'金沢重訪應避開單純名所感，用柔和、褪色的町家與庭園氣氛，承接前田家、工藝和夜的層次。',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kanazawa-higashiyama04-2006-03-03.jpg?width=1200',
      caption:'舊町街景與木格子'
    },
    'daily.html':{
      title:'每日行程：只作淡淡轉場',
      text:'每日行程本身已有很多資訊，視覺只應降低閱讀疲勞，不應再插三張地標圖。',
      image:'assets/images/hero-water-mountain.jpg',
      caption:'山、水、町與每日節奏'
    },
    'deep-itinerary.html':{
      title:'深度行程：讀法先於路線',
      text:'深度行程需要的是靜，不是更多景點圖。淡化的背景讓讀者把注意力放回取捨、脈絡和文化層次。',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Zuiryuji_Temple_2010-08-29_01.jpg?width=1200',
      caption:'寺院軸線與歷史層次'
    }
  };

  const data=visuals[file];
  if(!data||document.querySelector('.soft-atmosphere')) return;
  const hero=document.querySelector('.page-hero');
  if(!hero) return;

  const style=document.createElement('style');
  style.textContent=`
    .soft-atmosphere{border-bottom:1px solid var(--line);background:linear-gradient(90deg,rgba(245,240,230,.96),rgba(245,240,230,.70));overflow:hidden}
    .soft-atmosphere .inner{display:grid;grid-template-columns:minmax(280px,.72fr) minmax(420px,1.28fr);min-height:250px;align-items:stretch}
    .soft-atmosphere .copy{padding:42px 36px 40px 0;display:flex;flex-direction:column;justify-content:center}
    .soft-atmosphere .label{font-family:"Noto Sans TC","Source Han Sans TC",sans-serif;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:var(--rust);margin-bottom:10px}
    .soft-atmosphere h2{font-size:clamp(1.55rem,2.6vw,2.45rem);font-weight:400;line-height:1.32;margin:0 0 10px}
    .soft-atmosphere p{margin:0;color:var(--muted);line-height:1.9;max-width:620px}
    .soft-atmosphere figure{position:relative;margin:0;min-height:250px;overflow:hidden;background:rgba(255,255,255,.12)}
    .soft-atmosphere figure:before{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(90deg,var(--paper) 0%,rgba(245,240,230,.82) 17%,rgba(245,240,230,.38) 43%,rgba(245,240,230,.06) 76%),radial-gradient(ellipse at 70% 50%,rgba(245,240,230,.08),rgba(55,47,34,.18) 100%)}
    .soft-atmosphere img{width:100%;height:100%;object-fit:cover;filter:saturate(.56) contrast(.92) brightness(1.08);opacity:.74;transform:scale(1.015)}
    .soft-atmosphere figcaption{position:absolute;right:14px;bottom:12px;z-index:3;background:rgba(245,240,230,.70);border:1px solid rgba(200,185,159,.54);font-size:.78rem;color:var(--muted);padding:2px 7px}
    @media(max-width:900px){.soft-atmosphere .inner{grid-template-columns:1fr}.soft-atmosphere .copy{padding:32px 0 22px}.soft-atmosphere figure{min-height:220px}.soft-atmosphere figure:before{background:linear-gradient(0deg,var(--paper) 0%,rgba(245,240,230,.55) 42%,rgba(245,240,230,.05) 100%)}}
  `;
  document.head.appendChild(style);

  const section=document.createElement('section');
  section.className='soft-atmosphere';
  section.innerHTML='<div class="wrap inner"><div class="copy"><div class="label">Atmosphere</div><h2>'+data.title+'</h2><p>'+data.text+'</p></div><figure><img loading="lazy" referrerpolicy="no-referrer" src="'+data.image+'" alt="'+data.caption+'"><figcaption>'+data.caption+'</figcaption></figure></div>';
  hero.insertAdjacentElement('afterend',section);
})();
