'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Search, SlidersHorizontal, Tag } from 'lucide-react';
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
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">C</span><span>CamiDevAI <strong>· IA práctica</strong></span></a>
        <nav className="nav-links brand-navigation" aria-label="Navegación principal"><a href="/#aprender">Aprende IA</a><a href="/#negocios">Para tu negocio</a><a href="/#colaboraciones">Colaboraciones</a><a href="/#ofertas">Recomendados</a><a className="create-link" href="/creatupaginaweb">Quiero crear mi página <span>↗</span></a></nav>
      </header>

      <section className="hero brand-hero" id="inicio"><div className="hero-copy"><span className="eyebrow"><i></i> CAMILA BAÑARES · CAMIDEVAI</span><h1>La IA se entiende.<br/>Las ideas se<br/><em>hacen realidad.</em></h1><p>Soy ingeniera en Informática, creadora de contenido y divulgadora tecnológica. Te ayudo a entender la inteligencia artificial y a encontrar cómo aplicarla en tu trabajo, tu contenido y tu negocio.</p><a className="hero-button" href="#caminos">Encuentra tu próximo paso <span>↗</span></a><div className="expertise-line"><span>Informática</span><span>Formación en ciberseguridad</span><span>Postgrado en IA</span></div></div><div className="brand-portrait"><span className="portrait-tag">TECNOLOGÍA CON UN LADO HUMANO</span><img src="/camidevai-sticker.png" alt="Camila Bañares, creadora de CamiDevAI"/><div className="portrait-caption"><strong>CamiDevAI</strong><span>Aprender. Crear. Aplicar.</span></div></div></section><div className="editorial-strip"><span>INTELIGENCIA ARTIFICIAL</span><b>✳</b><span>CREATIVIDAD</span><b>✳</b><span>TECNOLOGÍA APLICADA</span><b>✳</b><span>COMUNIDAD</span></div>
