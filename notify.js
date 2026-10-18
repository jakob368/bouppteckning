// SMS-avisering vid ny förfrågan – körs som serverless-funktion på Vercel.
// Kräver tre miljövariabler i Vercel-projektet:
//   ELKS_USER  – API-användarnamn från 46elks (börjar med "u")
//   ELKS_PASS  – API-lösenord från 46elks
//   SMS_TO     – mottagarnummer i internationellt format, t.ex. +46701234567

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  // Släpp bara igenom anrop från vår egen sajt
  const origin = req.headers.origin || '';
  if (!origin.includes('enkelbouppteckning.se') && !origin.includes('vercel.app')) {
    return res.status(403).json({ error: 'forbidden' });
  }

  const { ELKS_USER, ELKS_PASS, SMS_TO } = process.env;
  if (!ELKS_USER || !ELKS_PASS || !SMS_TO) {
    return res.status(500).json({ error: 'not configured' });
  }

  // Kort meddelande: håller oss inom 160 GSM-tecken = 1 sms-del.
  // (Obs: inga tankstreck eller emojis här - de tvingar sms:et till dyrare teckenkodning.)
  const namn = String((req.body && req.body.namn) || '').slice(0, 40);
  const telefon = String((req.body && req.body.telefon) || '').slice(0, 20);
  const message = 'Ny förfrågan: ' + namn + ', ' + telefon + '. Detaljer i mejlen. Ring inom 24 h.';

  const auth = Buffer.from(ELKS_USER + ':' + ELKS_PASS).toString('base64');
  const r = await fetch('https://api.46elks.com/a1/sms', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ from: 'EnkelBoupp', to: SMS_TO, message })
  });

  if (!r.ok) {
    return res.status(502).json({ error: 'sms failed' });
  }
  return res.status(200).json({ ok: true });
}
