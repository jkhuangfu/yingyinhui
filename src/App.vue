<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

*::-webkit-scrollbar { /* 滚动条整体样式 */
  width: 6px; /* 高宽分别对应横竖滚动条的尺寸 */
  height: 1px;
}

*::-webkit-scrollbar-thumb { /* 滚动条里面小方块 */
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

*::-webkit-scrollbar-track { /* 滚动条里面轨道 */
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: #EDEDED;
}
</style>
<script>
export default {
  name: 'Main',
  components: {}
};
</script>
