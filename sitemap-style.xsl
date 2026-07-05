<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">

<html lang="en">

<head>

<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Nexora Studio — Sitemap</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Inter', Arial, sans-serif;
    background:#F3F4F6;
    color:#111111;
    min-height:100vh;
}

/* HERO */

.hero{
    background:#0F172A;
    padding:60px 24px 40px;
    text-align:center;
    border-bottom:1px solid rgba(5,150,105,0.15);
}

.hero-inner{
    max-width:800px;
    margin:0 auto;
}

.logo-wrap{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:16px;
    margin-bottom:24px;
    text-decoration:none;
}

.logo-img{
    width:64px;
    height:64px;
    border-radius:12px;
    object-fit:cover;
    border:2px solid #059669;
    box-shadow:0 0 20px rgba(5,150,105,0.2);
}

.logo-text{
    font-family:'Plus Jakarta Sans', sans-serif;
    font-size:1.75rem;
    font-weight:800;
    color:#FFFFFF;
    letter-spacing:-0.02em;
}

.logo-text span{
    color:#059669;
    font-weight:400;
}

.tagline{
    font-size:0.85rem;
    color:#9CA3AF;
    letter-spacing:0.2em;
    text-transform:uppercase;
    margin-bottom:8px;
}

.divider{
    width:60px;
    height:2px;
    background:#059669;
    margin:16px auto;
}

.hero-meta{
    font-size:0.75rem;
    color:#6B7280;
    font-family:monospace;
    letter-spacing:0.05em;
}

/* MAIN */

.main{
    max-width:900px;
    margin:0 auto;
    padding:48px 24px 60px;
}

.section-title{
    font-family:'Plus Jakarta Sans', sans-serif;
    font-size:1.5rem;
    font-weight:700;
    color:#0F172A;
    margin-bottom:8px;
}

.section-sub{
    font-size:0.85rem;
    color:#6B7280;
    margin-bottom:32px;
}

/* TABLE */

.sitemap-table{
    width:100%;
    border-collapse:separate;
    border-spacing:0;
    background:#FFFFFF;
    border-radius:12px;
    overflow:hidden;
    border:1px solid #E5E7EB;
    box-shadow:0 1px 2px rgba(0,0,0,0.05);
}

.sitemap-table thead{
    background:#F9FAFB;
}

.sitemap-table th{
    padding:20px 24px;
    text-align:left;
    font-weight:600;
    font-size:0.7rem;
    letter-spacing:0.15em;
    text-transform:uppercase;
    color:#059669;
    border-bottom:1px solid #E5E7EB;
}

.sitemap-table td{
    padding:22px 24px;
    border-bottom:1px solid #F3F4F6;
    font-size:0.9rem;
    vertical-align:middle;
}

.sitemap-table tbody tr:hover{
    background:#F9FAFB;
}

.sitemap-table tbody tr:last-child td{
    border-bottom:none;
}

/* URL */

.url-cell a{
    color:#059669;
    text-decoration:none;
    font-family:monospace;
    font-size:0.82rem;
    transition:0.2s ease;
    word-break:break-all;
    font-weight:500;
}

.url-cell a:hover{
    color:#047857;
    text-decoration:underline;
}

.url-label{
    display:inline-block;
    margin-top:6px;
    font-size:0.7rem;
    color:#9CA3AF;
    letter-spacing:0.08em;
    text-transform:uppercase;
}

/* PRIORITY */

.priority-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:8px 16px;
    border-radius:24px;
    font-size:0.8rem;
    font-weight:600;
    font-family:monospace;
}

.priority-high{
    background:#ECFDF5;
    color:#059669;
    border:1px solid #A7F3D0;
}

.priority-mid{
    background:#F3F4F6;
    color:#6B7280;
    border:1px solid #E5E7EB;
}

.priority-dot{
    width:7px;
    height:7px;
    border-radius:50%;
    background:currentColor;
}

/* FREQ */

