/*
 * Dad Buy It For Life Items: the data for the homepage "Dad Buy It For Life Items" tab (/#bifl).
 *
 * HOW TO ADD AN ITEM: add one line to BIFL below, e.g.
 *   { slug: 'new-item', name: 'Brand Item, Color', note: 'Why it lasts', price: '$120 at Retailer', asof: 'Nov 2, 2026', url: 'https://...', credit: 'Image: Retailer' },
 * then drop a 1200x900 JPG (white or cream background, EXIF stripped) at assets/bifl/<slug>.jpg.
 *
 * Fields:
 *   slug   - file name of the image: assets/bifl/<slug>.jpg
 *   name   - what the card shows as the title
 *   note   - optional one-line "why it's buy it for life"
 *   price  - always show a price: "$X at Retailer", "From $X on eBay", or a range
 *   asof   - optional date the price was checked; shown as "Price as of ...". Leave out to hide.
 *   url    - optional shop link; leave out for no link
 *   linkText - optional link label; defaults to "Shop"
 *   url2 / link2Text - optional second link (e.g. an example listing)
 *   credit - optional "Image: <source>" or "Photo: Dad Shoe Matt"
 */
var BIFL = [
  { slug: 'rrl-cashmere-shawl-collar', name: 'RRL (Double RL) 100% Cashmere Shawl Collar Sweater', note: 'Heavyweight cashmere that gets better with age. Find one on eBay.', price: 'Pre-owned around $320 on eBay', asof: 'Nov 2, 2026', url: 'https://www.ebay.com/sch/i.html?_nkw=RRL+cashmere+shawl+collar+sweater', linkText: 'Search eBay', url2: 'https://www.ebay.com/itm/227267008574', link2Text: 'Example listing', credit: 'Photo: eBay listing' }
];

(function () {
  var grid = document.getElementById('bifl-grid');
  if (!grid) return;
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  BIFL.forEach(function (p) {
    var card = el('article', 'owned-card');
    var fig = el('div', 'tile-img');
    var img = el('img');
    img.src = 'assets/bifl/' + p.slug + '.jpg';
    img.alt = p.name;
    img.width = 1200; img.height = 900; img.loading = 'lazy';
    fig.appendChild(img);
    card.appendChild(fig);
    var body = el('div', 'owned-body');
    body.appendChild(el('h3', 'owned-name', p.name));
    if (p.note) body.appendChild(el('p', 'bifl-note', p.note));
    var price = el('p', 'owned-price', p.price);
    if (p.asof) price.appendChild(el('span', 'asof', 'Price as of ' + p.asof));
    body.appendChild(price);
    if (p.url) {
      var a = el('a', 'owned-link', (p.linkText || 'Shop') + ' \u2192');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      body.appendChild(a);
    }
    if (p.url2) {
      var b = el('a', 'owned-link', (p.link2Text || 'Link') + ' \u2192');
      b.href = p.url2; b.target = '_blank'; b.rel = 'noopener';
      body.appendChild(b);
    }
    if (p.credit) body.appendChild(el('p', 'img-credit', p.credit));
    card.appendChild(body);
    grid.appendChild(card);
  });
})();
