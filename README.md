# Dad Shoe Rotation website

Plain HTML + CSS, with a small gallery script on the homepage. No build step. Ready for GitHub Pages: this folder is the published site root. `.nojekyll` is included so GitHub serves the files exactly as they are.

Do not edit or delete `CNAME` (`dadshoerotation.com`).

## Preview locally

```
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## File map

```
index.html                     One-page rotation: compact header, 2x3 first-view grid, a large section per pick
assets/gallery/<slot>/         Swipeable product photos (side first, top-down second when available)
assets/js/gallery.js           Gallery arrows/dots and old-hash redirects
slots/*.html                   Redirects to the matching homepage anchor
insoles.html, budget.html      Redirects to the homepage (those sections are archived off the live site)
blog/index.html                Blog post list
blog/my-dad-shoe-rotation.html First post (Oct 18, 2026)
blog/post-template.html        Copy this file to start a new post
404.html                       "Page not found" page
assets/css/style.css           All styles (brand colors are at the top)
```

The previous tabbed homepage (Matt's Picks, The Classics, Inflation Sucks, Shoes I Own, Dad Buy It For Life Items) and the full insoles and slot pages were archived on Nov 22, 2026, outside this repo, at `../archive/2026-11-22-one-page-rotation/`.

Old links still work: slot pages redirect to `/#everyday`, `/#workout`, `/#clean-white`, `/#dress`, `/#boot`, and `/#wildcard`. `budget.html` goes to `/#rotation`. `insoles.html` goes to `/`. Homepage hashes `#picks`, `#classics`, `#inflation`, `#owned`, `#bifl`, and `#slot-1` through `#slot-6` are remapped in `gallery.js`.

## Current rotation (Matt's Picks)

| Slot | Homepage section | Current pick | Gallery |
|---|---|---|---|
| 1. Everyday | `#everyday` | New Balance Made in USA 990v7, Kool Gray / Calcium / Light Arctic Grey, U990GR7, $199.99 at New Balance | `assets/gallery/everyday/` (6 angles, top-down is `02-top.jpg`) |
| 2. Workout | `#workout` | Nike Pegasus Plus 2, Flash Crimson, IM2541-600, $170 at Nike | `assets/gallery/workout/` (6 angles, including top-down) |
| 3. Clean White | `#clean-white` | Magnanni Elonso Cap Toe, white, $229.97 at Nordstrom Rack (shop link must stay Rack) | `assets/gallery/clean-white/01-side.jpg` only; no top-down was available |
| 4. Dress | `#dress` | Allen Edmonds oxfords; pictured Park Avenue cap-toe in Coffee, $450 list (out of stock) | `assets/gallery/dress/` (6 angles, including top-down) |
| 5. Boot | `#boot` | Shoe the Bear Dev Suede Chelsea, Tobacco (no longer sold) | `assets/gallery/boot/` (5 angles; `02-top.jpg` is a high shaft angle, not a true pair overhead) |
| 6. Wildcard | `#wildcard` | On Cloudtilt Arc, Alloy/Ivory, $180 at On | `assets/gallery/wildcard/` (5 angles, including top-down) |

The first-view grid uses each gallery's `01-side.jpg`. Backup thumbs reuse existing files under `assets/owned/`, `assets/classics/`, and `assets/slots/`.

Gallery images are 1400 x 1050 JPGs, shoe centered on white, progressive, typically under 200 KB. Image 1 is the main side profile. Image 2 is the top-down angle when one exists.

## Changing a slot's pick

Edit that shoe's `<article class="shoe">` block in `index.html` (name, price, link, blurb, backup thumbs, and more-ideas chips). Replace the files in `assets/gallery/<slot>/`, keeping `01-side.jpg` first and `02-top.jpg` second when a top-down shot is available. Update the matching glance-tile image and the credit line in the footer.

## Adding a blog post

1. Copy `blog/post-template.html` to a new file, such as `blog/on-cloudtilt-arc-review.html`. Use lowercase with dashes.
2. In the new file:
   - Replace the `<title>`, the description, the `<h1>`, the date, and the body text.
   - Delete the `<meta name="robots" content="noindex">` line and the "HOW TO USE" comment.
3. Open `blog/index.html` and copy one `<li class="post-item">…</li>` block. Paste it at the top of the list, so the newest post comes first. Change the date, title, link, and one-line summary.
4. For photos in posts, put them in `assets/blog/` (create the folder) and use `<img src="../assets/blog/photo.jpg" alt="…">`.

## Notes

- The byline is only "Dad Shoe Matt."
- Only show picks Matthew has explicitly set. Everything else stays out or is labeled as more ideas, not as a current pick.
- Always show prices. The Dev is the exception and keeps its no-longer-sold note.
- No political messaging.
- Magnanni links go to Nordstrom Rack, never full price.
- `404.html` links to `/index.html`. That works on the custom domain.
- The `og:image` tag uses a relative path. A full URL helps link previews.