.freq-badge{
    display:inline-block;
    padding:6px 14px;
    border-radius:6px;
    font-size:0.72rem;
    font-weight:500;
    letter-spacing:0.08em;
    text-transform:uppercase;
    background:#FAFBFC;
    color:#6B7280;
    border:1px solid #E5E7EB;
}

/* DATE */

.date-cell{
    font-family:monospace;
    font-size:0.78rem;
    color:#9CA3AF;
}

/* FOOTER */

.footer{
    text-align:center;
    padding:32px 24px;
    border-top:1px solid #E5E7EB;
    background:#FFFFFF;
}

.footer-brand{
    font-family:'Plus Jakarta Sans', sans-serif;
    font-size:1.1rem;
    color:#6B7280;
    margin-bottom:8px;
}

.footer-brand span{
    color:#059669;
    font-weight:700;
}

.footer-copy{
    font-size:0.7rem;
    color:#9CA3AF;
    letter-spacing:0.1em;
    text-transform:uppercase;
}

/* MOBILE */

@media (max-width:640px){

    .hero{
        padding:40px 20px 30px;
    }

    .logo-img{
        width:48px;
        height:48px;
    }

    .logo-text{
        font-size:1.4rem;
    }

    .main{
        padding:32px 16px 40px;
    }

    .sitemap-table th,
    .sitemap-table td{
        padding:14px 16px;
    }

    .sitemap-table th:nth-child(3),
    .sitemap-table td:nth-child(3){
        display:none;
    }

    .url-cell a{
        font-size:0.75rem;
    }
}

</style>

</head>

<body>

<div class="hero">

<div class="hero-inner">

<a href="https://nexoradesign.vercel.app/" class="logo-wrap">

<img src="/assets/new-logo.svg"
alt="Nexora Studio"
class="logo-img"/>

<div class="logo-text">
NEXORA <span>Studio</span>
</div>

</a>

<div class="tagline">
XML Sitemap Index
</div>

<div class="divider"></div>

<div class="hero-meta">

<xsl:value-of select="count(s:urlset/s:url)"/>
URLs indexed •

Schema 0.9 •

<xsl:value-of select="s:urlset/s:url[1]/s:lastmod"/>

</div>

</div>

</div>

<div class="main">

<div class="section-title">
Indexed URLs
</div>

<div class="section-sub">
All discoverable endpoints for search engine crawlers
</div>

<table class="sitemap-table">

<thead>
<tr>
<th>Location</th>
<th>Priority</th>
<th>Frequency</th>
<th>Last Modified</th>
</tr>
</thead>

<tbody>

<xsl:for-each select="s:urlset/s:url">

<tr>

<td class="url-cell">

<a href="{s:loc}" target="_blank">
<xsl:value-of select="s:loc"/>
</a>

<xsl:choose>

<xsl:when test="s:priority = '1.0'">
<div class="url-label">Core Property</div>
</xsl:when>

<xsl:otherwise>
<div class="url-label">Portfolio Demo</div>
</xsl:otherwise>

</xsl:choose>

</td>

<td>

<xsl:choose>

<xsl:when test="s:priority = '1.0'">

<span class="priority-badge priority-high">

<span class="priority-dot"></span>

<xsl:value-of select="s:priority"/>

</span>

</xsl:when>

<xsl:otherwise>

<span class="priority-badge priority-mid">

<span class="priority-dot"></span>

<xsl:value-of select="s:priority"/>

</span>

</xsl:otherwise>

</xsl:choose>

</td>

<td>

<span class="freq-badge">
<xsl:value-of select="s:changefreq"/>
</span>

</td>

<td class="date-cell">

<xsl:value-of select="s:lastmod"/>

</td>

</tr>

</xsl:for-each>

</tbody>

</table>

</div>

<div class="footer">

<div class="footer-brand">
NEXORA <span>Studio</span>
</div>

<div class="footer-copy">
Sitemap conforms to sitemaps.org schema 0.9
</div>

</div>

</body>

</html>

</xsl:template>

</xsl:stylesheet>
