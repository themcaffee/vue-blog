const state = {
  /*
  {
    name: the component name,
    title: the title of the post,
    postdate: when it was posted
  }
   */
  blogPosts: [
    { name: 'UnderConstruction', title: 'Site Under Construction', postdate: '11-19-2018'}
  ],
  // Number of posts to show per page on home
  postsOnHome: 5,
  // The current page that the user is viewing on the home page
  homePage: 1
}

const getters = {
  // The current posts being shown on the home page based on the current page being viewed
  homeBlogPosts: state => {
    if (state.blogPosts.length <= state.postsOnHome) {
      return state.blogPosts
    }
    let start = (state.homePage - 1) * state.postsOnHome
    let end = state.postsOnHome
    if (start === end) {
      end += 1
    }
    return state.blogPosts.slice(start, end)
  },
  blogPostCount: state => {
    return state.blogPosts.length
  }
}

const mutations = {
  ['SET_PAGE'] (state, page) {
    state.homePage = page
  }
}


export default {
  state,
  getters,
  mutations
}