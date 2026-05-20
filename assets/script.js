(function(){
  const here=document.currentScript && document.currentScript.src ? new URL(document.currentScript.src, location.href) : new URL('assets/script.js', location.href);
  const base=here.href.replace(/script\.js(?:\?.*)?$/,'');
  function load(src){
    const s=document.createElement('script');
    s.defer=true;
    s.src=base+src;
    document.head.appendChild(s);
  }
  load('script-core.js');
  load('page-atmosphere.js');
  load('food-kuumakun-update.js');
})();
