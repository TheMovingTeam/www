export default {
    layout: "article.njk",
    tags: "articles",
    eleventyComputed: {
        lang: data => data.page.filePathStem.split('/')[2],
        permalink: "/{{ lang }}/articles/{{ page.fileSlug | slugify }}/"
    }
}
