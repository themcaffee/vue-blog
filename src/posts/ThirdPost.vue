<template>
  <post :component-name="name" :title="title" :post-date="postDate" :stub="stub">
    <p>Third post woo</p>
  </post>
</template>

<script>
  import PostMixin from '@/mixins/PostMixin'
  import Post from '@/components/Post'

  export default {
    name: 'ThirdPost',
    components: {
      Post
    },
    mixins: [PostMixin]
  }
</script>
