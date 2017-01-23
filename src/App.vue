<template>
  <div v-bind:id="[view]" class="main">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <navFooter />
  </div>
</template>

<script>
import navFooter from './components/footer.vue'

export default {
  name: 'app',
  components: {
    navFooter
  },
  watch: {
    '$route': function(to, from){
      this.view = to.name;
    }
  },
  data () {
    return {
      view: this.$route.name
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "./css/tools.scss";
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html,body {
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    background: #00134c;
    margin: 0;
    position: absolute;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
  }

  html,body,
  .main,.content {
    width:100%;
    height:100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding:0;
  }

  a {
    text-decoration: none;
  }

  .wrapper {
  }

  .content {
    position: absolute;
    text-align: center;
    padding: 10% 0 0 0;
  }

  #about {
    .content {
       background: radial-gradient(circle closest-corner at 50% bottom, lighten($about-color, 20), lighten($about-color, 10), $about-color);
    }
  }

  #portfolio {
    .content {
      background: radial-gradient(circle closest-corner at 50% bottom, lighten($portfolio-color, 10), lighten($portfolio-color, 5), $portfolio-color);
    }
  }

  #lifestyle {
    .content {
      background: radial-gradient(circle closest-corner at 50% bottom, lighten($lifestyle-color, 20), lighten($lifestyle-color, 10), $lifestyle-color);
    }
  }

  #contact {
    .content {
      background: radial-gradient(circle closest-corner at 50% bottom, lighten($contact-color, 10), lighten($contact-color, 5), $contact-color);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
