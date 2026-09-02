export type Product = { id: string; name: string; brand: string; category: string; oldPrice: number; price: number; discount: number; image: string; url: string; featured?: boolean };

// Para agregar productos, copia uno de estos bloques y cambia sus datos.
// Las categorías nuevas aparecen automáticamente en los filtros.
export const products: Product[] = [
  { id: 'arzopa-s1', name: 'Monitor portátil S1 15,6” con parlante 1080p', brand: 'Arzopa', category: 'Monitores', oldPrice: 199990, price: 79990, discount: 60, image: '/products/arzopa.png', url: 'https://meli.la/1hbYQg8', featured: true },
  { id: 'caixun-c27f4f', name: 'Monitor gamer plano 27” FHD IPS 165Hz C27F4F', brand: 'Caixun', category: 'Monitores', oldPrice: 259990, price: 114990, discount: 55, image: '/products/caixun.png', url: 'https://meli.la/1mbrSsT' },
  { id: 'anker-hub', name: 'Adaptador USB-C Hub 5 en 1 HDMI 100W', brand: 'Anker', category: 'Accesorios', oldPrice: 29990, price: 18990, discount: 36, image: '/products/anker.png', url: 'https://meli.la/1vBK2KG' },
  { id: 'flashnote-1tb', name: 'Disco duro externo 1TB USB 3.0 para PC, PS4 y Xbox', brand: 'FLASHNOTE', category: 'Almacenamiento', oldPrice: 99990, price: 58190, discount: 41, image: '/products/flashnote.png', url: 'https://meli.la/2XX5trR' },
  { id: 'hyperx-cloud-flight-2', name: 'Audífonos gaming inalámbricos Cloud Flight 2', brand: 'HyperX', category: 'Audio', oldPrice: 139990, price: 96400, discount: 31, image: '/products/hyperx.png', url: 'https://meli.la/1vkLR5m' },
  { id: 'aula-f75', name: 'Teclado gamer mecánico español inalámbrico F75 75% RGB', brand: 'Aula', category: 'Teclados', oldPrice: 78000, price: 59950, discount: 23, image: '/products/aula.png', url: 'https://meli.la/2m5TEqo' },
];
