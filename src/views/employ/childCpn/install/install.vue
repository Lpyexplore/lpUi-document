<template>
  <div>
      <div class="title">安装使用</div>

      <div class="child-title">npm 安装</div>
      <div class="introduction">最好使用 npm 安装</div>
      <install-md class="markdown-body el-last" v-highlight/>

      <div class="child-title">引入文件</div>
      <div class="introduction">在 main.js 文件中引入所需文件</div>
      <import-md class="markdown-body el-last" v-highlight/>

  </div>
</template>

<script>
import installMd from './md/install.md';
import importMd from './md/import.md';
export default {
    name: 'Install',
    components: {
      installMd,
      importMd
    }
}
</script>

<style scoped>
  @import '../../../../assets/css/cpnCase/cpnCase.css';
</style>