# Angie Yumul — Personal Site

Multi-page portfolio + freelance booking site for Angeli "Angie" Yumul, Filipino freelance virtual assistant and travel storyteller. Brand: @angeli.everywhere.

## Pages
- `index.html` — Home: hero, trusted-by, about preview, services preview, top 3 reviews, travel teaser
- `about.html` — Long diary about, photo, fact list
- `services.html` — All 4 services with pricing, process, FAQ
- `travel.html` — Travel storytelling, brand-deal pitch
- `work.html` — Inquiry form + all 6 reviews

## Stack
Plain HTML/CSS/JS. Hosted on GitHub Pages from `main`. No build step.

## Going live
1. **Connect Formspree:** sign up at formspree.io (free), create a form, copy the form ID into `work.html` action attribute (replace `your-form-id`).
2. **Confirm social links** in the footer point to live profiles.
3. **Optional:** add a custom domain in GitHub Pages settings → swap `angeliyumul.com` (or wherever) for the .github.io URL.

## Local preview
```
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Edits
- Copy lives inline in each `.html`. Voice and tone are "diary-meets-resume."
- Shared styles: `styles.css`. Shared JS: `site.js`.
- Photos: `/images/angie-portrait.jpeg`, `angie-glasses.jpeg`, `angie-macau.jpeg`.
