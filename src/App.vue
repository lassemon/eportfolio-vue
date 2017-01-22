<template>
  <div v-bind:id="[view]" class="main">
    <div class="wrapper">
      <transition name="fade">
        <about key="about" v-show="view === 'about'"/>
      </transition>
      <transition name="fade">
        <portfolio key="p" v-show="view === 'portfolio'"/>
      </transition>
      <transition name="fade">
        <lifestyle key="l" v-show="view === 'lifestyle'"/>
      </transition>
      <transition name="fade">
        <contact key="c" v-show="view === 'contact'"/>
      </transition>
    </div>

    <navFooter @changeView="changeView"/>
  </div>
</template>

<script>
import about from './components/about.vue'
import portfolio from './components/portfolio.vue'
import lifestyle from './components/lifestyle.vue'
import contact from './components/contact.vue'
import navFooter from './components/footer.vue'

export default {
  name: 'app',
  components: {
    about,
    portfolio,
    lifestyle,
    contact,
    navFooter
  },
  data () {
    return {
      view: 'about'
    }
  },
  methods: {
    changeView(view) {
      this.view = view;
    }
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
  #app,
  .main,.wrapper,.content {
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
