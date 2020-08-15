<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-link to="/test">测试</router-link>
    <div class="markdown-body" v-highlight>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import navBar from './components/nav-bar/nav-bar'
  export default {
    name: 'App',
    components: {
      navBar
    }

  }
</script>

<style>
@import "assets/css/markdown/github-markdown.css";
@import "assets/css/markdown/markdown-center.css";
@import "assets/css/reset/normalize.css";
</style>
