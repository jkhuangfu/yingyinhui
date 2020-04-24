<template>
  <el-dialog
    :before-close="handleClose"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    title="账户登录"
    width="35%"
  >
    <Input placeholder="请输入账号" style="margin-bottom:10px;" v-model="user" />
    <Input placeholder="请输入密码" show-password style="margin-bottom:10px;" v-model="pwd" />
    <Input placeholder="请输入令牌" v-model="token" />
    <span class="dialog-footer" slot="footer">
      <el-button @click="login" plain type="info">登录</el-button>
    </span>
  </el-dialog>
</template>
<style lang="stylus" scoped>
>>>.el-dialog__footer {
  text-align: center !important;
}
</style>
<script>
import { mapState, mapActions } from 'vuex';
import { Input } from 'element-ui';
export default {
  name: 'login-module',
  components: { Input },
  computed: {
    ...mapState({
      dialogVisible: state => state.tv.isShowLogin
    })
  },
  data() {
    return {
      pwd: '',
      user: '',
      token: ''
    };
  },
  methods: {
    cancle() {
      this.setLoginFlag();
    },
    handleClose() {
      this.setLoginFlag();
    },
    async login() {
      const { data } = await this.$http({
        method: 'post',
        // url: 'http://127.0.0.1:3000/tv/login',
        url: 'https://www.drnet.xyz/api/tv/login',
        headers: {
          authorization: JSON.stringify(localStorage.getItem('token'))
        },
        data: {
          user: this.user,
          pwd: this.pwd,
          token: this.token
        }
      });
      if (data && data.code === 200) {
        // 登录成功
        this.user = this.token = this.pwd = '';
        localStorage.setItem('token', data.result.data);
        this.setLoginFlag();
      }
    },
    ...mapActions('tv', ['setLoginFlag'])
  }
};
</script>