const rows = [
  ['main','Część główna na lewą dłoń','100%',2,'1 biała + 1 żółta','white yellow'],
  ['main','Część główna na prawą dłoń','100%',2,'1 biała + 1 żółta','white yellow'],
  ['main','Część główna na prawą dłoń','80%',1,'1 czarna','black'],
  ['main','Część główna na lewą dłoń','80%',1,'1 czarna','black'],
  ['straps','Uchwyty pasków','Do skali 100%',10,'5 par',''],
  ['straps','Uchwyty pasków','Do skali 80%',10,'5 par',''],
  ['covers','Osłony kciuka','100%',2,'2 białe','white'],
  ['covers','Osłony kciuka','90%',2,'2 żółte','yellow'],
  ['covers','Osłony kciuka','80%',4,'2 żółte + 2 czarne','yellow black'],
  ...['100%','90%','85%','80%','70%'].map(size=>['covers','Osłony palców',size,4,'2 żółte + 2 czarne','yellow black']),
  ['straps','Gumka do regulacji naciągu','10 mm',null,'1 pełna szpula · biała · do przycięcia','white'],
  ['straps','Rzep z haczykami','',null,'1 rolka · biała · do przycięcia','white'],
  ['straps','Rzep z pętelkami','',null,'1 rolka · biała · do przycięcia','white'],
  ['straps','Łączniki rzepu','',8,'8 żółtych · łączenie taśm lub ograniczniki','yellow']
];
const inventory = document.querySelector('#inventory');
function render(filter='all') {
  document.querySelectorAll('[data-photo-group]').forEach(photo=>photo.hidden=filter!=='all'&&photo.dataset.photoGroup!==filter);
  const visible=rows.filter(row=>filter==='all'||row[0]===filter);
  inventory.innerHTML=visible.map(([group,name,scale,count,colours,swatches])=>`<article class="part-card"><div class="part-top"><span class="part-type">${group==='main'?'Podparcie nadgarstka':group==='covers'?'Palce i kciuk':'Uchwyty i paski'}</span><span class="quantity">${count===null?'W zestawie':count+' szt.'}</span></div><h3>${name}</h3>${scale?`<div class="scale">${scale}</div>`:''}<p class="part-colours">${swatches.split(' ').filter(Boolean).map(c=>`<span class="swatch ${c}" aria-hidden="true"></span>`).join('')}<span>${colours}</span></p></article>`).join('');
  document.querySelector('#part-count').textContent=filter==='all'?'62 drukowane elementy + 3 rolki taśm':`Pozycji w zestawie: ${visible.length}`;
}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  render(button.dataset.filter);
}));
function openHash(){if(location.hash==='#heat')document.querySelector('#heat').open=true;}
window.addEventListener('hashchange',openHash);openHash();
let printState=[];
window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('details')].map(d=>d.open);document.querySelectorAll('details').forEach(d=>d.open=true);render();});
window.addEventListener('afterprint',()=>{document.body.classList.remove('print-label');document.querySelectorAll('details').forEach((d,i)=>d.open=printState[i]);render(document.querySelector('.filter.active').dataset.filter);});
document.querySelector('#print-guide').addEventListener('click',()=>window.print());
const config=window.GUIDE_CONFIG;

if(config.readyForFamily&&config.publicUrl){
  try{
    const url=new URL(config.publicUrl);
    if(url.protocol!=='https:'||url.username||url.password||['localhost','127.0.0.1'].includes(url.hostname))throw new Error('Wymagany jest publiczny adres HTTPS.');
    const qr=qrcode(0,'M');qr.addData(url.href);qr.make();
    const svg=qr.createSvgTag({cellSize:5,margin:20,scalable:true});
    document.querySelector('#qr-code').innerHTML=svg;document.querySelector('#label-code').innerHTML=svg;
    document.querySelector('#qr-code svg').setAttribute('aria-label','Kod QR prowadzący do tej instrukcji');
    document.querySelector('#qr-message').textContent='Przed naklejeniem etykiety na paczkę sprawdź, czy wydrukowany kod da się zeskanować.';
    document.querySelector('#label-url').textContent=url.href;
    const download=document.querySelector('#download-qr');download.hidden=false;download.href=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));download.download='pomocna-dlon-qr.svg';
    const printButton=document.querySelector('#print-label');printButton.disabled=false;printButton.addEventListener('click',()=>{document.body.classList.add('print-label');window.print();});
  }catch(error){document.querySelector('#qr-message').textContent='Etykieta na paczkę wymaga poprawnego, stałego adresu strony HTTPS.';}
}
