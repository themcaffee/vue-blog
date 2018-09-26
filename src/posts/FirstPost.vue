<template>
  <post :component-name="name" :title="title" :post-date="postDate" :stub="stub">
    <p>Wow!</p>
    <p v-if="!stub">
      Don't show this if a stub
    </p>
  </post>
</template>

<script>
  import PostMixin from '@/mixins/PostMixin'
  import Post from '@/components/Post'

  export default {
    name: 'FirstPost',
    components: {
      Post
    },
    mixins: [PostMixin]
  }
</script>
