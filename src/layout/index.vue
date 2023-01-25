<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo w"
                        mode="horizontal"
                        :ellipsis="false"
                        @select="handleSelect"
                >
                    <el-menu-item index="0">
                        <img src="@/assets/logo.png" alt="">
                        <div class="name">医心</div>
                    </el-menu-item>
                    <div class="flex-grow"/>
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">量表测试</el-menu-item>
                    <el-menu-item index="3">心理咨询</el-menu-item>
                    <el-menu-item index="4">心理问答</el-menu-item>
                    <el-menu-item index="5">团体方案</el-menu-item>

                    <div class="flex-grow"/>
                    <el-menu-item index="6">
                        <el-icon ><Bell /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="7" v-if="isLogin==false">
                         <el-button type="primary">登录/注册</el-button>
                    </el-menu-item>
                    <el-menu-item index="7" v-else>
                        <div class="block">
                            <el-avatar :size="50" :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'" />
                        </div>
                    </el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <router-view>
                </router-view>
            </el-main>
            <el-footer>
                <div class="w">
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content ep-bg-purple" />
                            <div class="plan">联系我们</div>
                            <div class="littleText">
                                <p>诚信合作</p>
                                <p>公司动态</p>
                                <p>投诉举报</p>
                            </div>
                        </el-col>
                        <el-col :span="6"><div class="grid-content ep-bg-purple" />
                            <div class="plan">行业解决问题</div>
                            <div class="littleText">
                                <p>社区企业解决方案</p>
                                <p>教育行业解决方案</p>
                                <p>公益行业解决方案</p>
                            </div>
                        </el-col>
                        <el-col :span="6"><div class="grid-content ep-bg-purple" />
                            <div class="plan">联系方式</div>
                            <div class="littleText">
                                <p>投诉建议：17602155555</p>
                                <p>客服电话：0752-4564654</p>
                            </div>
                        </el-col>
                        <el-col :span="6"><div class="grid-content ep-bg-purple" />
                            <div class="plan">资讯动态</div>
                            <div class="littleText">
                                <p>最新资讯</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import {Bell} from "@element-plus/icons-vue";
    export default {
        name: "index.vue",
        data(){
            return{
                isLogin:true
            }
        },
        components: {
            Bell
        },
        methods:{
            handleSelect(index,indexPath){
                if(index==1){
                    this.$router.push('./psyHome')
                }else if(index==2){
                    this.$router.push('./psyTest')
                }else if(index==3){
                    this.$router.push('./psyConsult')
                }else if(index==4){
                    this.$router.push('./psyAsk')
                }else if(index==5){
                    this.$router.push('./psyTeam')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .common-layout {
        .w {
            width: 70%;
            margin: 0 auto;

            img {
                height: 58px;
            }
            .name {
                height: 58px;
                line-height: 58px;
                margin-left: 10px;
                color: #32BDFE;
                font-size: 20px;
                font-weight: 800;
            }
            .el-icon{
                height: 58px;
                line-height: 58px;
                width: 20px;

            }
        }
        .el-main{
            padding: 0;
        }

        .el-button {
            margin-top: 15%;
        }
        .el-footer{
            margin-top: 50px;
            .plan {
                font-size: 20px;
                color: #222222;
            }

            .littleText {
                font-size: 16px;
                color: #999999;
            }
        }
    }

    .flex-grow {
        flex-grow: 0.5;
    }
</style>
