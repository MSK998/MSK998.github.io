<template>
  <div class="blog">
    <div class="content">
      <Icons />
      <h1>Blog Posts</h1>
      <p>A collection of thoughts and other random things</p>
      <ul class="post-list" v-if="sortedList.length">
        <li v-for="post in sortedList" :key="post.index">
          <post-list-item :post="post" />
        </li>
      </ul>
      <p v-if="!sortedList.length">Nothings here 😭</p>
    </div>
  </div>
</template>

<script>
import PostListItem from "./PostListItem.vue";
import Icons from "./Icons.vue";

export default {
  components: { PostListItem, Icons },
  computed: {
    sortedList() {
      return this.$site.posts.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      });
    },
  },
};
</script>

