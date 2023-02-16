<template>
<div class="container">
    <div class="login">
        <div class="item">
            <h2>酒店管理系统</h2>
        </div>
        <div class="item">
            <span>账号：</span>
            <el-input v-model="input" placeholder="Please input" />
        </div>
        <div class="item">
            <span>密码：</span>
            <el-input v-model="input" placeholder="Please input" />
        </div>
        <div class="item">
            <span>记住我</span>
            <el-radio label="1" size="large"></el-radio>
        </div>
        <div class="item">
            <el-button type="success">Success</el-button>
            <el-button>Default</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'Login'
}
//
</script>

<style>
.container{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom,rgb(13,54,82),lightblue);
}
</style>