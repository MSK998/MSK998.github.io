<template>
  <div class="home">
      <div class="image">
        <img
          v-if="$frontmatter.headerImage"
          :src="$withBase($frontmatter.headerImage)"
          alt=""
        />
      </div>
    <div class="content">
      <h1 id="title-text">{{ $frontmatter.title }}</h1>
      <Content />
      <Icons />
    </div>
  </div>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
  components: { Icons },
};
</script>