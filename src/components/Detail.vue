<template>
    <div>图片详情页{{seq}}</div>
</template>
<script>
export default {
    name:"Detail",
    data(){
        return{
            seq:"",
        }
    },
    methods:{

    },
    mounted(){
        this.seq = this.$route.query.seq;
        console.log("seq:"+this.seq)
    }
}
</script>