<template>
  <div>
      <div class="title">更新升级</div>

      <div class="child-title">npm 替换安装</div>
      <div class="introduction">通过重新安装最新版本的方法替换掉旧版本的库</div>
      <reInstall-md class="markdown-body el-last" v-highlight/>

      <div class="child-title">修改配置文件并安装</div>
      <div class="introduction">也可以先修改 package-lock.json 文件中 lpyexplore-ui 库的 version 版本</div>
      <modify-file-md class="markdown-body not-el-last" v-highlight/>
      <div class="introduction">再执行 npm install 更新</div>
      <npmInstallMd class="markdown-body el-last" v-highlight/>
      

  </div>
</template>

<script>
import reInstallMd from './md/reInstall.md';
import modifyFileMd from './md/modifyFile.md';
import npmInstallMd from './md/npmInstall.md';
export default {
    name: 'Update',
    components: {
      reInstallMd,
      modifyFileMd,
      npmInstallMd
    }
}
</script>

<style scoped>
  .not-el-last{
    margin-bottom: 20px;
  }
</style>