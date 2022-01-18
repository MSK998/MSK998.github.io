---
title: Building a Custom VuePess Site
date: 2022/01/21
description: An overview of how I built my site, and how to avoid the pitfalls.
lang: en
headerImage: /images/vuepress-hero.jpeg
---
# Introduction

VuePress is an extremely powerful static site generator with loads of features that allow developers to quickly develop static sites. Originally intended to be used by the Vue devs to build documentation sites, functionality was built into VuePress to allow users to create their own theming systems and plugins.

One of the gripes that I *did* have with VuePress and it's documentation, was that sometimes there were code snippets with zero context on where these snippets should go. Hopefully, I will help clear up some of the issues that I wrestled with so you don't have to. 

Before I get started, there is one thing that I want to point out: 

I built my site using VuePress 2.0.0 which at the time of writing this, is still in beta. The reason I wanted to build in the new version is that VuePress 2.0.0 takes advantage of Vite, which is a lightning fast build tool designed for Vue applications. 

---

# Getting Started

The VuePress [getting started](https://v2.vuepress.vuejs.org/guide/getting-started.html) page is really helpful and informative. It's 100% worth noting that when using VuePress for its originally intended purpose it works flawlessly and you shouldn't need to follow any guides other than the official one on the docs.

---

# Creating a Theme

Once you have a basic project set up, we want to add the following folders to your `.vuepress` directory: `.vuepress/theme/components` and `.vuepress/theme/layouts`. 

1. `components` folder will contain regular Vue components
2. `layouts` folder will contain a minimum of two files in it `Layout.vue` and `404.vue`

Add an `index.js` file to the theme folder. This will contain the following code:

```
const { path } = require('@vuepress/utils')

module.exports = {
  layouts: path.resolve(__dirname, './layouts/'),
}
```

There are a few ways to use layouts but I use the default `Layout.vue` and use `v-if` to show different components to users based on the route they are accessing. You can also specify what layout to use for specific markdown pages, this is another way to handle differently laid out pages.

After the various files and directories have been created we need to set the theme in the `.vuepress/config.js`: 

```
module.exports = {
    ...
    theme: path.resolve(__dirname, './theme/'),
    ...
}
```

---

# Creating a Plugin

The requirement for making a custom plugin was came about from the removal from the `$site.pages` property. It was removed to improve performace and scalability of VuePress sites. So because of my use case I thought that adding a similar functionality back to vuepress would help me generate a list of blog posts.

To create a plugin we need to create a `.vuepress/plugins` directory. From here we can create a regular JS file, say for example we want to create a new property as part of `$site` that contains all of the blog posts. 

Lets start by making `.vuepress/plugins/pages.js` to hold our plugin code. The VuePress plugin API has a few hooks to be aware of, one of these hooks is `onInitialized()` which is what we will use. The following code will add a property called `posts` to `app.siteData` which will be accessible via `this.$site.posts` from inside components.

```
const pagesPlugin = {
    async onInitialized(app) {
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
```

Finally, to enable the plugin we need to go to `.vuepress/config.js` and add the following line: 

```
module.exports = {
    ...
    plugins: [
        require('./plugins/pages.js'),
    ]
    ...
}
```

---

# Conclusion

Thats it! All code that has been written here can be found on my [github repo](https://github.com/msk998/msk998.github.io)

VuePress at first for me was a little bit daunting as there is a lot of abstraction to let the user focus on the content they are creating instead of having to worry about styling and behaviour. While VuePress is super focussed on being a documentation site generator it can work extremeley well for other use cases like blogs or portfolios. 

I think that VuePress is a nice blend of simplicity and extensibility. By no means do I think i have done things in the most optimal way and there are probably way easier ways to achive what I have done. 

The important thing that I had to keep in mind was, at it's core, its just a VueJS site with some extra bells and whistles to make it easier to make content driven websites, like mine!

If you have any comments or suggestions reach out! 

# References

The references that I remembered to write down...

- https://v2.vuepress.vuejs.org
- https://forestry.io/blog/an-introduction-to-theming-in-vuepress/
- https://willwillems.com/posts/write-a-custom-theme-with-vuepress.html
