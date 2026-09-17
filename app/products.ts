export type Product = { id: string; name: string; brand: string; category: string; oldPrice: number; price: number; discount: number; image?: string; imageFit?: "contain"; url: string; featured?: boolean };

// Para agregar productos, copia uno de estos bloques y cambia sus datos.
// Las categorías nuevas aparecen automáticamente en los filtros.
export const products: Product[] = [
  { id: 'arzopa-s1', name: 'Monitor portátil S1 15,6” con parlante 1080p', brand: 'Arzopa', category: 'Monitores', oldPrice: 199990, price: 79990, discount: 60, image: '/products/arzopa.png', url: 'https://meli.la/1hbYQg8', featured: true },
  { id: 'caixun-c27f4f', name: 'Monitor gamer plano 27” FHD IPS 165Hz C27F4F', brand: 'Caixun', category: 'Monitores', oldPrice: 259990, price: 114990, discount: 55, image: '/products/caixun.png', url: 'https://meli.la/1mbrSsT' },
  { id: 'anker-hub', name: 'Adaptador USB-C Hub 5 en 1 HDMI 100W', brand: 'Anker', category: 'Accesorios', oldPrice: 29990, price: 18990, discount: 36, image: '/products/anker.png', url: 'https://meli.la/1vBK2KG' },
  { id: 'flashnote-1tb', name: 'Disco duro externo 1TB USB 3.0 para PC, PS4 y Xbox', brand: 'FLASHNOTE', category: 'Almacenamiento', oldPrice: 99990, price: 58190, discount: 41, image: '/products/flashnote.png', url: 'https://meli.la/2XX5trR' },
  { id: 'hyperx-cloud-flight-2', name: 'Audífonos gaming inalámbricos Cloud Flight 2', brand: 'HyperX', category: 'Audio', oldPrice: 139990, price: 96400, discount: 31, image: '/products/hyperx.png', url: 'https://meli.la/1vkLR5m' },
  { id: 'aula-f75', name: 'Teclado gamer mecánico español inalámbrico F75 75% RGB', brand: 'Aula', category: 'Teclados', oldPrice: 78000, price: 59950, discount: 23, image: '/products/aula.png', url: 'https://meli.la/2m5TEqo' },
  {"id":"airpods-4-anc","image":"/products/airpods-4-anc.png","imageFit":"contain","name":"Apple AirPods 4 con Cancelación Activa de Ruido — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":249990,"price":205815,"discount":17,"url":"https://meli.la/1PDQSAU"},
  {"id":"beats-solo-buds","image":"/products/beats-solo-buds.jpg","imageFit":"contain","name":"Audífonos Beats Solo Buds Inalámbricos — Morado Ártico","brand":"Beats","category":"Audio","oldPrice":99990,"price":84490,"discount":15,"url":"https://meli.la/2uwpMeq"},
  {"id":"airpods-pro-3","image":"/products/airpods-pro-3.jpg","imageFit":"contain","name":"Apple AirPods Pro 3 Blanco con Cancelación de Ruido — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":299990,"price":274330,"discount":8,"url":"https://meli.la/2NSEMkR"},
  {"id":"airpods-max-2","image":"/products/airpods-max-2.jpg","imageFit":"contain","name":"AirPods Max 2 — Naranja — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":649990,"price":584911,"discount":10,"url":"https://meli.la/2mvnuEH"},
  {"id":"earpods-usb-c","image":"/products/earpods-usb-c.jpg","imageFit":"contain","name":"Auriculares Apple EarPods (USB-C) Blanco — Distribuidor Autorizado","brand":"Apple","category":"Audio","oldPrice":18990,"price":17157,"discount":9,"url":"https://meli.la/2TYoHWC"},
  {"id":"iphone-15-128-azul","image":"/products/iphone-15-128-azul.jpg","imageFit":"contain","name":"Apple iPhone 15 (128 GB) — Azul — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":899990,"price":719032,"discount":20,"url":"https://meli.la/1QaeaeK"},
  {"id":"iphone-16-128-negro","image":"/products/iphone-16-128-negro.jpg","imageFit":"contain","name":"Apple iPhone 16 (128 GB) — Negro — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":949990,"price":799990,"discount":15,"url":"https://meli.la/2edvwMJ"},
  {"id":"iphone-16-128-rosa","image":"/products/iphone-16-128-rosa.jpg","imageFit":"contain","name":"Apple iPhone 16 (128 GB) — Rosa — Distribuidor Autorizado","brand":"Apple","category":"iPhone","oldPrice":949990,"price":809990,"discount":14,"url":"https://meli.la/2RgC5WW"},
];
