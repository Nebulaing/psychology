<template>
    <view>
        <div class="content w" style="display: inline-flex">
            <el-tabs tab-position="left" class="demo-tabs">
                <el-tab-pane class="tabs" label="推荐"></el-tab-pane>
                <el-tab-pane class="tabs" label="性格情绪"></el-tab-pane>
                <el-tab-pane class="tabs" label="亲子教育"></el-tab-pane>
                <el-tab-pane class="tabs" label="人际社交"></el-tab-pane>
                <el-tab-pane class="tabs" label="婚姻情感"></el-tab-pane>
            </el-tabs>

            <el-card class="test" scrollbar>
                <el-scrollbar height="770px">
                    <el-list-item v-for="item in testData">
                        <el-row @click="watchTest">
                            <el-col :span="18" style="text-align: left">
                                <h4>{{item.title}}</h4>
                                <p class="plan">{{item.content}}</p>
                                <el-row>
                                    <el-col :span="4">
                                        <p class="littleText">{{item.commentNum}}人已评价</p>
                                    </el-col>
                                    <el-col :span="17">
                                        <p class="littleText">{{item.peopleNum}}人已测试</p>
                                    </el-col>
                                    <el-col :span="1">
                                        <p class="littleText">4.3</p>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <img :src="item.url" alt="">
                            </el-col>
                        </el-row>
                    </el-list-item>
                </el-scrollbar>
            </el-card>

            <el-dialog v-model="watchShow" center title="评定量表（专业级）" width="30%" height="50%">
                <el-row style="border-bottom: 1px solid #999999">
                    <el-col :span="15">
                        <p class="littleText">20道专业题</p>
                    </el-col>
                    <el-col :span="5">
                        <p class="littleText">35人已测试</p>
                    </el-col>
                </el-row>
                <el-row style="border-bottom: 1px solid #999999">
                    <h3>量表说明</h3>
                    <p class="littleText">《Wallace自我概念量表 (WSCS)》 是由美国密苏里大行
                        为学习系的Gaylen R Wallace于1980年完成。WSCS共
                        15个项目，是一个非常简单且十分有用的测量-般自我
                        概念的工具。中文版WACS由王才康和杨晓燕依据美国
                        1997年出版的《教育与社会科学测验与量表手册》一书
                        中的英文版翻译修订而成。量表反映了个体对自己行为
                        各个方面的一种全面的自我评价。得分越高，说明个体
                        对自己的评价越高;得分越低，说明个体对自己的评价
                        越低。
                    </p>
                    <ul>
                        <li class="littleText">
                            适用于15及以上人群
                        </li>
                    </ul>
                </el-row>
                <el-row style="height: 50px;line-height: 50px">
                    <el-col :span="14" class="price">
                        ￥9
                    </el-col>
                    <el-col :span="5">
                        <el-button @click="quit" i>关闭</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button @click="purchase">购买</el-button>
                    </el-col>
                </el-row>
            </el-dialog>

            <el-dialog v-model="buyShow" center title="购买须知" width="30%" height="50%">

                <p>①本测评为付费测试，测试时间需15-25分钟。</p>
                <p>②付费成功后可选择在线测试或手机扫码测试，建议在
                    网络较好的情况下测试。</p>
                <p>③购买的测评分析报告均永久保存在右上个人中心「我
                    的测评」中，进入或再次扫码即可继续答题或查看报告。</p>
                <p>④购买的测评不答题也不存在过期，此订单在用户答题
                    完提交后才算完结。</p>
                <el-button @click="determine">确定</el-button>
            </el-dialog>
        </div>
    </view>
</template>

<script>
    import page from "@/components/page.vue";

    export default {
        name: "psyTest",
        components: {
            page,
        },
        data() {
            return {
                testData: [
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '12',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    },
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '12',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    },
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '12',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    },
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '23',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    },
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '54',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    },
                    {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '23',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    }, {
                        title: '标题',
                        content: '内容详情',
                        peopleNum: '56',
                        commentNum: '45',
                        url: require("@/assets/img/img3.png"),
                    }
                ],
                currentPage4: 1,
                pageSize4: 10,
                watchShow: false,
                buyShow: false,
            }
        },
        methods: {
            pageChange(item) {
                this.currentPage4 = item.currentPage;
                this.pageSize4 = item.pageSize;
                console.log(`每页展示${this.pageSize4}条，当前为${this.currentPage4}页`);
                //   this.query(); //页面改变后通过query()方法向后台请求数据渲染页面
            },
            judge() {
                if (this.testData.length !== 0) return true
                else return false
            },
            watchTest() {
                this.watchShow = true
            },
            quit() {
                this.watchShow = false
            },
            purchase() {
                this.buyShow = true
                this.watchShow = false
            },
            determine(){
                this.buyShow = false
            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../../less/Global.css";

    .content {
        .demo-tabs {
            margin-top: 20px;
            height: 200px;

            .tabs {
                background-color: #32BDFE;
            }
        }

        .test {
            width: 90%;
            margin: 20px;
            height: 800px;

            img {
                margin-top: 1.33rem;
            }
        }

        .price {
            color: #32BDFE;
            font-size: 20px;
        }
    }

</style>
