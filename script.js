const slides=[...document.querySelectorAll('.slide')];
let i=0;
const counter=document.getElementById('counter');
function show(n){slides[i].classList.remove('active');i=(n+slides.length)%slides.length;slides[i].classList.add('active');counter.textContent=`${i+1}/${slides.length}`;}
document.getElementById('next').onclick=()=>show(i+1);
document.getElementById('prev').onclick=()=>show(i-1);
document.addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key))show(i+1); if(['ArrowLeft','PageUp','Backspace'].includes(e.key))show(i-1);});
show(0);
