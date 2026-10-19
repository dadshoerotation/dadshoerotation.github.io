# Dad Shoe Rotation website

Plain HTML + CSS. No build step and no JavaScript. Ready for GitHub Pages: push this folder's contents to a repo and turn on Pages from the root. `.nojekyll` is included so GitHub serves the files exactly as they are.

## Preview locally

```
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## File map

```
index.html                     Homepage: hero, six slot tiles, latest blog posts
slots/everyday-dad-shoe.html   Slot 1: The Everyday Dad Shoe
slots/workout-shoe.html        Slot 2: The Workout Shoe
slots/clean-white-sneaker.html Slot 3: The Clean White Sneaker
slots/work-dress-shoe.html     Slot 4: The Work Dress Shoe
slots/boot.html                Slot 5: The Boot (optional)
slots/wildcard.html            Slot 6: The Wildcard (Retro Runner, for now)
blog/index.html                Blog post list
blog/my-dad-shoe-rotation.html First post (Oct 18, 2026)
blog/post-template.html        Copy this file to start a new post
404.html                       "Page not found" page
assets/css/style.css           All styles (brand colors are at the top)
assets/                        Logos, favicon, slot images
```

## Slot photos

Each slot uses exactly one image file. It shows on the homepage tile and at the top of that slot's page:

| Slot | Image file | Current image |
|---|---|---|
| 1. The Everyday Dad Shoe | `assets/slots/slot-1.jpg` | Nike Air Force 1 Low FlyEase, white (StockX) |
| 2. The Workout Shoe | `assets/slots/slot-2.jpg` | adidas Adizero Dropset Pro (adidas) |
| 3. The Clean White Sneaker | `assets/slots/slot-3.jpg` | Magnanni Amadeo, white (Magnanni) |
| 4. The Work Dress Shoe | `assets/slots/slot-4.jpg` | Allen Edmonds Park Avenue (Zappos) |
| 5. The Boot | `assets/slots/slot-5.jpg` | Clarks Desert Boot + Tecovas Cartwright, side by side (Clarks, Tecovas) |
| 6. The Wildcard | `assets/slots/slot-6.jpg` | On Cloudtilt Arc, Alloy/Ivory (On) |

To swap in your own photo, replace the file and keep the same name. Use a JPG, 1200 x 900 (4:3), shoe centered on a white background, under about 200 KB. If you change the source of a photo, update the "Image:" caption on the slot page and the credit line in the footer of `index.html`.

## Changing a slot's pick

Open the slot page (for example `slots/wildcard.html`). Edit the text inside `<div class="pick">`, and the lists under "Other options for this slot" and "More ideas". Then update the "Current pick" line on that slot's tile in `index.html`.

## Adding a blog post

1. Copy `blog/post-template.html` to a new file, such as `blog/on-cloudtilt-arc-review.html`. Use lowercase with dashes.
2. In the new file:
   - Replace the `<title>`, the description, the `<h1>`, the date, and the body text.
   - Delete the `<meta name="robots" content="noindex">` line and the "HOW TO USE" comment.
3. Open `blog/index.html` and copy one `<li class="post-item">…</li>` block. Paste it at the top of the list, so the newest post comes first. Change the date, title, link, and one-line summary.
4. Optionally, add the same block to "Latest from the blog" in `index.html`. Change the link to `blog/your-file.html` there, since the homepage sits one folder up.
5. For photos in posts, put them in `assets/blog/` (create the folder) and use `<img src="../assets/blog/photo.jpg" alt="…">`.

## Notes

- `404.html` links to `/index.html`. That works on a custom domain or a `username.github.io` site. For a project site (`username.github.io/repo-name/`), change that link to `/repo-name/index.html`.
- The `og:image` tag uses a relative path. Once the site has a real address, change it to the full URL (for example `https://yourdomain.com/assets/dadshoerotation-logo-profile.png`) so link previews show the logo.

## Inflation Sucks (budget rotation)

Inflation Sucks is a tab in the homepage rotation section. `budget.html` just redirects to `/#inflation`. The rule: every Inflation Sucks pick is $80 or under, and only picks Dad Shoe Matt has set appear. Tile images are `assets/budget/budget-1.jpg` through `budget-6.jpg`. Slot 2 is the adidas Adizero Pacer and slot 3 is the adidas Continental 80 (images: adidas). Slots 1 and 4 to 6 are "Coming soon" placeholders. When a pick is set, swap in a 1200 x 900 JPG, update that tile in `index.html`, and update the "Inflation Sucks pick" box on the matching slot page.

## Homepage tabs

The rotation section on the homepage has three tabs: Matt's Picks (the default), The Classics, and Inflation Sucks. Each tab can be linked with `#picks`, `#classics` or `#inflation`. The small script is `assets/js/tabs.js`. Without JavaScript, the page just shows Matt's Picks. The Classics tiles use `assets/classics/classic-1.jpg` through `classic-6.jpg`. Slot 1 is the Nike Air Monarch IV (Dad Shoe Matt's outlet photo, metadata stripped), slot 3 is the Magnanni Elonso with the black Magnanni Laska as another option (`classic-3-black.jpg`), and slot 6 is the Nike Zoom Vomero 5. The other slots are placeholders until those classic picks are chosen.

## Insoles

`insoles.html` is the insoles page, linked in the main nav, from a homepage callout below the rotation tabs, and from the work dress shoe page. Its image is `assets/insoles/move-game-day.jpg` (image: Move). Prices on that page are as of Oct 18, 2026.
