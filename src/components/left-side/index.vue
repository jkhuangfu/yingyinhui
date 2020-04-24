<template>
  <div class="left-side">
    <el-menu
      @close="handleClose"
      @open="handleOpen"
      @select="handleSelect"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <el-submenu :index="index" :key="index" v-for="(item,index) in Object.keys(tvData)">
        <template slot="title">
          <span>{{item === "hd" ? "高清电视" : item === "bq" ? "标清电视" : "VIP专享"}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="i.tv_url+'^'+i.tv_name" :key="idx" v-for="(i,idx) in tvData[item]">{{i.tv_name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="stylus" scoped>
.el-menu {
  border: none !important;
}
</style>
<script>
import {} from 'element-ui';
import { mapActions } from 'vuex';
export default {
  name: 'left-side',
  props: ['tvData'],
  computed: {},
  methods: {
    handleClose() {},
    handleOpen() {},
    handleSelect(v) {
      this.setTvSrc(v);
    },
    ...mapActions('tv', ['setTvSrc'])
  },
  mounted() {
    console.log(this.tvData);
  }
};
</script>