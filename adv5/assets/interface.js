// Somente interface local: sem cookies, pixels, APIs ou checkout.
(() => {
const byId = id => document.getElementById(id);
const show = (id,visible) => { const el=byId(id); if(el) el.style.setProperty('display',visible?'block':'none','important'); };
function units(n){['2bocas','4bocas','seta2','seta4'].forEach((id,i)=>show(id,i%2===(n===1?0:1)));}
units(1); show('grupo-cor-1',true);show('grupo-cor-3',true);show('grupo-cor-2',false);show('grupo-cor-4',false);
function activate(el,fn){if(!el)return;el.tabIndex=0;el.setAttribute('role','button');el.addEventListener('click',e=>{e.preventDefault();fn();});el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn();}});}
activate(byId('button-79805901'),()=>units(1));activate(byId('button-17884694'),()=>units(2));
document.querySelectorAll('[action-elem-visibility-hidden_show]').forEach(el=>{
const target=el.getAttribute('action-elem-visibility-hidden_show');
if(!target.startsWith('grupo-cor-'))return;
activate(el,()=>{show(el.getAttribute('action-elem-visibility-show_hidden'),false);show(target,true);});
});
document.querySelectorAll('.acordion-head').forEach(head=>{head.setAttribute('aria-expanded','false');activate(head,()=>{const open=!head.classList.contains('act');head.classList.toggle('act',open);head.setAttribute('aria-expanded',String(open));});});
document.querySelectorAll('[data-novo-checkout]').forEach(a=>a.addEventListener('click',e=>{if(!a.getAttribute('href')||a.getAttribute('href')==='#')e.preventDefault();}));
})();
