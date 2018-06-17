<template>
  <div id="app">
    <el-header class="head" height="40px">
      <head-info></head-info>
    </el-header>
    <el-container class="container">
      <el-aside width="15%" class="aside">
        <menu-catalog></menu-catalog>
      </el-aside>
      <el-main class="main">
        <router-view class="pages" />
      </el-main>

    </el-container>
    <el-footer height="20px" class="footer">
      <foot-info></foot-info>
    </el-footer>
  </div>
</template>

<script>
import MenuCatalog from './components/MenuCatalog';
import FootInfo from './components/FootInfo';
import HeadInfo from './components/HeadInfo';

export default {
  components: {
    MenuCatalog,
    FootInfo,
    HeadInfo
  },
  name: 'App',
};
</script>
<style>
body,
html {
  margin: 0;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.head {
  border-bottom: #dcdfe6 1px solid;
}
.aside {
  border-right: #dcdfe6 1px solid;
  /* padding: 5px; */
}
.footer {
  border-top: #dcdfe6 1px solid;
}
.container {
  height: calc(100vh - 62px);
  overflow-y: auto;
}
.main {
  padding: 0px;
}
.pages {
  margin: 5px 0;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
  border-radius: 4px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
  background-color: #cccccc;
}
</style>
