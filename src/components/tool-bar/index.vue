<template>
  <div class="tool-bar">
    <span @click="show" class="tool-bar_title">影音汇</span>
    <div class="tool-bar_name" v-if="name">当前播放：{{name}}</div>
    <!-- <span @click="show" class="tool-bar_vip">登录</span> -->
    <i @click="mincus" class="tool-bar_mincus"></i>
    <i @click="close" class="tool-bar_close"></i>
  </div>
</template>
<style lang="stylus" scoped>
.tool-bar {
  position: relative;
  width: 100%;
  height: 20px;
  font-size: 13px;
  line-height: 20px;
  -webkit-app-region: drag;

  &_name {
    display: inline-block;
    width: 500px;
    text-align: left;
    margin-left: 15px;
  }

  &_vip {
    display: inline;
    color: #d00;
    font-size: 13px;
    margin-left: 20px;
    text-decoration: underline;
    -webkit-app-region: no-drag;
  }

  &_title {
    display: inline-block;
    font-size: 13px;
    -webkit-app-region: no-drag;
  }

  &_mincus, &_close {
    position: absolute;
    display: block;
    top: 50%;
    -webkit-app-region: no-drag;
  }

  &_mincus {
    background: url('../../assets/minus.png') no-repeat;
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    right: 25px;
    margin-top: -8px;
  }

  &_close {
    background: url('../../assets/close.png') no-repeat;
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    right: 0px;
    margin-top: -9.5px;
  }
}
</style>
<script>
const { ipcRenderer } = require('electron');
import { mapActions, mapState } from 'vuex';
export default {
  name: 'tool-bar',
  computed: {
    ...mapState({
      name: state => state.tv.name,
      user: state => state.user.user
    })
  },
  methods: {
    close() {
      ipcRenderer.send('min');
    },
    mincus() {
      ipcRenderer.send('min');
    },
    async show() {
      const data = await this.$http({
        method: 'post',
        // url: 'http://127.0.0.1:3000/tv/getList',
        url: 'https://www.drnet.xyz/api/tv/checkLogin',
        headers: {
          authorization: JSON.stringify(localStorage.getItem('token'))
        }
      });
      if (data.data.code === 200) {
        localStorage.removeItem('token');
        this.$emit('logOut');
        return;
      }
      this.setLoginFlag();
    },
    ...mapActions('tv', ['setLoginFlag']),
    logOut() {
      localStorage.removeItem('token');
    }
  }
};
</script>