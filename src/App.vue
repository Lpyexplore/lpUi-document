<template>
  <div id="app">
    <router-link to="/test">测试</router-link>
    <div class="markdown-body" v-highlight>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {

    }

  }
</script>

<style>
@import "assets/css/markdown/github-markdown.css";
@import "assets/css/markdown/markdown-center.css";
</style>
