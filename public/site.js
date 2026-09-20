(function(){var b=document.getElementById('menuBtn'),m=document.getElementById('menu');
function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.onclick=function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
addEventListener('keydown',function(e){if(e.key==='Escape')close()});
var s=document.querySelector('.strip');if(s){var k=document.createElement('div');k.className='strip-track';while(s.firstChild)k.appendChild(s.firstChild);
[].slice.call(k.children).forEach(function(a){var c=a.cloneNode(true);c.setAttribute('aria-hidden','true');c.tabIndex=-1;k.appendChild(c)});s.appendChild(k)}
var t=document.getElementById('track');if(!t)return;var r=[].slice.call(t.children),i=0;
function show(){r.forEach(function(el,k){var n=r.length,on=(k===i%n||k===(i+1)%n);el.hidden=!on;el.style.order=(k===i%n)?0:1;el.classList.toggle('second',k===(i+1)%n)})}
document.getElementById('prev').onclick=function(){i=(i-2+r.length)%r.length;show()};
document.getElementById('nextB').onclick=function(){i=(i+2)%r.length;show()};show()})();