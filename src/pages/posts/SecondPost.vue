<template>
  <post :component-name="name" :title="title" :post-date="postDate" :stub="stub">
    <p>Hello world!</p>
  </post>
</template>

<script>
  import PostMixin from '@/mixins/PostMixin'
  import Post from '@/components/Post'

  export default {
    name: 'SecondPost',
    components: {
      Post
    },
    mixins: [PostMixin]
  }
</script>
