<template>
  <div id="app" class="container">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img id="header-img" src="./assets/wolf_wave_prisma_healed_small.jpg">
        Mitch McAffee
      </b-navbar-brand>

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
    <footer>
      <p class="text-center">Copyright 2018 Mitch McAffee</p>
    </footer>
  </div>
</template>

<style>
html{ height:100%; }
body{ min-height:100%; padding:0; margin:0; position:relative; }

/* Trick: */
body {
  position: relative;
}

body::after {
  content: '';
  display: block;
  height: 50px; /* Set same as footer's height */
}

footer {
  position: absolute;
  bottom: 0;
  height: 50px;
}
#header-img {
  height: 70px;
  border-radius: 20px;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>
