'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Search, SlidersHorizontal, Sparkles, Tag } from 'lucide-react';
import { products } from './products';

const categories = ['Todos', ...Array.from(new Set(products.map((product) => product.category)))];
const money = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState('discount');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es');
    const result = products.filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category;
      const matchesQuery = `${product.name} ${product.brand} ${product.category}`.toLocaleLowerCase('es').includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return b.discount - a.discount;
    });
  }, [category, query, sort]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">C</span><span>Camidevai <strong>elige</strong></span></a>
        <a className="top-link" href="#ofertas">Ver ofertas <ArrowRight size={17} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Selección de Camidevai</span>
          <h1>Ofertas que sí<br /><em>valen la pena.</em></h1>
          <p>Reviso, comparo y guardo los mejores descuentos tech para que tú solo elijas tu favorito.</p>
          <a className="hero-button" href="#ofertas">Encontrar mi oferta <ArrowRight size={19} /></a>
          <span className="hero-note">Actualizado con nuevos favoritos ✦</span>
        </div>
        <div className="hero-visual" aria-label="Camidevai recomienda estas ofertas">
          <div className="burst" />
          <span className="sticker sticker-one">¡Hasta 60% OFF!</span>
          <span className="sticker sticker-two">Elegido para ti ✨</span>
          <img src="/camidevai-sticker.png" alt="Camidevai señalando las ofertas" />
        </div>
      </section>

      <section className="offers" id="ofertas">
        <div className="section-heading">
          <div><span className="eyebrow dark"><Tag size={15} /> Precios destacados</span><h2>Encuentra tu próxima compra</h2></div>
          <p>{filteredProducts.length} {filteredProducts.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}</p>
        </div>

        <div className="filter-panel" aria-label="Filtros de productos">
          <label className="search-box"><Search size={20} /><span className="sr-only">Buscar productos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca monitor, teclado, audífonos..." /></label>
          <div className="category-list" aria-label="Filtrar por categoría">
            {categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)} type="button">{item}</button>)}
          </div>
          <label className="sort-box"><SlidersHorizontal size={18} /><span className="sr-only">Ordenar productos</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="discount">Mayor descuento</option><option value="price-low">Menor precio</option><option value="price-high">Mayor precio</option></select></label>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-photo"><img src={product.image} alt={product.name} /><span className="discount-badge">-{product.discount}%</span>{product.featured && <span className="featured-badge">CAMIDEVAI ✦</span>}</div>
                <div className="product-body">
                  <div className="product-meta"><span>{product.category}</span><span>{product.brand}</span></div>
                  <h3>{product.name}</h3>
                  <div className="prices"><span className="old-price">Antes {money.format(product.oldPrice)}</span><strong>{money.format(product.price)}</strong></div>
                  <a href={product.url} target="_blank" rel="noopener noreferrer sponsored">Ver oferta en Mercado Libre <ArrowRight size={18} /></a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><span>🔎</span><h3>No encontramos ese producto</h3><p>Prueba con otra palabra o selecciona “Todos”.</p><button type="button" onClick={() => { setQuery(''); setCategory('Todos'); }}>Limpiar filtros</button></div>
        )}

        <aside className="more-deals"><div><span>¿Quieres seguir buscando?</span><h2>Hay muchas más ofertas esperando por ti.</h2></div><a href="https://mercadolibre.com/sec/1gho3HX" target="_blank" rel="noopener noreferrer sponsored">Ver la lista completa <ArrowRight size={19} /></a></aside>
      </section>

      <footer><a className="brand" href="#inicio"><span className="brand-mark">C</span><span>Camidevai <strong>elige</strong></span></a><p>Selección independiente de ofertas con enlaces de afiliada. Puedo recibir una comisión si compras, sin costo adicional para ti. Los precios y la disponibilidad pueden cambiar en Mercado Libre.</p><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}
