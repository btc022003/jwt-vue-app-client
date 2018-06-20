<template>
  <div>
      <legend>注册</legend>
      <div class="form-group">
        <label for="">邮箱</label>
        <input type="text" class="form-control" v-model="user.email" placeholder="请输入邮箱">
      </div>
      <div class="form-group">
        <label for="">密码</label>
        <input type="text" class="form-control" v-model="user.password" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <label for="">确认密码</label>
        <input type="text" class="form-control" v-model="user.password_confirmation" placeholder="请在此输入密码">
      </div>
      <button type="submit" class="btn btn-primary" @click="submitHandle">注册</button>
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
        password_confirmation: '',
      },
    }
  },
  methods: {
    ...mapActions('users', ['reg']),
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
      if (this.user.password != this.user.password_confirmation) {
        alert('两次输入密码不一致');
        return;
      }
      // var attr = {...this.user};
      // console.log(attr);
      this.reg(this.user);
    },
  },
}
</script>
