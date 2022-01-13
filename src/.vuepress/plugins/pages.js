const {
    createPage
  } = require('@vuepress/core');

const pagesPlugin = {
    async onInitialized(app) {

        if (app.pages.every((page) => page.path !== '/blog/')) {
            // create a blog index
            const blogIndex = await createPage(app, {
              path: '/blog/',
              // set frontmatter
              frontmatter: {
                layout: 'Layout',
                title: 'Blog'
              },
              // set markdown content
              content: '',
            })
            // add it to `app.pages`
            app.pages.push(blogIndex)
          }

        let posts = app.pages.map((page) => {
            const regexPattern = /\/blog\/.+/
            if (regexPattern.test(page.path)) {
                return {
                    path: page.path,
                    title: page.title,
                    description: page.frontmatter.description,
                    image: page.frontmatter.headerImage ? page.frontmatter.headerImage : undefined,
                    date: new Date(page.frontmatter.date)
                }
            }
        });
        posts = posts.filter(page => page !== undefined)
        app.siteData.posts = posts
    }
}

module.exports = pagesPlugin