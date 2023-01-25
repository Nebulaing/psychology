<template>
    <div class="title">{{name}}</div>
</template>

<script>
    import {computed} from 'vue';
    export default {
        name: "title",
        props:{
            name:String
        },
        setup(props){//提供的函数props直接用就完事了嗷~~~
            const str = computed(()=>{
                return '父组件值为：'+ props.name
            })
            return{
                str
            }
        }
    }
</script>

<style scoped>
    .title{
        color: #32BDFE;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
    }
</style>
