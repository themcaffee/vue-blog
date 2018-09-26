<template>
  <div>
    <router-link :to="{ name: 'post', params: { postname: componentName }}">
      <h3>{{ title }} <small>{{ postDate }}</small></h3>
    </router-link>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: {
      componentName: String,
      title: String,
      postDate: String,
      stub: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
