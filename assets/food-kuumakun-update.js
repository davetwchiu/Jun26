(function(){
  function applyKuumaKunUpdate(){
    const article=document.querySelector('article#kuumakun');
    if(!article) return;
    article.outerHTML=`<article class="restaurant" id="kuumakun"><aside class="side"><div class="num">06</div><div>6/21 傍晚｜曾根崎（曽根崎）・お初天神｜鳥刺し專門立飲</div><div style="margin-top:12px"><span class="tag">鳥刺し</span><span class="tag">熊の焼鳥系</span><span class="tag">薩摩極み刺し鶏</span><span class="tag">轉場酒場</span></div></aside><div><h3>鳥刺し酒場 スタンドくーま君</h3><p>鳥刺し酒場 スタンドくーま君不是普通立飲店，而是「熊の焼鳥」系統在曾根崎・お初天神通り開出的鳥刺し專門新業態。店方開店資料寫明，它由株式会社熊のマネージメント營運，2025 年 10 月 1 日開業，最大特徵是「焼鳥を一切置かず」，把焦點集中在鳥刺し與タタキ。這一點很重要：它不是用燒鳥名店招牌賣普通串燒，而是把熊の焼鳥本店最具辨識度的生食技術拆出來，轉化成較短、較輕、較容易進入的酒場形式。</p><p>核心食材是「薩摩極み刺し鶏」。店方資料說，這是與鹿兒島養鶏家共同開發的鳥刺し專用雞，承接熊の焼鳥使用的雞種脈絡，長期平飼い至大型化，主打腿肉的彈力與胸肉的細滑。最應優先理解的菜不是花巧小食，而是兩個名物：<strong>とろモモタタキ</strong>與<strong>絹ムネ刺し</strong>。前者看腿肉的脂、汁與咬感；後者看胸肉是否能做到細滑而不乾。若想再比較，可加親鶏もも刺し、生肝或手羽系部位；最後才考慮くーま君のたまおにぎり這類帶玩味的收尾。</p><p>店內語氣應該讀成「高級技術的大眾化」，不是正式餐廳。紅色吧台、音樂、立飲感和帶一點玩笑的菜名，都是它有意做出的年輕化酒場語言。它適合放在 17:00，作為島之內フジマル醸造所之後、天滿小酒場之前的一個短飲位。這裡負責把下午轉入夜晚，不負責完成整晚；若在這裡食太滿，後面的天滿與炭火いわ田會失去節奏。</p><p>食安上要寫得準確。鳥刺し與鶏タタキ屬生或半生雞肉料理；即使店方供應鏈和處理方法較有系統，也不等於官方保證零風險。大阪市與厚生労働省均提醒，生或加熱不足的雞肉可引起カンピロバクター食中毒。較穩妥的讀法是：這是一間把鳥刺し風險管理做成專門技術的店，而不是「生雞肉必然安全」的店。體調不好、腸胃敏感或不想承擔生食風險時，應避開生／半生部位，改點加熱小食。</p><p class="reading"><strong>餐桌讀法：</strong>點菜宜克制。建議以小份とろモモタタキ、絹ムネ刺し作核心，再加一款親鶏或肝系部位；飲一至兩杯便轉場。這裡的價值在於用短時間讀到大阪酒場的另一面：不是串炸、不是燒鳥，而是把會員制燒鳥名店的鳥刺し技術壓縮成一段站著喝的夜。</p><p class="source-links"><strong>資料：</strong>官方店舖列表：<a href="https://kuma-yakitori.com/shop_list.html">kuma-yakitori.com/shop_list.html</a>；開店資料：<a href="https://www.prdesse.com/posts/view/21812">PRでっせ</a>；訪問／業態介紹：<a href="https://kansai.food-stadium.com/headline/16085/2/">Food Stadium Kansai</a>；食安參考：<a href="https://www.city.osaka.lg.jp/kenko/page/0000149567.html">大阪市</a>、<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html">厚生労働省</a></p></div></article>`;
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',applyKuumaKunUpdate,{once:true});
  }else{
    applyKuumaKunUpdate();
  }
})();
