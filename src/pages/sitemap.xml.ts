export async function GET() {
  const site = 'https://laiaxarau.com';

  const urls = [
    { loc: `${site}/`,    lang: 'ca' },
    { loc: `${site}/es/`, lang: 'es' },
    { loc: `${site}/en/`, lang: 'en' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ loc, lang }) => {
  const alternates = urls
    .map(u => `    <xhtml:link rel="alternate" hreflang="${u.lang}" href="${u.loc}"/>`)
    .join('\n');
  const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${site}/"/>`;
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${lang === 'ca' ? '1.0' : '0.8'}</priority>
${alternates}
${xdefault}
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
