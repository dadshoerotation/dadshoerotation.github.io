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

## Swapping in real shoe photos

Each slot uses exactly one image file. To use your own photo, replace the file and keep the same name:

| Slot | Image file |
|---|---|
| 1. The Everyday Dad Shoe | `assets/slots/slot-1.jpg` |
| 2. The Workout Shoe | `assets/slots/slot-2.jpg` |
| 3. The Clean White Sneaker | `assets/slots/slot-3.jpg` |
| 4. The Work Dress Shoe | `assets/slots/slot-4.jpg` |
| 5. The Boot | `assets/slots/slot-5.jpg` |
| 6. The Wildcard | `assets/slots/slot-6.jpg` |

Each image appears on the homepage tile and at the top of that slot's page.

- Use a JPG saved under the same name. A landscape **4:3** shape works best (for example 1200 × 900). Other shapes get cropped to fit from the center.
- Keep each file under about 300 KB so the page loads fast on phones.
- The current files are brand-colored placeholders. Their SVG sources are in `assets/slots/source/` in case you want to make more.
- If you use PNG or WebP instead, find `slot-N.jpg` in `index.html` and in that slot's page and change the extension in both places.

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
- No product photos from retailers are used anywhere on the site.
