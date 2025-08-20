// Theme toggle with persistence
(function theme(){
  const key='ui:theme', root=document.documentElement;
  const saved=localStorage.getItem(key);
  const apply=mode=>root.setAttribute('data-theme',mode);
  if(saved){apply(saved);}else{apply(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}
  const btn=document.querySelector('.theme-toggle');
  if(btn){btn.addEventListener('click',()=>{const cur=root.getAttribute('data-theme')||'light';const next=cur==='dark'?'light':'dark';apply(next);localStorage.setItem(key,next);});}
})();

// Brand dot micro-interaction
(function brandDot(){
  const dot=document.querySelector('.brand .dot'); if(!dot) return;
  addEventListener('scroll',()=>{const y=Math.min(1,scrollY/300);dot.style.transform=`scale(${1-y*0.2})`;dot.style.opacity=String(1-y*0.25);},{passive:true});
})();

// Default specular center
(function initSpecular(){
  document.querySelectorAll('.card').forEach(c=>{c.style.setProperty('--mx','50%');c.style.setProperty('--my','40%');});
})();

// Subtle tilt on desktop
(function tilt(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const max=6,damp=0.14;
  document.querySelectorAll('.card').forEach(card=>{
    let rx=0,ry=0,tx=0,ty=0,raf=null;
    function anim(){rx+=(tx-rx)*damp;ry+=(ty-ry)*damp;card.style.transform=`perspective(800px) rotateY(${ry}deg) rotateX(${rx}deg) translateY(-4px) scale(1.01)`; if(Math.abs(tx-rx)>0.01||Math.abs(ty-ry)>0.01){raf=requestAnimationFrame(anim)}else{raf=null}}
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(), px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
      tx=(-py)*max; ty=(px)*max;
      card.style.setProperty('--mx', ((e.clientX-r.left)/r.width)*100+'%');
      card.style.setProperty('--my', ((e.clientY-r.top)/r.height)*100+'%');
      if(!raf) raf=requestAnimationFrame(anim);
    });
    function reset(){tx=0;ty=0;card.animate([{transform:getComputedStyle(card).transform},{transform:'translateY(0) scale(1)'}],{duration:280,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});}
    card.addEventListener('pointerleave',reset); card.addEventListener('blur',reset);
  });
})();

// Flip on first tap (mobile), second tap navigates
(function flipTap(){
  document.querySelectorAll('.card.card-3d').forEach(card=>{
    let guard=false;
    card.addEventListener('click',e=>{
      const rot=card.querySelector('.card-rotator'); if(!rot) return;
      const flipped=rot.style.transform.includes('180deg');
      if(e.target.closest('.cta')) return; // allow normal nav on CTA
      if(!flipped && !guard){ e.preventDefault(); rot.style.transform='rotateY(180deg)'; guard=true; setTimeout(()=>guard=false,500); }
    }, {capture:true});
  });
})();
