<template>
  <div>
    <div v-for="post in blogPosts" :key="post.name">
      <view-single-post :postname="post.name" :stub="true"></view-single-post>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ViewSinglePost from '@/pages/ViewSinglePost'

  export default {
    name: "Home",
    computed: {
      ...mapState({
        blogPosts: state => state.posts.blogPosts
      })
    },
    components: {
      ViewSinglePost
    }
  }
</script>
