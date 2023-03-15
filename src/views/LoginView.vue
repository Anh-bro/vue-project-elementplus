<template>
    <div style="height:100%;width:100%;background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);">


        <el-form ref="form" label-width='70px' class='login-container' :model="form" :rules="rules">
            <h3 class="login_title">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit" style="margin-left: 40px;">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
    font-size: large;
}

.el-input {
    width: 198px;
}
</style>
<script>
import { login } from '../api/index'
import axios from "axios";
import Cookie from "js-cookie"
import Mock from "mockjs"
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请输入用户名'
                    }

                ],
                password: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入密码'
                }]
            }
        }
    },
    methods: {
        submit() {
            // const token = Mock.Random.guid()
            // Cookie.set('token', token)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    login(this.form).then(({ data }) => {
                        console.log(data)
                        if (data.code === 2000) {
                            Cookie.set('token', data.data.token)
                            this.$router.push('/home')
                        } else {
                            ElMessageBox.alert('登录失败', data.data.message, {
                                confirmButtonText: '确定',
                                // callback: action => {
                                //     ElMessage({
                                //         type: 'info',
                                //         message: `action: ${action}`,
                                //     })
                                // }
                            });
                        }

                    })
                }
            })

        },
    },
}
</script>
  
  