<section className="brand-section welcome-section" id="bienvenida" aria-labelledby="welcome-title"><div className="welcome-copy"><span className="eyebrow dark">CONOCE CAMIDEVAI</span><h2 id="welcome-title">Te lo cuento<br/>en primera persona.</h2><p>IA práctica, ideas para tu negocio, contenido para marcas y tecnología recomendada. Un recorrido por lo que puedes encontrar aquí.</p><span className="welcome-status">Video de bienvenida · Próximamente</span></div><div className="welcome-video" role="img" aria-label="Espacio reservado para el próximo video de bienvenida de CamiDevAI"><span className="welcome-frame-label">CAMIDEVAI / EN PRIMERA PERSONA</span><strong>Una idea.<br/>Muchas posibilidades.</strong><span className="welcome-frame-bottom">Aquí podrás ver mi video de bienvenida.</span></div></section><section className="brand-paths brand-section" id="caminos"><div className="section-heading"><div><span className="eyebrow dark">ELIGE POR DÓNDE EMPEZAR</span><h2>¿Qué quieres hacer hoy?</h2></div></div><div className="path-grid"><a href="#aprender"><span>01 / APRENDER</span><h3>Entender la IA<br/>y usarla mejor.</h3><p>Ideas prácticas para tu trabajo y tu contenido.</p><b>Explorar ↗</b></a><a href="#negocios"><span>02 / CONSTRUIR</span><h3>Darle forma digital<br/>a tu negocio.</h3><p>Páginas web, asesorías y automatización.</p><b>Ver servicios ↗</b></a><a href="#colaboraciones"><span>03 / COLABORAR</span><h3>Acercar tu marca<br/>a las personas.</h3><p>Videos para marcas, demostraciones y charlas.</p><b>Trabajemos juntos ↗</b></a></div></section>
<section className="brand-section learning-section" id="aprender"><div className="section-heading"><div><span className="eyebrow dark">IA QUE PUEDES APLICAR</span><h2>Empieza con una tarea real.</h2></div></div><p className="section-lead">No necesitas conocer todas las herramientas. Elige un problema pequeño y comprueba si la IA te ayuda a resolverlo.</p><div className="learning-grid"><article><span>PARA TU TRABAJO</span><h3>De notas a próximos pasos.</h3><p>Usa un texto de ejemplo sin datos privados. Pide a la IA que identifique tareas, dudas y decisiones pendientes. Comprueba cada punto antes de usarlo.</p></article><article><span>PARA TU CONTENIDO</span><h3>Una idea, tres enfoques.</h3><p>Describe tu audiencia y el objetivo de una publicación. Pide tres enfoques distintos y elige el que mejor refleje tu experiencia y tu voz.</p></article><article><span>PARA TU NEGOCIO</span><h3>Detecta lo que se repite.</h3><p>Anota una tarea frecuente: responder consultas, ordenar solicitudes o preparar propuestas. Ese proceso es un buen punto de partida para evaluar una automatización.</p></article></div><a className="text-cta" href="/creatupaginaweb?servicio=capacitacion#empezar">Quiero una capacitación para mi equipo ↗</a></section>
<section className="brand-section business-section" id="negocios"><div className="section-heading"><div><span className="eyebrow dark">PARA EMPRENDEDORES Y EMPRESAS</span><h2>Tu proyecto, con un siguiente paso claro.</h2></div></div><div className="path-grid"><article><span>DESDE US$100</span><h3>Tu primera página.</h3><p>Una página simple para presentar lo que haces y recibir consultas. Las funciones adicionales se cotizan aparte.</p><a className="text-cta" href="/creatupaginaweb">Quiero crear mi página ↗</a></article><article><span>SEGÚN ALCANCE</span><h3>Menos tareas repetidas.</h3><p>Revisemos tu proceso y evaluemos dónde una automatización puede aportar valor.</p><a className="text-cta" href="/creatupaginaweb?servicio=automatizacion#empezar">Consultar por automatización ↗</a></article><article><span>ASESORÍA Y FORMACIÓN</span><h3>IA con un propósito.</h3><p>Conversemos sobre los objetivos de tu equipo para definir una asesoría o capacitación práctica.</p><a className="text-cta" href="/creatupaginaweb?servicio=asesoria#empezar">Cuéntame qué necesitas ↗</a></article></div></section>
<section className="brand-section collaboration-section" id="colaboraciones"><div><span className="eyebrow">CONTENIDO PARA MARCAS Y REDES SOCIALES</span><h2>Tu producto tiene una historia.<br/>Hagamos que se vea.</h2><p>Creo videos que muestran cómo se usa tu producto y por qué puede ser útil, con un estilo cercano, entretenido y dinámico. Desde la idea y el guion hasta la demostración y la edición.</p><div className="collab-tags"><span>Videos para redes</span><span>Demostraciones de productos</span><span>Tutoriales patrocinados</span></div><a className="hero-button" href="/creatupaginaweb?servicio=videos#empezar">Quiero un video para mi marca <span>↗</span></a><a className="collab-secondary" href="/creatupaginaweb?servicio=colaboracion#empezar">Consultar por charlas u otras colaboraciones ↗</a></div><aside><span>DOS FORMAS DE TRABAJAR JUNTOS</span><h3>Creación del video</h3><p className="video-mode-description">Produzco el contenido para que tu marca lo publique en sus canales.</p><h3>Creación + publicación</h3><p className="video-mode-description">Creamos el video y acordamos su difusión en las redes de CamiDevAI.</p><small>Formato, entregables y revisiones se definen en la propuesta. Uso en anuncios, exclusividad y adaptaciones se cotizan aparte. Las colaboraciones pagadas se identifican como publicidad.</small></aside></section><section className="offers" id="ofertas">
        <div className="section-heading">
          <div><span className="eyebrow dark"><Tag size={15} /> Precios destacados</span><h2>Mis recomendados y ofertas</h2></div>
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
                <div className="product-photo">{product.image ? <img className={product.imageFit === "contain" ? "product-image-contain" : undefined} src={product.image} alt={product.name} loading="lazy" /> : <div className="product-placeholder"><span aria-hidden="true">{product.category === "Audio" ? "🎧" : "📱"}</span><strong>{product.brand} · {product.category}</strong><small>Imagen no disponible</small></div>}<span className="discount-badge">-{product.discount}%</span>{product.featured && <span className="featured-badge">CAMIDEVAI ✦</span>}</div>
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

        <section className="campaigns" aria-labelledby="campaigns-title">
 <div className="section-heading"><div><span className="eyebrow dark">Más para descubrir</span><h2 id="campaigns-title">Listados y campañas</h2></div></div>
 <div className="campaign-grid"><a className="campaign-card" href="https://meli.la/1sgMAT6" target="_blank" rel="noopener noreferrer sponsored"><h3>Tienda Apple — Audio</h3><p>9 resultados</p><span>Ver ofertas →</span></a>
