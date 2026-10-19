/*
 * Shoes I Own: the data for the homepage "Shoes I Own" tab (/#owned).
 *
 * HOW TO ADD A PAIR: add one line to OWNED below, e.g.
 *   { slug: 'new-pair', name: 'Brand Model, Color', price: '$120 at Retailer', url: 'https://...', credit: 'Image: Retailer' },
 * then drop a 1200x900 JPG (white background, EXIF stripped) at assets/owned/<slug>.jpg.
 *
 * Fields:
 *   slug   - file name of the image: assets/owned/<slug>.jpg
 *   name   - what the card shows as the title
 *   price  - "$X at Retailer" (or a note when there's no live price)
 *   asof   - optional; defaults to PRICE_DATE. Set to '' to hide (e.g. for a note)
 *   url    - optional shop link; leave out for no link
 *   credit - "Image: <source>". When Matt swaps in his own photo at the same path,
 *            change this to 'Photo: Dad Shoe Matt'.
 */
var PRICE_DATE = 'Oct 18, 2026';
var OWNED = [
  { slug: 'af1-flyease-white', name: 'Nike Air Force 1 Low FlyEase / EasyOn, White', price: 'From $80 on StockX (resale; varies by size)', url: 'https://stockx.com/nike-air-force-1-low-flyease-white', credit: 'Image: StockX' },
  { slug: 'stb-dev-tobacco', name: 'Shoe the Bear Dev Suede Chelsea, Tobacco', price: 'No longer sold: Shoe the Bear has closed its store.', asof: '', credit: 'Image: STAG Provisions' },
  { slug: 'skechers-aero-burst', name: 'Skechers Aero Burst, White', price: '$155 at Skechers', url: 'https://www.skechers.com/skechers-aero-burst/246210_WHT.html', credit: 'Image: Skechers' },
  { slug: 'tecovas-black', name: 'Tecovas, black', price: 'From $285 at Tecovas', url: 'https://www.tecovas.com/collections/mens-boots', credit: 'Image: Tecovas' },
  { slug: 'to-boot-black-suede-penny', name: 'To Boot New York suede penny loafers, black', price: '$425 at To Boot New York', url: 'https://toboot.com/products/belfast-black-suede', credit: 'Image: To Boot New York' }
];

(function () {
  var grid = document.getElementById('owned-grid');
  if (!grid) return;
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  OWNED.forEach(function (p) {
    var card = el('article', 'owned-card');
    var fig = el('div', 'tile-img');
    var img = el('img');
    img.src = 'assets/owned/' + p.slug + '.jpg';
    img.alt = p.name;
    img.width = 1200; img.height = 900; img.loading = 'lazy';
    fig.appendChild(img);
    card.appendChild(fig);
    var body = el('div', 'owned-body');
    body.appendChild(el('h3', 'owned-name', p.name));
    var price = el('p', 'owned-price', p.price);
    var asof = p.asof === undefined ? PRICE_DATE : p.asof;
    if (asof) price.appendChild(el('span', 'asof', 'Price as of ' + asof));
    body.appendChild(price);
    if (p.url) {
      var a = el('a', 'owned-link', 'Shop \u2192');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      body.appendChild(a);
    }
    if (p.credit) body.appendChild(el('p', 'img-credit', p.credit));
    card.appendChild(body);
    grid.appendChild(card);
  });
})();
