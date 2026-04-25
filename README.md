# angie-site

Personal portfolio + freelance booking site for **Angie Yumul** (Angeli) — Filipino freelance virtual assistant, travel storyteller, and creator (@angeli.everywhere).

## Live site

**https://liquid1188.github.io/angeli-site/**

## Design

- **Palette:** deep navy + her favourite blue + warm bone + gold accent
- **Type:** Fraunces (serif display) + Manrope (sans body)
- **References:** structurally inspired by andrewlikoudis.com and likoudislegacy.com — numbered service cards, endorsement cards with portraits, repeating CTAs, dark accent banners
- **Personality:** quirky-mature, diary-meets-resume. Warm without saccharine, professional without corporate.

## Sections

1. **Top strip** — booking availability + start-a-project link
2. **Hero** — name, role stack, dual CTA, real photo with rotated tag + "Open for new clients" stamp
3. **Trusted-by** — tools strip
4. **About** — long diary-style essay, second photo, fact list
5. **Services** — four numbered cards with credentials blocks
6. **Testimonials** — six mock client reviews with stars and gradient avatars
7. **Travel CTA banner** — Macau night photo, dark, dual CTA
8. **Experience** — date-anchored timeline
9. **Work With Me** — inquiry form with project type, timeline, budget
10. **Interests ribbon** — auto-scrolling marquee
11. **Footer** — four-column with platforms-to-hire-her-on

## CTA strategy

"Work With Me" is reachable in four places at all times: top strip, sticky nav pill, floating bottom-right pill, and in-content buttons.

## Form

Shows a friendly alert on submit. To go live: sign up at Formspree, replace `your-form-id` in the form action, and remove the `e.preventDefault()` in the script.

## Local preview

```bash
python3 -m http.server 8000
```

## Deploying

GitHub Pages is enabled on `main`. Any push redeploys.
