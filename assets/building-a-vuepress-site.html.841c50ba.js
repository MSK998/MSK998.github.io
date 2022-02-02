import{a as e}from"./app.fcf64b64.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={},s=e(`<h1 id="introduction" tabindex="-1">Introduction</h1><p>VuePress is an extremely powerful static site generator with loads of features that allow developers to quickly develop static sites. Originally intended to be used by the Vue devs to build documentation sites, functionality was built into VuePress to allow users to create their own theming systems and plugins.</p><p>One of the gripes that I <em>did</em> have with VuePress and it&#39;s documentation, was that sometimes there were code snippets with zero context on where these snippets should go. Hopefully, I will help clear up some of the issues that I wrestled with so you don&#39;t have to.</p><p>Before I get started, there is one thing that I want to point out:</p><p>I built my site using VuePress 2.0.0 which at the time of writing this, is still in beta. The reason I wanted to build in the new version is that VuePress 2.0.0 takes advantage of Vite, which is a lightning fast build tool designed for Vue applications.</p><hr><h1 id="getting-started" tabindex="-1">Getting Started</h1><p>The VuePress <a href="https://v2.vuepress.vuejs.org/guide/getting-started.html" target="_blank" rel="noopener noreferrer">getting started</a> page is really helpful and informative. It&#39;s 100% worth noting that when using VuePress for its originally intended purpose it works flawlessly and you shouldn&#39;t need to follow any guides other than the official one on the docs.</p><hr><h1 id="creating-a-theme" tabindex="-1">Creating a Theme</h1><p>Once you have a basic project set up, we want to add the following folders to your <code>.vuepress</code> directory: <code>.vuepress/theme/components</code> and <code>.vuepress/theme/layouts</code>.</p><ol><li><code>components</code> folder will contain regular Vue components</li><li><code>layouts</code> folder will contain a minimum of two files in it <code>Layout.vue</code> and <code>404.vue</code></li></ol><p>Add an <code>index.js</code> file to the theme folder. This will contain the following code:</p><pre class="language-text"><code>const { path } = require(&#39;@vuepress/utils&#39;)

module.exports = {
  layouts: path.resolve(__dirname, &#39;./layouts/&#39;),
}
</code></pre><p>There are a few ways to use layouts but I use the default <code>Layout.vue</code> and use <code>v-if</code> to show different components to users based on the route they are accessing. You can also specify what layout to use for specific markdown pages, this is another way to handle differently laid out pages.</p><p>After the various files and directories have been created we need to set the theme in the <code>.vuepress/config.js</code>:</p><pre class="language-text"><code>module.exports = {
    ...
    theme: path.resolve(__dirname, &#39;./theme/&#39;),
    ...
}
</code></pre><hr><h1 id="creating-a-plugin" tabindex="-1">Creating a Plugin</h1><p>The requirement for making a custom plugin was came about from the removal from the <code>$site.pages</code> property. It was removed to improve performace and scalability of VuePress sites. So because of my use case I thought that adding a similar functionality back to vuepress would help me generate a list of blog posts.</p><p>To create a plugin we need to create a <code>.vuepress/plugins</code> directory. From here we can create a regular JS file, say for example we want to create a new property as part of <code>$site</code> that contains all of the blog posts.</p><p>Lets start by making <code>.vuepress/plugins/pages.js</code> to hold our plugin code. The VuePress plugin API has a few hooks to be aware of, one of these hooks is <code>onInitialized()</code> which is what we will use. The following code will add a property called <code>posts</code> to <code>app.siteData</code> which will be accessible via <code>this.$site.posts</code> from inside components.</p><pre class="language-text"><code>const pagesPlugin = {
    async onInitialized(app) {
            let posts = app.pages.map((page) =&gt; {
            const regexPattern = /\\/blog\\/.+/
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
        posts = posts.filter(page =&gt; page !== undefined)
        app.siteData.posts = posts
    }
}

module.exports = pagesPlugin
</code></pre><p>Finally, to enable the plugin we need to go to <code>.vuepress/config.js</code> and add the following line:</p><pre class="language-text"><code>module.exports = {
    ...
    plugins: [
        require(&#39;./plugins/pages.js&#39;),
    ]
    ...
}
</code></pre><hr><h1 id="conclusion" tabindex="-1">Conclusion</h1><p>Thats it! All code that has been written here can be found on my <a href="https://github.com/msk998/msk998.github.io" target="_blank" rel="noopener noreferrer">github repo</a></p><p>VuePress at first for me was a little bit daunting as there is a lot of abstraction to let the user focus on the content they are creating instead of having to worry about styling and behaviour. While VuePress is super focussed on being a documentation site generator it can work extremeley well for other use cases like blogs or portfolios.</p><p>I think that VuePress is a nice blend of simplicity and extensibility. By no means do I think i have done things in the most optimal way and there are probably way easier ways to achive what I have done.</p><p>The important thing that I had to keep in mind was, at it&#39;s core, its just a VueJS site with some extra bells and whistles to make it easier to make content driven websites, like mine!</p><p>If you have any comments or suggestions reach out!</p><h1 id="references" tabindex="-1">References</h1><p>The references that I remembered to write down...</p><ul><li>https://v2.vuepress.vuejs.org</li><li>https://forestry.io/blog/an-introduction-to-theming-in-vuepress/</li><li>https://willwillems.com/posts/write-a-custom-theme-with-vuepress.html</li></ul>`,35);function a(n,i){return s}var d=t(o,[["render",a]]);export{d as default};
