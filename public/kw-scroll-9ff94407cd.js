(function(){
  if(!window.ScrollCraft)return;
  ScrollCraft.mount(document.body);

  // A keyboard user tabbing through the work rail must see the card that has
  // focus: move the page to the scroll position where the rail shows it.
  document.querySelectorAll('[data-sc-act="pan"]').forEach(function(act){
    var rail=act.querySelector('[data-sc-pan]');if(!rail)return;
    rail.addEventListener('focusin',function(e){
      if(ScrollCraft.reduce)return;
      var item=e.target;while(item&&item.parentNode!==rail)item=item.parentNode;if(!item)return;
      var over=rail.scrollWidth-innerWidth;if(over<=0)return;
      var want=Math.min(1,Math.max(0,(item.offsetLeft-(innerWidth-item.offsetWidth)/2)/over));
      var top=act.getBoundingClientRect().top+scrollY,travel=act.offsetHeight-innerHeight;
      scrollTo({top:Math.round(top+travel*want),behavior:'instant'});
    });
  });
})();
