<template>
    <div class="container">
        <div class="login">
            <div class="item">
                <h2>酒店管理系统</h2>
            </div>
            <div class="item">
                <span>账号：</span>
                <el-input size="mini" v-model="input" placeholder="请输入账号" />
            </div>
            <div class="item">
                <span>密码：</span>
                <el-input size="mini" v-model="input" placeholder="请输入密码" />
            </div>
            <div>
                <span>记住我： </span>
                <el-radio size="mini"></el-radio>
            </div>
            <div class="item">
                <el-button size="mini" type="success">登录</el-button>
                <el-button size="mini">取消</el-button>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
    name:'Login'
    }
    </script>
    
<style>
.container{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom,rgb(13,54,82),lightblue);
    display: flex;
    justify-content: center;
    align-items: center;
} 
.container .login{
    width: 400px;
    height: 220px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
}
.container .login .item{
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font:14px;
}
.container .login .item h2{
    text-align: center;
}
.container .login .item span{
    width: 55px;
   

}

</style>
