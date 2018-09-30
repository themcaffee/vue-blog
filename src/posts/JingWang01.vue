<template>
  <post :component-name="name" :title="title" :post-date="postDate" :stub="stub">
    <p></p>
  </post>
</template>

<script>
  import PostMixin from '@/mixins/PostMixin'
  import Post from '@/components/Post'

  export default {
    name: "JingWang01",
    components: {
      Post
    },
    mixins: [PostMixin]
  }
</script>
