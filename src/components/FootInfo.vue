
<template>
  <el-row>
    <el-col class="foot-item" :span="4">客户端:v2.1.4</el-col>
    <el-col class="foot-item" :span="5">服务器:v2.1@测试服务器</el-col>
    <el-col class="foot-item" :span="6">
      公司:无锡贝瑞卡诺科技有限公司
      <el-button class="foot-item-icon" type="warning" icon="el-icon-edit" size="medium"></el-button>
    </el-col>
    <el-col class="foot-item" :span="5">部门:研发部</el-col>
    <el-col class="foot-item" :span="4">姓名:王思颖
      <el-button class="foot-item-icon" type="warning" icon="el-icon-edit" size="medium"></el-button>
    </el-col>
  </el-row>
</template>


<script>
export default {
  name: 'FootInfo'
};
</script>

<style>
.foot-item {
  font-size: 13px;
  line-height: 20px;
  height: 20x;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.foot-item-icon {
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
}
</style>

