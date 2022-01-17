<template>
  <a :href="post.path">
    <div class="card">
      <div class="img">
        <img :src="post.image" alt="" />
      </div>
      <div class="post-preview">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post-preview {
  overflow: hidden;
  margin: 0.5rem;
  padding: 0.5rem;
}

.card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0.5rem;
  height: 10rem !important;
  border: #fff 0.25px solid;
  border-radius: 0.375rem;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: #fff;
}

.img {
  overflow: hidden;
  align-content: center;
}

img {
  height: 100%;
  object-fit: cover;
}
</style>