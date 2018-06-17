
<template>
  <el-collapse accordion :value="1">
    <el-collapse-item title="我的收藏" name="1">
    </el-collapse-item>
    <el-collapse-item title="系统菜单" name="2">
      <el-input placeholder="查找菜单" v-model="filterText" size="mini">
      </el-input>
      <el-tree class="filter-tree" :data="data2" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span v-if="data.children">{{ node.label }} </span>
          <router-link v-else to="/">{{ node.label }} </router-link>
          <el-button class="star" type="text" icon="el-icon-star-off" @click="() => append(data)"></el-button>
        </span>
      </el-tree>
    </el-collapse-item>
  </el-collapse>
</template>


<script>
export default {
  name: 'MenuCatalog',
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },

  data() {
    return {
      filterText: '',
      data2: [
        {
          id: 1,
          label: '基础信息',
          children: [
            {
              id: 4,
              label: '公司组织'
            }
          ]
        },
        {
          id: 2,
          label: '采购合同'
        },
        {
          id: 3,
          label: '一级 3'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  }
};
</script>

<style>
.el-tree-node__content {
  position: relative;
}
.el-tree-node__content .star {
  position: absolute;
  right: 2px;
  top: 2px;
  display: none;
}
.el-tree-node__content:hover .star {
  display: inline-block;
  padding: 0px;
  font-size: 18px;
}
</style>
