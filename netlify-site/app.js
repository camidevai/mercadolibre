// Para actualizar la vitrina, agrega o modifica los productos de esta lista.
const products = [
 ['escritorio-ciriaca','Escritorio Ciriaca eléctrico de altura ajustable 120 cm · VIDITA','Escritorios','ciriaca-producto-real.webp','https://meli.la/16RyjyV','SWS5QT-XV09'],
 ['masterg-20000','Batería externa MasterG 20.000 mAh · 22,5 W USB-C','Cargadores','masterg-illustration.svg','https://meli.la/1YxwePp'],
 ['arzopa','Monitor portátil Arzopa 15,6”','Monitores','arzopa.png','https://meli.la/1hbYQg8'],
 ['caixun','Monitor gamer Caixun 27”','Monitores','caixun.png','https://meli.la/1mbrSsT'],
 ['anker','Hub Anker USB-C 5 en 1','Accesorios','anker.png','https://meli.la/1vBK2KG'],
 ['flashnote','Disco externo Flashnote 1 TB','Almacenamiento','flashnote.png','https://meli.la/2XX5trR'],
 ['hyperx','Audífonos HyperX Cloud Flight 2','Audio','hyperx.png','https://meli.la/1vkLR5m'],
 ['aula','Teclado mecánico Aula F75','Accesorios','aula.png','https://meli.la/2m5TEqo'],
 ['airpods-4','Apple AirPods 4 con cancelación de ruido','Audio','airpods-4-anc.png','https://meli.la/1PDQSAU'],
 ['beats','Beats Solo Buds','Audio','beats-solo-buds.jpg','https://meli.la/2uwpMeq'],
 ['airpods-pro','Apple AirPods Pro 3','Audio','airpods-pro-3.jpg','https://meli.la/2NSEMkR'],
 ['airpods-max','Apple AirPods Max 2','Audio','airpods-max-2.jpg','https://meli.la/2mvnuEH'],
 ['earpods','Apple EarPods USB-C','Audio','earpods-usb-c.jpg','https://meli.la/2TYoHWC'],
 ['iphone15','iPhone 15 128 GB · Azul','Celulares','iphone-15-128-azul.jpg','https://meli.la/1QaeaeK'],
 ['iphone16black','iPhone 16 128 GB · Negro','Celulares','iphone-16-128-negro.jpg','https://meli.la/2edvwMJ'],
 ['iphone16pink','iPhone 16 128 GB · Rosa','Celulares','iphone-16-128-rosa.jpg','https://meli.la/2RgC5WW']
];
const grid=document.querySelector('#product-grid'), empty=document.querySelector('#empty-state'), count=document.querySelector('#result-count'), search=document.querySelector('#search'), categoryBar=document.querySelector('#categories');
let category='Todos';
for(const name of ['Todos',...new Set(products.map(p=>p[2]))]) {const btn=document.createElement('button');btn.type='button';btn.textContent=name;btn.setAttribute('aria-pressed',String(name==='Todos'));btn.classList.toggle('active',name==='Todos');btn.onclick=()=>{category=name;for(const b of categoryBar.children){b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));}render();};categoryBar.append(btn);}
function render(){const term=search.value.trim().toLocaleLowerCase('es');const visible=products.filter(p=>(category==='Todos'||p[2]===category)&&`${p[1]} ${p[2]} ${p[5]||''}`.toLocaleLowerCase('es').includes(term));grid.replaceChildren(...visible.map(p=>{const article=document.createElement('article');article.className='card';const photo=document.createElement('div');photo.className='photo';const img=document.createElement('img');img.src=`/assets/${p[3]}`;img.alt=p[1];img.loading='lazy';photo.append(img);const body=document.createElement('div');body.className='body';const cat=document.createElement('span');cat.className='category';cat.textContent=p[2];const title=document.createElement('h3');title.textContent=p[1];const link=document.createElement('a');link.href=p[4];link.target='_blank';link.rel='noopener noreferrer sponsored';link.textContent='Ver en Mercado Libre ↗';if(p[5]){const lookup=document.createElement('p');lookup.className='lookup-code';lookup.textContent=`Búscalo en Mercado Libre: ${p[5]}`;body.append(cat,title,lookup,link);}else{body.append(cat,title,link);}article.append(photo,body);return article;}));grid.hidden=!visible.length;empty.hidden=!!visible.length;count.textContent=`${visible.length} ${visible.length===1?'producto':'productos'}`;}
search.addEventListener('input',render);document.querySelector('#clear-filters').onclick=()=>{search.value='';categoryBar.firstElementChild.click();search.focus();};render();
