<template>
  <el-container>
    <el-header>
      <tool-bar @logOut="logOut"></tool-bar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <left-side :tvData="tvData"></left-side>
      </el-aside>
      <el-main>
        <video-module :src="src" v-if="src"></video-module>
        <div class="no-video" v-else>Welcome</div>
      </el-main>
    </el-container>
    <login></login>
  </el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import videoModule from './video/index';
import leftSide from './left-side/index';
import ToolBar from './tool-bar/index';
import Login from './login/index';
export default {
  name: 'landing-page',
  components: { videoModule, leftSide, ToolBar, Login },
  data() {
    return {
      tvData: {}
    };
  },
  computed: {
    ...mapState({
      src: state => state.tv.src,
      dialogVisible: state => state.tv.isShowLogin
    })
  },
  watch: {
    async dialogVisible() {
      await this.getList();
    }
  },
  async mounted() {
    await this.getList();
  },
  methods: {
    logOut() {
      this.setTvSrc('');
      this.getList();
    },
    async getList() {
      const data = await this.$http({
        method: 'post',
        url: 'https://www.drnet.xyz/api/tv/getList',
        headers: {
          authorization: JSON.stringify(localStorage.getItem('token'))
        },
        data: {
          user: this.user,
          pwd: this.pwd,
          token: this.token
        }
      });
      this.tvData = { ...data.data.result };
    },
    ...mapActions('tv', ['setTvSrc'])
  }
};
</script>

<style scoped>
.el-header {
  height: 20px !important;
}
.el-aside {
  background-color: rgb(84, 92, 100);
  width: 180px !important;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 20px);
}

.el-main {
  background-color: #000;
  text-align: center;
  height: calc(100vh - 20px);
  padding: 0px;
}
.no-video {
  text-align: center;
  font-size: 40px;
  line-height: 400px;
  color: aqua;
  font-weight: bold;
}
</style>
