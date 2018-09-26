<template>
  <div>
    <div v-for="post in homeBlogPosts" :key="post.name">
      <view-single-post :postname="post.name" :stub="true"></view-single-post>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ViewSinglePost from '@/pages/ViewSinglePost'

  export default {
    name: "Home",
    computed: {
      ...mapGetters([
        'homeBlogPosts'
      ])
    },
    components: {
      ViewSinglePost
    }
  }
</script>
