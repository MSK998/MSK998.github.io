<template>
  <div class="blog">
    <div class="content">
      <Icons />
      <a href="/blog" id="back-to-blog">&lt; Back to Blog</a>
      <h1>{{ $page.title }}</h1>
      <p>{{ $page.frontmatter.date }}</p>
      <p>{{ $page.frontmatter.description }}</p>
      <img
        :src="$page.frontmatter.headerImage"
        v-if="$page.frontmatter.headerImage"
      />
      <hr />
      <Content />
    </div>
  </div>
</template>

<script>
import Icons from "./Icons.vue";

export default {
  components: { Icons },
};
</script>

<style>
#back-to-blog {
  font-size: 0.75rem;
}

#app {
  grid-template-rows: 0.05fr 1fr 0.01fr !important;
}
</style>