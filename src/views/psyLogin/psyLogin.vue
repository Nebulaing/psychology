<template>
    <view class="psyLogin">
        <el-card class="box-card">
            <div class="formBox">
                <div class="title-box">
                    <h1>登录/注册</h1>
                </div>
                <el-form :model="ruleFormVerify" status-icon :rules="rules"
                         ref="ruleFormVerify" label-width="80px" class="demo-ruleForm"
                         autocomplete="off">
                    <div class="itemBox">
                        <el-form-item label="手机号" prop="phone">
                            <el-input class="input" v-model="ruleFormVerify.phone" placeholder="请输入手机号"
                                      type="email"
                                      style="width: 13rem;"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="telVerificationCode">
                            <el-input class="input" v-model="ruleFormVerify.telVerificationCode"
                                      placeholder="请输入验证码"
                                      type="number"></el-input>
                            <div class="el-button code" @click="getCode()" :disabled="getCodeBtnDisable"
                                 style="width: 4rem; font-size: 1px;margin-left: 0.2rem">{{ countDown }}
                            </div>
                        </el-form-item>
                        <!--                        验证码：-->
                        <el-button class="submit" @click="submit()">登录/注册</el-button>
                    </div>
                </el-form>
            </div>
        </el-card>
    </view>

</template>

<script>
    import {
        checkCode,
        phoneNumberStyle
    } from "@/utlis/validate.js";
    import {ElMessage, ElNotification} from 'element-plus'
    export default {
        name: "psyLogin.vue",
        data() {
            return {
                fullHeight: document.documentElement.clientHeight,
                // 校验表单
                ruleFormVerify: {
                    phone: '',
                    telVerificationCode: '',
                },
                countDown: "发送",
                waitTime: 60, // 获取验证码按钮失效时间
                getCodeBtnDisable: false,
                timer: null,
                rules: {
                    phone: [
                        {
                            required: true,
                            validator: phoneNumberStyle,
                            trigger: ['blur', 'change'],
                        },
                    ],
                    telVerificationCode: [
                        {
                            required: true,
                            validator: checkCode,
                            trigger: ['blur', 'change'],
                        },
                    ],
                }
            }
        },
        mounted() {
            localStorage.clear()
            this.get_bodyHeight()
        },
        methods: {
            get_bodyHeight() {//动态获取浏览器高度
                const that = this
                window.onresize = () => {
                    return (() => {
                        window.fullHeight = document.documentElement.clientHeight
                        that.fullHeight = window.fullHeight
                    })()
                }
            },
            async sendCode() {

            },
            getCode() {

            },
            submit(){
                this.ruleFormVerify = {}
                ElNotification({
                    title: 'Success',
                    message: '登录成功',
                    type: 'success',
                })
                this.$router.push('/psyHome')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/Global.css";

    .psyLogin {
        position: fixed;
        display: flex;
        width: 100%;
        height: 100%;
        verflow: hidden;

        .box-card {
            position: relative;
            width: 30%;
            height: 24rem;
            border-radius: 2rem;
            background-color: #ffffff;
            margin: auto;
            .demo-ruleForm{
                margin-top: 15%;
                .itemBox {
                    margin: auto;
                    width: 20rem;
                    .el-input {
                        width: 9rem;
                        margin-bottom: 5px;
                    }

                    .el-input:focus {
                        color: #b8c1e9;
                    }
                    .el-button {
                        margin-bottom: 5px;
                    }
                    .submit{
                        margin-top: 2rem;
                        width: 16.5rem;
                    }
                    .el-button:hover {
                        cursor: pointer;
                        background-color: #ff8e40;
                    }
                    .code {
                        opacity: inherit;
                        background-color: #ff8e40;
                    }
                }

            }
        }

    }









</style>
