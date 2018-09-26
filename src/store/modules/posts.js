const state = {
  /*
  {
    name: the component name,
    title: the title of the post,
    postdate: when it was posted
  }
   */
  blogPosts: [
    { name: 'FirstPost', title: 'First post!', postdate: '09-25-2018' },
    { name: 'SecondPost', title: 'Second post!', postdate: '09-24-2018' }
  ],
  postsOnHome: 10
}

const getters = {
  homeBlogPosts: state => {
    if (state.blogPosts.length <= state.postsOnHome) {
      return state.blogPosts
    }
    return state.blogPosts.slice(0, state.postsOnHome)
  }
}


export default {
  state,
  getters
}