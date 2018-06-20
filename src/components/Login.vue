<template>
  <div>
      <legend>登陆</legend>
      <div class="form-group">
        <label for="">邮箱</label>
        <input type="text" class="form-control" v-model="user.email" placeholder="请输入邮箱">
      </div>
      <div class="form-group">
        <label for="">密码</label>
        <input type="text" class="form-control" v-model="user.password" placeholder="请输入密码">
      </div>
      <button type="submit" class="btn btn-primary" @click="submitHandle">登陆</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions('users', ['login']),
    submitHandle() {
      //
      // console.log(this.user);
      if (this.user.email == '') {
        alert('邮箱不能为空');
        return;
      }
      if (this.user.password == '') {
        alert('密码不能为空');
        return;
      }
      // var attr = {...this.user};
      // console.log(attr);
      this.login({user: this.user, $router: this.$router});
    },
  },
}
</script>
