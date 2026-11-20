(()=>{'use strict';
const root=document.body;
const key='zunsheng-lang';
function language(l){const lang=l==='en'?'en':'zh';root.classList.toggle('lang-en',lang==='en');root.classList.toggle('lang-zh',lang==='zh');document.documentElement.lang=lang==='en'?'en':'zh-Hant';try{localStorage.setItem(key,lang)}catch(e){}document.querySelector('.language-button').setAttribute('aria-label',lang==='zh'?'Switch to English':'切換為繁體中文');}
let previous='zh';try{previous=localStorage.getItem(key)||'zh'}catch(e){}language(previous);
document.querySelector('.language-button')?.addEventListener('click',()=>language(root.classList.contains('lang-zh')?'en':'zh'));
const menu=document.querySelector('.menu-button');menu?.addEventListener('click',()=>{const n=document.querySelector('#top-nav');const opened=n.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});
const modal=document.querySelector('#about-dialog');document.querySelectorAll('[data-about=open]').forEach(b=>b.addEventListener('click',()=>{if(modal&&typeof modal.showModal==='function')modal.showModal();else if(modal)modal.setAttribute('open','')}));document.querySelectorAll('[data-about=close]').forEach(b=>b.addEventListener('click',()=>modal?.close()));modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});
document.querySelectorAll('.reading').forEach(art=>{art.querySelectorAll('[data-mode]').forEach(btn=>btn.addEventListener('click',()=>{const side=btn.dataset.mode==='compare';art.classList.toggle('compare',side);art.querySelectorAll('[data-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x===btn)))}))});
// Navigate to and expand a volume when following a deep link.
function openTarget(){const hash=decodeURIComponent(location.hash.slice(1));if(!hash)return;const e=document.getElementById(hash);if(e&&e.tagName==='DETAILS'){e.open=true;setTimeout(()=>e.scrollIntoView({block:'start',behavior:'instant'}),20)}}
openTarget();window.addEventListener('hashchange',openTarget);
})();