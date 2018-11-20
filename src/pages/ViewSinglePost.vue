<template>
  <div>
    <component :is="parsedPostname" :component-name="parsedPostname" :title="parsedPost.title" :post-date="parsedPost.postdate" :stub="stub"></component>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  // Import posts dynamically and only load them if actually used
  const FirstPost = () => import('@/posts/FirstPost')

  export default {
    name: "ViewSinglePost",
    props: {
      postname: {
        type: String,
        required: false,
        default: '-1'
      },
      stub: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      // Either use the router param or prop to give this component the postname
      parsedPostname () {
        if (this.postname === '-1') {
          return this.$route.params.postname
        } else {
          return this.postname
        }
      },
      // Find the post in the vuex state this corresponds to
      parsedPost () {
        for (var postIndex in this.blogPosts) {
          let post = this.blogPosts[postIndex]
          if (post.name === this.parsedPostname) {
            return post
          }
        }
        return null
      },
      ...mapState({
        blogPosts: state => state.posts.blogPosts
      })
    },
    components: {
      FirstPost
    }
  }
</script>
