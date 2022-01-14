<template>
  <div class="main">
    <home-page v-if="isHome" />
    <post-list v-else-if="isBlog" />
    <post v-else />
  </div>
</template>

<script>
import HomePage from "../components/Home.vue";
import PostList from "../components/PostList.vue";
import Post from "../components/Post.vue";
import Icons from "../components/Icons.vue";

export default {
  components: { HomePage, PostList, Post, Icons },
  computed: {
    isHome() {
      return this.$page.path === "/";
    },
    isBlog() {
      return this.$page.path === "/blog/";
    },
  },
};
</script>

<style>
@import url("../../public/css/index.css");
@import url("../../public/css/icons.css");
</style>