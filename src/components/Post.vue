<template>
  <div>
    <router-link v-if="stub" :to="{ name: 'post', params: { postname: componentName }}">
      <h3>{{ title }} <small>{{ postDate }}</small></h3>
    </router-link>
    <div v-if="!stub">
      <h3>{{ title }} <small class="align-right">{{ postDate }}</small>
        <hr>
      </h3>
    </div>
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
