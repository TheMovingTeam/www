---
layout: article.njk
title: Artículos
description: Lea todos los artículos de la aplicación de tránsito Move aquí.
keywords: move app transporte, move blog, move artículos

tags: destination

eleventyImport:
  collections: ["articles"]
---

Lea todos los artículos sobre la aplicación de tránsito MoveRead up on all articles about the Move transit app

<!-- Terminate content div to allow articles to grow to the full width -->
</div>
<div class="hc ac jse fw reflow" id="articleList">
{% for article in collections.articles reversed %}
{%- if article.data.lang == page.lang -%}
<div class="article card vc">
<a href="{{ article.fileSlug | slugify }}">
<img src="/media/thumbs/{{ article.data.thumbnail }}.png" loading="lazy" alt="">
<div class="content">

### {{ article.data.title }}

{{ article.data.description }}
{{ article.page.excerpt }}

</div>
</a>
</div>
{%- endif -%}
{% endfor %}
</div>
