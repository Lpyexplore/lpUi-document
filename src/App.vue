<template>
  <div id="app">
    <nav-bar/>

    <div class="router-contents" :style="{'height': `${contentsHeight}px`}">
      <router-view></router-view>
    </div>

<!--    <div class="markdown-body" v-highlight>-->
<!--      <router-view></router-view>-->
<!--    </div>-->

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
        contentsHeight: null
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
  .router-contents{
    width: 100%;
  }
</style>
