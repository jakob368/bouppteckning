# Enkel Bouppteckning

Statisk webbplats för enkelbouppteckning.se – en tjänst från Rydberg Juridik, en del av WHND Holding AB. Driftas på Vercel; domän och e-post hos Loopia.

## Struktur

| Fil | Beskrivning |
|---|---|
| `index.html` | Huvudsida: hero (video), tjänsten i tre steg, pris, tvåstegsformulär (testimonials pausade i kommentar) |
| `bouppteckning.html` | Tjänstesida: bouppteckningen steg för steg |
| `vid-dodsfall.html` | Guide: att tänka på vid dödsfall |
| `faq.html` | Frågor och svar (med FAQPage-schema) |
| `om-oss.html` | Om oss |
| `tack.html` | Tacksida efter formulärinskick (noindex) |
| `integritetspolicy.html` | Integritetspolicy |
| `api/notify.js` | Vercel-funktion: SMS-avisering via 46elks vid nytt inskick |
| `styles.css` | All styling |
| `robots.txt` / `sitemap.xml` | För sökmotorer |
| `favicon.svg` / `apple-touch-icon.png` / `og-image.jpg` | Ikoner och delningsbild |
| `hero.webp` / `hero-web.mp4` | Hero-bild och video |

## Så hänger tjänsterna ihop

- **Formulär:** skickas via JavaScript till Formspree (mejl till christina@enkelbouppteckning.se), därefter redirect till tack.html.
- **SMS-avisering:** /api/notify skickar SMS via 46elks. Kräver miljövariablerna `ELKS_USER`, `ELKS_PASS` och `SMS_TO` i Vercel (ändring av variabler kräver redeploy).
- **Deploy:** varje commit till main bygger om sajten automatiskt på Vercel.

## Kvar att göra

- [ ] Testimonials: återaktivera sektionen i index.html med bekräftade kundcitat (instruktion finns i HTML-kommentaren)
- [ ] Om oss: ersätt platshållartexten med riktig info
- [ ] Integritetspolicy: fyll i raderingstid och datum, låt jurist granska
- [ ] 46elks: slutför kontoverifiering och fyll på saldo
- [ ] Google Fonts: överväg self-hosting av GDPR-skäl
