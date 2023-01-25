<template>
    <div class="psyHome">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in lunPic" :key="item">
                <img class="img" :src="item.url" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="content w">
            <img class="img" src="@/assets/img/pic2.png" alt="">
            <!--        团体测试方案-->
            <!--            <title :name="name"></title>-->
            <div class="title">--oo--{{name}}--oo--</div>
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in planData">
                    <div class="grid-content ep-bg-purple"/>
                    <div class="plan">{{item.plan}}</div>
                    <div class="littleText">
                        <p>{{item.test}}</p>
                        <p>{{item.test}}</p>
                        <p>{{item.test}}</p>
                    </div>
                </el-col>
            </el-row>

            <!--        推荐测试表-->
            <div class="title">--oo--精选资讯--oo--</div>
            <el-scrollbar height="500px">
                <el-row v-for="item in newsData" >
                    <el-col :span="6">
                        <img :src="item.url" alt="">
                    </el-col>
                    <el-col :span="18" style="text-align: left">
                        <h4>{{item.title}}</h4>
                        <p class="littleText">{{item.text}}
                        </p>
                    </el-col>
                </el-row>
            </el-scrollbar>
        </div>
<!--        企业介绍-->
        <div class="company" style="color: #b8c1e9">
            <div class="w">

            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import title from '@/components/title.vue';

    export default {
        name: "psyHome.vue",
        components: {
            title,
        },
        data() {
            return {
                lunPic: [
                    {url: require("@/assets/img/pic.png")},
                    {url: require("@/assets/img/pic.png")},
                    {url: require("@/assets/img/pic.png")},
                    {url: require("@/assets/img/pic.png")},
                ],
                planData: [
                    {
                        plan: '学生健康测试计划',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表'
                    },
                    {
                        plan: '老师健康测试计划',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表'
                    },
                    {
                        plan: '公益协会测试计划',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表'
                    },
                    {
                        plan: '心理健康测试计划',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表',
                        test: 'xxxxxx量表'
                    }
                ],
                newsData:[
                    {
                        url: require("@/assets/img/img3.png"),
                        title:'看你什么情况下最紧张',
                        text:'紧张对于每个人而言都是一种正常的情绪，内容内容内容内容内容内容内容内容内容内容紧张对于每个人而言都是一种正常的情绪，紧张对于每个人而言都是一种正常的情绪。最多三年行'
                    },
                    {
                        url: require("@/assets/img/img3.png"),
                        title:'看你什么情况下最紧张',
                        text:'紧张对于每个人而言都是一种正常的情绪，内容内容内容内容内容内容内容内容内容内容紧张对于每个人而言都是一种正常的情绪，紧张对于每个人而言都是一种正常的情绪。最多三年行'
                    },
                    {
                        url: require("@/assets/img/img3.png"),
                        title:'看你什么情况下最紧张',
                        text:'紧张对于每个人而言都是一种正常的情绪，内容内容内容内容内容内容内容内容内容内容紧张对于每个人而言都是一种正常的情绪，紧张对于每个人而言都是一种正常的情绪。最多三年行'
                    },
                    {
                        url: require("@/assets/img/img3.png"),
                        title:'看你什么情况下最紧张',
                        text:'紧张对于每个人而言都是一种正常的情绪，内容内容内容内容内容内容内容内容内容内容紧张对于每个人而言都是一种正常的情绪，紧张对于每个人而言都是一种正常的情绪。最多三年行'
                    },
                    {
                        url: require("@/assets/img/img3.png"),
                        title:'看你什么情况下最紧张',
                        text:'紧张对于每个人而言都是一种正常的情绪，内容内容内容内容内容内容内容内容内容内容紧张对于每个人而言都是一种正常的情绪，紧张对于每个人而言都是一种正常的情绪。最多三年行'
                    }
                ]
            }
        },
        setup() {
            const name = ref('团体测试方案')
            return {
                name
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/Global.css";

    .content {
        .img {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
        }

        .title {
            color: #32BDFE;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
        }
    }
    .scrollbar-demo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }


</style>
