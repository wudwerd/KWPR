(function(){var b=document.getElementById('menuBtn'),m=document.getElementById('menu');
function close(returnFocus){m.hidden=true;m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');if(returnFocus)b.focus()}
b.onclick=function(){var open=b.getAttribute('aria-expanded')!=='true';m.hidden=!open;m.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Close menu':'Open menu')};
addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden)close(true)});
addEventListener('click',function(e){if(!e.target.closest('.site-header')&&!m.hidden)close(false)});
matchMedia('(min-width:641px)').addEventListener('change',function(e){if(e.matches)close(false)});
var path=location.pathname.replace(/\/$/,'');document.querySelectorAll('.site-header nav a').forEach(function(a){if(a.pathname.replace(/\/$/,'')===path)a.setAttribute('aria-current','page')});
var s=document.querySelector('.strip');if(s){var k=document.createElement('div');k.className='strip-track';while(s.firstChild)k.appendChild(s.firstChild);
[].slice.call(k.children).forEach(function(a){var c=a.cloneNode(true);c.setAttribute('aria-hidden','true');c.tabIndex=-1;k.appendChild(c)});s.appendChild(k)}
var t=document.getElementById('track');if(!t)return;var r=[].slice.call(t.children),i=0;
function show(){r.forEach(function(el,k){var n=r.length,on=(k===i%n||k===(i+1)%n);el.hidden=!on;el.style.order=(k===i%n)?0:1;el.classList.toggle('second',k===(i+1)%n)})}
function st(){return matchMedia('(max-width:640px)').matches?1:2}
document.getElementById('prev').onclick=function(){i=(i-st()+r.length)%r.length;show()};
document.getElementById('nextB').onclick=function(){i=(i+st())%r.length;show()};show()})();