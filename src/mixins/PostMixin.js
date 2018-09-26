let postMixin = {
  props: {
    title: {
      type: String,
      required: true
    },
    postDate: {
      type: String,
      required: true
    },
    stub: {
      type: Boolean,
      default: false
    }
  },
  // Return the component name as a computed property so it's
  // accessible in the template
  computed: {
    name () {
      return this.$options.name
    }
  }
}

export default postMixin