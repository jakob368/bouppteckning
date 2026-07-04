# Enkel Bouppteckning

Statisk webbplats för enkelbouppteckning.se – en tjänst från Rydberg Juridik, en del av WHND Holding AB.

## Struktur

| Fil | Beskrivning |
|---|---|
| `index.html` | Huvudsida: hero (video), tjänsten i tre steg, pris, omdömen, bokningsformulär |
| `bouppteckning.html` | Guide: bouppteckning steg för steg |
| `vid-dodsfall.html` | Guide: att tänka på vid dödsfall |
| `faq.html` | Frågor och svar |
| `om-oss.html` | Om oss |
| `integritetspolicy.html` | Integritetspolicy (utkast) |
| `styles.css` | All styling |
| `hero.webp` | Hero-stillbild / video-poster |
| `hero-web.mp4` | Hero-video, webboptimerad (386 KB) |

Inga byggverktyg krävs – ladda upp filerna som de är till valfritt webbhotell eller GitHub Pages.

## Att göra före lansering

- [ ] **Formspree:** skapa konto på formspree.io med mottagare request@bouppteckningonline.se och ersätt `DITT-FORM-ID` i `index.html`
- [ ] **Omdömen:** byt placeholder-recensionerna i `index.html` mot de två riktiga Google-recensionerna
- [ ] **Om oss:** ersätt platshållartexten med riktig info om vilka som står bakom tjänsten
- [ ] **Integritetspolicy:** fyll i raderingstid och datum, låt jurist granska
- [ ] **Google Fonts:** överväg att self-hosta typsnitten (Fraunces + Inter) av GDPR-skäl
- [ ] **GitHub Pages med egen domän:** lägg till en `CNAME`-fil med innehållet `enkelbouppteckning.se` och peka domänens DNS mot GitHub Pages
