<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap · Laia Xarau</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, sans-serif;
            background: #F4F4F1;
            color: #0F1923;
            padding: 48px 24px;
          }
          .wrap { max-width: 680px; margin: 0 auto; }
          header { margin-bottom: 40px; }
          .logo {
            display: inline-flex;
            align-items: stretch;
            text-decoration: none;
            border: 1.5px solid #0F1923;
            padding: 5px;
            margin-bottom: 24px;
          }
          .logo__first {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            color: #F4F4F1;
            background: #0F1923;
            padding: 6px 8px;
          }
          .logo__last {
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0.08em;
            color: #0F1923;
            padding: 6px 8px;
          }
          h1 {
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #6B7280;
            margin-bottom: 4px;
          }
          .count {
            font-size: 13px;
            color: #6B7280;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 32px;
          }
          thead th {
            text-align: left;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7280;
            padding: 0 0 12px;
            border-bottom: 1px solid #D1D5DB;
          }
          td {
            padding: 16px 0;
            border-bottom: 1px solid #E5E7EB;
            vertical-align: middle;
          }
          td a {
            color: #0F1923;
            text-decoration: none;
            font-size: 15px;
          }
          td a:hover { text-decoration: underline; }
          .lang-tag {
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.06em;
            font-family: monospace;
            background: #E5E7EB;
            color: #374151;
            padding: 2px 7px;
            border-radius: 3px;
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <a href="/" class="logo">
              <span class="logo__first">LAIA</span>
              <span class="logo__last">XARAU</span>
            </a>
            <h1>Sitemap XML</h1>
            <p class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexades</p>
          </header>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Idioma</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <tr>
                  <td>
                    <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="contains(sm:loc, '/es/')">
                        <span class="lang-tag">ES</span>
                      </xsl:when>
                      <xsl:when test="contains(sm:loc, '/en/')">
                        <span class="lang-tag">EN</span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="lang-tag">CA</span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
