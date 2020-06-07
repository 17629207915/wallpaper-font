<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in historys" :key="index" size="large" :timestamp="item.time" placement="top">
                <el-card>
                    <img :src="item.url" @click="toDetail(item.seq)"/>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<script>
export default {
    name: "Mine",
    data(){
        return{
            historys:[
                {
                    seq:1,
                    time:"2020/4/3",
                    url:require("../assets/1.jpg")
                },
                {
                    seq:2,
                    time:"2020/2/19",
                    url:require("../assets/2.jpg")
                },
                {
                    seq:3,
                    time:"2019/12/22",
                    url:require("../assets/3.jpg")
                },
                {
                    seq:4,
                    time:"2018/4/3",
                    url:require("../assets/4.jpg")
                },
            ]
        }
    },
    methods:{

        
        toDetail(seq){
            console.log("seq:" + seq)
            let routeUrl = this.$router.resolve({
                path: "/Detail",
                query: {seq:seq}
            });
            window.open(routeUrl.href, '_blank');
        }
    }
}
</script>
<style>
    .block{
        width: 40%;
        margin-top: 80px;
        margin-left: 30%;
    }
    img{
        height: auto;
    }
</style>