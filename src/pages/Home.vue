<template>
  <div>
    <div v-for="post in homeBlogPosts" :key="post.name">
      <view-single-post :postname="post.name" :stub="true"></view-single-post>
    </div>
    <b-pagination class="lower-pagination" align="center" size="md" :total-rows="blogPostCount" v-model="currentPage" :per-page="postsOnHome" @input="pageChanged">
    </b-pagination>
  </div>
</template>

<style>
.lower-pagination {
  position: absolute;
  bottom: 50px;
  left: 50%;
}
</style>

<script>
  import { mapGetters, mapState } from 'vuex'
  import ViewSinglePost from '@/pages/ViewSinglePost'

  export default {
    name: "Home",
    computed: {
      ...mapState({
        homePage: state => state.posts.homePage,
        postsOnHome: state => state.posts.postsOnHome
      }),
      ...mapGetters([
        'homeBlogPosts',
        'blogPostCount'
      ])
    },
    data () {
      return {
        currentPage: 1
      }
    },
    methods: {
      pageChanged (page) {
        this.$store.commit('SET_PAGE', page)
      }
    },
    components: {
      ViewSinglePost
    }
  }
</script>
