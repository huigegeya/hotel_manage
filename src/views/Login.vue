<template>
  <div class="container">
    <div class="login">
      <div class="item">
        <h2>酒店管理系统</h2>
      </div>
      <div class="item">
        <span>账号：</span>
        <el-input size="mini" v-model="loginId" placeholder="请输入账号" />
      </div>
      <div class="item">
        <span>密码：</span>
        <el-input
          size="mini"
          type="password"
          v-model="loginPwd"
          placeholder="请输入密码"
        />
      </div>
      <div>
        记住我:
        <el-checkbox v-model="ckMe" size="large" />
      </div>
      <div class="btn">
        <el-button size="mini" type="success">登录</el-button>
        <el-button size="mini">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Login",
  setup() {
    //定义登录数据
    let loginData = reactive({
      loginId: "",
      loginPwd: "",
      ckMe: false,
    });
    return {
      ...toRefs(loginData),
    };
  },
};
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgb(13, 54, 82), lightblue);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .login {
  width: 400px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
}
.container .login .item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
}
.container .login .item h2 {
  text-align: center;
}
.container .login .item span {
  width: 50px;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>
