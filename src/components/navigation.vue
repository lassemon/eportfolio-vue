<template>
  <nav>
    <router-link class="nav-item" key="about" to="/" replace exact @click="changeView('portfolio')">About</router-link>
    <router-link class="nav-item" to="/portfolio" replace>Portfolio</router-link>
    <router-link class="nav-item" to="/lifestyle" replace>Lifestyle</router-link>
    <router-link class="nav-item" to="/contact" replace>Contact</router-link>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        view: 'about'
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../css/tools.scss";
  nav {
    list-style: none;
    cursor: pointer;
    text-align: center;
    height: 3em;
    background: black;
  }
  .nav-item {
    display: inline-block;
    line-height: 3em;
    width: 8em;
    color: gray;
    text-shadow: black 3px 3px 5px;
    text-transform: uppercase;
  }
  .nav-item:hover,
  .nav-item.active {
    color:white;
  }

  #about nav {
    background: radial-gradient(circle at 50% center, lighten($about-color, 10), darken($about-color, 40));
    border-top: 1px solid darken($about-color, 10);
    border-bottom: 1px solid lighten($about-color, 40);
  }
  #portfolio nav {
    background: radial-gradient(circle at 50% center, lighten($portfolio-color, 10), darken($portfolio-color, 40));
    border-top: 1px solid darken($portfolio-color, 10);
    border-bottom: 1px solid lighten($portfolio-color, 40);
  }
  #lifestyle nav {
    background: radial-gradient(circle at 50% center, lighten($lifestyle-color, 10), darken($lifestyle-color, 40));
    border-top: 1px solid darken($lifestyle-color, 10);
    border-bottom: 1px solid lighten($lifestyle-color, 40);
  }
  #contact nav {
    background: radial-gradient(circle at 50% center, lighten($contact-color, 10), darken($contact-color, 40));
    border-top: 1px solid darken($contact-color, 10);
    border-bottom: 1px solid lighten($contact-color, 40);
  }
</style>
