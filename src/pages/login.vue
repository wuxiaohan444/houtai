<template>
    <div id="login">
        <div class="login-box">
            <div class="login-box-input">
                <el-input placeholder="请输入用户名" v-model="username" clearable class="login-input"></el-input>
                <el-input placeholder="请输入密码" v-model="password" type="password" clearable
                          class="login-input"></el-input>
                <el-input placeholder="请输入验证码" v-model="code" type="password" clearable class="login-input"></el-input>
                <el-button type="primary" @click="login">主要按钮</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: '',
                code: ''
            }
        },
        methods: {
            login() {
                // this.$axios({
                //     method: 'post',
                //     url: "/customerS/login",
                //     data: this.$qs.stringify({
                //         user: this.username,
                //         password: this.password,
                //         verify: this.code
                //     })
                // }).then((res) => {
                //     // console.log(res);
                //     // this.$router.push({name: 'index'})
                // });
                sessionStorage.setItem("user", '1');
                this.$router.push({name: 'index'})
            }
        }
    }
</script>

<style scoped>
    .login-box {
        width: 400px;
        height: 300px;
        border: 1px solid #000;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        padding: 30px;
        box-sizing: border-box;
    }

    .login-box-input {
        margin: 0 auto;
        width: 300px;
    }

    .login-box .login-input {
        width: 300px;
        margin-bottom: 20px;
    }
</style>