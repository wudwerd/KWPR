(function(){var b=document.getElementById('menuBtn'),m=document.getElementById('menu');
function close(returnFocus){m.hidden=true;m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');if(returnFocus)b.focus()}
b.onclick=function(){var open=b.getAttribute('aria-expanded')!=='true';m.hidden=!open;m.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Close menu':'Open menu')};
addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden)close(true)});
addEventListener('click',function(e){if(!e.target.closest('.site-header')&&!m.hidden)close(false)});
matchMedia('(min-width:641px)').addEventListener('change',function(e){if(e.matches)close(false)});
var path=location.pathname.replace(/\/$/,'');document.querySelectorAll('.site-header nav a').forEach(function(a){if(a.pathname.replace(/\/$/,'')===path)a.setAttribute('aria-current','page')});
var s=document.querySelector('.strip');if(s){var k=document.createElement('div');k.className='strip-track';while(s.firstChild)k.appendChild(s.firstChild);
[].slice.call(k.children).forEach(function(a){var c=a.cloneNode(true);c.setAttribute('aria-hidden','true');c.tabIndex=-1;k.appendChild(c)});s.appendChild(k)}
var t=document.getElementById('testimonialTrack');if(!t)return;
var quotes=Array.from(t.children),i=0,mobile=matchMedia('(max-width:640px)');
function show(){var count=mobile.matches?1:2;quotes.forEach(function(q,k){var offset=(k-i+quotes.length)%quotes.length;q.hidden=offset>=count;q.style.order=offset});document.getElementById('quotePosition').textContent=(i+1)+' / '+quotes.length}
document.getElementById('quotePrev').onclick=function(){i=(i-1+quotes.length)%quotes.length;show()};
document.getElementById('quoteNext').onclick=function(){i=(i+1)%quotes.length;show()};mobile.addEventListener('change',show);show()})();
