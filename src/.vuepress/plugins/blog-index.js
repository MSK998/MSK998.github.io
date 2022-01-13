const {
  createPage
} = require('@vuepress/core');
// all pages have been loaded after initialization
const blogIndexPlugin = {
  async onInitialized(app) {
    // if the blog index does not exist
    if (app.pages.every((page) => page.path !== '/blog/')) {
      // create a blog index
      const blogIndex = await createPage(app, {
        path: '/blog/',
        // set frontmatter
        frontmatter: {
          layout: 'Layout',
        },
        // set markdown content
        content: '',
      })
      // add it to `app.pages`
      app.pages.push(blogIndex)
      console.log(app.pages);
    }
  }
}

module.exports = blogIndexPlugin