<a className="campaign-card" href="https://meli.la/2ToisiH" target="_blank" rel="noopener noreferrer sponsored"><h3>Tienda Apple — Todos los iPhone</h3><p>Explora los modelos disponibles</p><span>Ver ofertas →</span></a>
<a className="campaign-card" href="https://meli.la/2rFDe8t" target="_blank" rel="noopener noreferrer sponsored"><h3>Belleza y Cuidado Personal</h3><p>Cupón BELLEZA15 · productos seleccionados</p><span>Ver ofertas →</span></a>
<a className="campaign-card" href="https://www.mercadolibre.cl/ofertas/fiestas-patrias" target="_blank" rel="noopener noreferrer"><h3>Ofertas Fiestas Patrias</h3><p>Ver campaña en Mercado Libre</p><span>Ver ofertas →</span></a></div>
 </section>
 <section className="coupons" aria-labelledby="coupons-title">
 <div className="section-heading"><div><span className="eyebrow dark">Cupones del miércoles</span><h2 id="coupons-title">Un descuento extra</h2></div></div>
 <p className="coupon-note">Confirma la vigencia y las condiciones al aplicar el código en Mercado Libre.</p>
 <div className="coupon-grid"><article className="coupon-card"><span>Todo Mercado Libre</span><h3>$45.000 OFF</h3><code>CHILEFESTEJA45</code><p>En compras sobre $500.000</p></article>
<article className="coupon-card"><span>Todo Mercado Libre</span><h3>$25.000 OFF</h3><code>CHICHAYRIENDA25</code><p>En compras sobre $250.000</p></article>
<article className="coupon-card"><span>Todo Mercado Libre</span><h3>$10.000 OFF</h3><code>CHILEGRANDE10</code><p>En compras sobre $100.000</p></article>
<article className="coupon-card"><span>Moda</span><h3>10% OFF</h3><code>MODA99</code><p>En compras sobre $34.990 · tope $5.000</p></article>
<article className="coupon-card"><span>Belleza</span><h3>15% OFF</h3><code>BELLEZA15</code><p>En compras sobre $39.990 · tope $7.000 · productos seleccionados</p></article></div>
 </section>
        <section className="studio-banner"><div><span className="eyebrow">CAMIDEVAI STUDIO</span><h2>Tu idea merece<br/>su propia <em>página.</em></h2><p>Tu página simple en la red desde <strong>US$100.</strong></p><a className="hero-button" href="/creatupaginaweb">Quiero crear mi página <span>↗</span></a></div><div className="studio-price"><span>PRECIO BASE · PÁGINA SIMPLE</span><strong><small>US$</small>100</strong><p>Funciones adicionales se cotizan aparte.</p></div></section><aside className="more-deals"><div><span>¿Quieres seguir buscando?</span><h2>Hay muchas más ofertas esperando por ti.</h2></div><a href="https://mercadolibre.com/sec/1gho3HX" target="_blank" rel="noopener noreferrer sponsored">Ver la lista completa <ArrowRight size={19} /></a></aside>
      </section>

      <footer><a className="brand" href="#inicio"><span className="brand-mark">C</span><span>CamiDevAI <strong>· IA práctica</strong></span></a><p>Selección independiente de ofertas con enlaces de afiliada. Puedo recibir una comisión si compras, sin costo adicional para ti. Los precios y la disponibilidad pueden cambiar en Mercado Libre.</p><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}
