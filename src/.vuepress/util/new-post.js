const fs = require('fs');

function yearMonthDay() {
    const today = new Date(Date.now())

    return today.toISOString().substring(0, 10).replaceAll('-', '/')
}

function newPost() {
    const year = new Date().getFullYear()
    const content = `---
title: Title
date: ${yearMonthDay()}
description: Description
lang: en
headerImage: /images/me.jpg
---
    `

    fs.existsSync(__dirname + `/../../blog/${year}`) ?
        null :
        fs.mkdirSync(__dirname + `/../../blog/${year}`, {
            recursive: true
        })

    fs.writeFileSync(__dirname + `/../../blog/${year}/newpost.md`, content)

}

module.exports = newPost()