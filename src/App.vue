<template>
  <div id="app">
    <nav-bar class="lp-ui-document-nav"
             :class="[
                {'lp-ui-document-nav-show': nav_show === true || nav_show === null}, 
                {'lp-ui-document-nav-hide': nav_show === false}
              ]"
              v-model="index"/>

    <div class="router-contents" :style="{'height': `${contentsHeight}px`}">
      <router-view @startUse="startUse" @goToUse="goToUse"/>
    </div>

  </div>
</template>

<script>
import navBar from './components/nav-bar/nav-bar'
  export default {
    name: 'App',
    components: {
      navBar,
    },
    data() {
      return {
        contentsHeight: null,
        nav_show: null,
        index: -1
      }
    },
    methods: {
      startUse(value) {
        this.nav_show = value
      },
      goToUse(value) {
        this.index = value
      }
    },
    mounted() {
      this.contentsHeight = document.body.clientHeight - 70
    }

  }
</script>

<style>
  @import "assets/css/markdown/github-markdown.css";
  @import "assets/css/markdown/markdown-center.css";
  @import "assets/css/reset/normalize.css";
  @import "assets/css/scrollBar/web-scroll-bar.css";
  @import "assets/css/fonts/fonts.css";
  @import "assets/css/font-awesome/css/font-awesome.min.css";
  #app{
    width: 100vw;
    height: 100vh;
    font-family: normal;
    font-weight: 400;
  }
  .lp-ui-document-nav{
    position: relative;
    top: -70px;
  }
  .lp-ui-document-nav-show{
    transition: all .3s linear;
    top: 0
  }
  .lp-ui-document-nav-hide{
    top: -70px;
  }
  .router-contents{
    width: 100%;
  }
</style>
