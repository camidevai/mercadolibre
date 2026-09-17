const products = [
  { id:'arzopa', name:'Monitor portátil S1 15,6” con parlante 1080p', brand:'Arzopa', category:'Monitores', oldPrice:199990, price:79990, discount:60, image:'/assets/arzopa.png', url:'https://meli.la/1hbYQg8', featured:true },
  { id:'caixun', name:'Monitor gamer plano 27” FHD IPS 165Hz C27F4F', brand:'Caixun', category:'Monitores', oldPrice:259990, price:114990, discount:55, image:'/assets/caixun.png', url:'https://meli.la/1mbrSsT' },
  { id:'anker', name:'Adaptador USB-C Hub 5 en 1 HDMI 100W', brand:'Anker', category:'Accesorios', oldPrice:29990, price:18990, discount:36, image:'/assets/anker.png', url:'https://meli.la/1vBK2KG' },
  { id:'flashnote', name:'Disco duro externo 1TB USB 3.0 para PC, PS4 y Xbox', brand:'FLASHNOTE', category:'Almacenamiento', oldPrice:99990, price:58190, discount:41, image:'/assets/flashnote.png', url:'https://meli.la/2XX5trR' },
  { id:'hyperx', name:'Audífonos gaming inalámbricos Cloud Flight 2', brand:'HyperX', category:'Audio', oldPrice:139990, price:96400, discount:31, image:'/assets/hyperx.png', url:'https://meli.la/1vkLR5m' },
  { id:'aula', name:'Teclado gamer mecánico español inalámbrico F75 75% RGB', brand:'Aula', category:'Teclados', oldPrice:78000, price:59950, discount:23, image:'/assets/aula.png', url:'https://meli.la/2m5TEqo' },
  {"id":"airpods-4-anc","image":"/assets/airpods-4-anc.png","imageFit":"contain","name":"Apple AirPods 4 con Cancelación Activa de Ruido — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":249990,"price":205815,"discount":17,"url":"https://meli.la/1PDQSAU"},
  {"id":"beats-solo-buds","image":"/assets/beats-solo-buds.jpg","imageFit":"contain","name":"Audífonos Beats Solo Buds Inalámbricos — Morado Ártico","brand":"Beats","category":"Audio","oldPrice":99990,"price":84490,"discount":15,"url":"https://meli.la/2uwpMeq"},
  {"id":"airpods-pro-3","image":"/assets/airpods-pro-3.jpg","imageFit":"contain","name":"Apple AirPods Pro 3 Blanco con Cancelación de Ruido — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":299990,"price":274330,"discount":8,"url":"https://meli.la/2NSEMkR"},
  {"id":"airpods-max-2","image":"/assets/airpods-max-2.jpg","imageFit":"contain","name":"AirPods Max 2 — Naranja — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":649990,"price":584911,"discount":10,"url":"https://meli.la/2mvnuEH"},
  {"id":"earpods-usb-c","image":"/assets/earpods-usb-c.jpg","imageFit":"contain","name":"Auriculares Apple EarPods (USB-C) Blanco — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":18990,"price":17157,"discount":9,"url":"https://meli.la/2TYoHWC"},
  {"id":"iphone-15-128-azul","image":"/assets/iphone-15-128-azul.jpg","imageFit":"contain","name":"Apple iPhone 15 (128 GB) — Azul — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":899990,"price":719032,"discount":20,"url":"https://meli.la/1QaeaeK"},
  {"id":"iphone-16-128-negro","image":"/assets/iphone-16-128-negro.jpg","imageFit":"contain","name":"Apple iPhone 16 (128 GB) — Negro — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":949990,"price":799990,"discount":15,"url":"https://meli.la/2edvwMJ"},
  {"id":"iphone-16-128-rosa","image":"/assets/iphone-16-128-rosa.jpg","imageFit":"contain","name":"Apple iPhone 16 (128 GB) — Rosa — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":949990,"price":809990,"discount":14,"url":"https://meli.la/2RgC5WW"},
];

const money = new Intl.NumberFormat('es-CL', { style:'currency', currency:'CLP', maximumFractionDigits:0 });
const grid = document.querySelector('#product-grid');
const empty = document.querySelector('#empty-state');
const count = document.querySelector('#result-count');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
const categoriesNode = document.querySelector('#categories');
let activeCategory = 'Todos';

['Todos', ...new Set(products.map(product => product.category))].forEach(category => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = category;
  button.className = category === 'Todos' ? 'active' : '';
  button.addEventListener('click', () => {
    activeCategory = category;
    categoriesNode.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
    render();
  });
  categoriesNode.append(button);
});

function card(product) {
  return `<article class="product-card">
    <div class="product-photo">${product.image ? `<img class="${product.imageFit === "contain" ? "product-image-contain" : ""}" src="${product.image}" alt="${product.name}" loading="lazy">` : `<div class="product-placeholder"><span>${product.category === "Audio" ? "🎧" : "📱"}</span><strong>${product.brand} · ${product.category}</strong><small>Imagen no disponible</small></div>`}<span class="discount-badge">-${product.discount}%</span>${product.featured ? '<span class="featured-badge">CAMIDEVAI ✦</span>' : ''}</div>
    <div class="product-body"><div class="product-meta"><span>${product.category}</span><span>${product.brand}</span></div><h3>${product.name}</h3><div class="prices"><span class="old-price">Antes ${money.format(product.oldPrice)}</span><strong>${money.format(product.price)}</strong></div><a href="${product.url}" target="_blank" rel="noopener noreferrer sponsored">Ver oferta en Mercado Libre <span>→</span></a></div>
  </article>`;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('es');
  const visible = products.filter(product => (activeCategory === 'Todos' || product.category === activeCategory) && `${product.name} ${product.brand} ${product.category}`.toLocaleLowerCase('es').includes(query));
  visible.sort((a,b) => sort.value === 'price-low' ? a.price-b.price : sort.value === 'price-high' ? b.price-a.price : b.discount-a.discount);
  grid.innerHTML = visible.map(card).join('');
  grid.hidden = visible.length === 0;
  empty.hidden = visible.length !== 0;
  count.textContent = `${visible.length} ${visible.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}`;
}

search.addEventListener('input', render);
sort.addEventListener('change', render);
document.querySelector('#clear-filters').addEventListener('click', () => { search.value=''; activeCategory='Todos'; categoriesNode.querySelectorAll('button').forEach((button,index) => button.classList.toggle('active', index===0)); render(); });
render();
