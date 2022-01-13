const {
    path
} = require('@vuepress/utils')
// var path = require('path');

module.exports = {
    // site config
    lang: 'en',
    title: 'Mark Scott-Kiddie',
    description: 'Mark Scott-Kiddie',

    // theme and its config
    theme: path.resolve(__dirname, './theme/'),
    markdown: {
        anchor: {
            permalink: false
        },
        code: {
            preWrapper: false
        }
    },
    plugins: [
        //require('./plugins/blog-index.js'),
        require('./plugins/pages.js'),
    ]
}