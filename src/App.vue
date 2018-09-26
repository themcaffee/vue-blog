<template>
  <div id="app" class="container">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Mitch McAffee</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="https://github.com/themcaffee">Github</b-nav-item>
          <b-nav-item href="https://videos.audio" right>videos.audio</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>
