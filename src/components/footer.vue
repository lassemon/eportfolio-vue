<template>
  <footer>
    <navigation @changeView="changeView"/>
  </footer>
</template>

<script>
import navigation from './navigation.vue'

export default {
  methods: {
    changeView(view) {
      this.$emit('changeView', view);
    }
  },
  components: {
    navigation
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/tools.scss";
  footer {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom:0;
  }
  #about footer {
    background: radial-gradient(20em at 50% center, lighten($about-color, 10), $about-color);
  }
  #portfolio footer {
    background: radial-gradient(20em at 50% center, lighten($portfolio-color, 10), $portfolio-color);
  }
  #lifestyle footer {
    background: radial-gradient(20em at 50% center, lighten($lifestyle-color, 10), $lifestyle-color);
  }
  #contact footer {
    background: radial-gradient(20em at 50% center, lighten($contact-color, 10), $contact-color);
  }
</style>
