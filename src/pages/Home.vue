<template>
  <div>
    <div v-for="post in homeBlogPosts" :key="post.name">
      <view-single-post :postname="post.name" :stub="true"></view-single-post>
    </div>
    <b-pagination class="lower-pagination" align="center" size="md" :total-rows="blogPostCount" v-model="currentPage" :per-page="postsOnHome" @change="pageChanged">
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
    mounted () {
      if (this.pageParam) {
        this.currentPage = this.pageParam
      }
      this.$store.commit('SET_PAGE', this.currentPage)
    },
    watch: {
      pageParam (newVal) {
        this.currentPage = newVal
        this.$store.commit('SET_PAGE', newVal)
      }
    },
    computed: {
      pageParam () {
        if (this.$route.params.page) {
          return parseInt(this.$route.params.page)
        } else {
          return 1
        }
      },
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
        this.$router.push({ name: 'home', params: { page: page }})
      }
    },
    components: {
      ViewSinglePost
    }
  }
</script>
