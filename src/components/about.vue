<template>
  <div class="about content">
    <img class="aboutMePhoto" src="http://viitekehys.net/cv/lassepirinen/gfx/aboutMePhoto.jpg" alt="Me">
    <ul class="links hover">
      <li>
        <a href="cv_lasse_pirinen.pdf" target="_blank" class="hoverLeft" title="Click to download pdf">
          CV <em style="left: -180px; display: none;">Click to download pdf</em>
        </a>
      </li>
    </ul>
    Web Developer<br/>
    Thinker<br/>
    Brother, son, friend<br/>
    Wisecracker for the idiosyncratic<br/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .about {

  }
  .aboutMePhoto {
    border: 10px solid black;
    box-shadow: 2px 2px 15px black;
    height: 50%;
    width: auto;
  }
  .links {
    display: block;
    li {
      display: inline-block;
    }
    a {
      display: block;
      color: white;
      background: black;
      text-transform: uppercase;
      font-size: 1.1em;
      padding: 0.8em;
      width: 5em;
      box-shadow: 2px 2px 15px #000;
      -moz-box-shadow: 2px 2px 10px #000;
    }
  }
</style>
