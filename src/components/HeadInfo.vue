
<template>
  <el-row>
    <el-col class="head-item" :span="12">
      <i class="el-icon-setting"></i> 零售解决方案
    </el-col>
    <el-col class="head-item head-item-right" :span="12">      
      <i class="el-icon-plus" @click="fullScreen"></i>
    </el-col>
  </el-row>
</template>


<script>
export default {
  name: 'HeadInfo',
  methods: {
    fullScreen() {
      document.children[0].webkitRequestFullscreen();
    }
  }
};
</script>

<style>
.head-item {
  font-size: 16px;
  line-height: 40px;
  height: 40x;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.head-item-right{
  text-align: right;
}
</style>

