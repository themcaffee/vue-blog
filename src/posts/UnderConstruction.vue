<template>
  <post :component-name="name" :title="title" :post-date="postDate" :stub="stub">
    <p>Please check back later while I add create some content :)</p>
  </post>
</template>

<script>
  import PostMixin from '@/mixins/PostMixin'
  import Post from '@/components/Post'

  export default {
    name: "UnderConstruction",
    components: {
      Post
    },
    mixins: [PostMixin]
  }
</script>
