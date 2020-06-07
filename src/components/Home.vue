<template>
    <div>
        <div class='search'>
             <el-input placeholder="请输入内容" v-model="searchContent">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="classify">
            <div v-for="(item, index) in recommendList" :key="index"><span>{{item}}</span></div>
        </div>
        <div class="divider"><el-divider></el-divider></div>
        <el-row class="popular" :gutter="20">
            <el-col :span="6"><div><img src="../assets/1.jpg"/></div></el-col>
            <el-col :span="6"><div><img src="../assets/2.jpg"/></div></el-col>
            <el-col :span="6"><div><img src="../assets/3.jpg"/></div></el-col>
            <el-col :span="6"><div><img src="../assets/4.jpg"/></div></el-col>
        </el-row>
        
        <div v-show="hasLogin">
            <div class="divider"><el-divider></el-divider></div>
            <div class="account-cue">什么？没有想要的？<el-button type=text @click="registTableVisible = true">注册</el-button>一个新的账号或者<a href="#">登录</a>更精彩......</div>
        </div>
        <el-row class="popular" :gutter="15">
            <el-col :span="6" v-for="(item, index) in this.imgList" :key="index"><div><img :src="item.url"/></div></el-col>
        </el-row>
        <div class="divider"><el-divider></el-divider></div>
        <p slot="append" style="text-align:center; line-height:50px;"><a href="javascript:;"  @click="getMData()">点击加载更多</a></p>


        <el-dialog title="注册" width="30%" :visible.sync="registTableVisible">
            <el-form :model="registForm">
                <el-form-item label="邮箱">
                    <el-input type="text" v-model="registForm.mail" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="registForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="registTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="registTableVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                registTableVisible: false,
                searchContent: '',
                hasLogin: true,
                registForm:{
                    mail:"",
                    password:""
                },
                recommendList: ["#英雄联盟","#名侦探柯南","#海贼王","#火影忍者","#罗小黑战记","#王者荣耀","#紫罗兰永恒花园","#狐妖小红娘","#言叶之庭","#秒速五厘米","#你的名字","#境界的彼方","#尼尔","#西行纪","#狐妖小红娘","#言叶之庭","#秒速五厘米","#你的名字","#境界的彼方","#尼尔","#西行纪","#哈尔的移动城堡"],
                imgList: [
                    {
                        id: 1,
                        url: require("../assets/1.jpg"),
                    },
                    {
                        id: 2,
                        url: require("../assets/2.jpg"),
                    },
                    {
                        id: 3,
                        url: require("../assets/3.jpg"),
                    },
                    {
                        id: 4,
                        url: require("../assets/4.jpg"),
                    },
                    {
                        id: 5,
                        url: require("../assets/1.jpg"),
                    },
                    {
                        id: 6,
                        url: require("../assets/2.jpg"),
                    },
                    {
                        id: 7,
                        url: require("../assets/3.jpg"),
                    },
                    {
                        id: 8,
                        url: require("../assets/4.jpg"),
                    },
                    {
                        id: 9,
                        url: require("../assets/1.jpg"),
                    },
                    {
                        id: 10,
                        url: require("../assets/2.jpg"),
                    },
                    {
                        id: 11,
                        url: require("../assets/3.jpg"),
                    },
                    {
                        id: 12,
                        url: require("../assets/4.jpg"),
                    },
                    {
                        id: 13,
                        url: require("../assets/1.jpg"),
                    },
                    {
                        id: 14,
                        url: require("../assets/2.jpg"),
                    },
                    {
                        id: 15,
                        url: require("../assets/3.jpg"),
                    },
                    {
                        id: 16,
                        url: require("../assets/4.jpg"),
                    }
                ]
            }
        },

        methods:{
            getMData(){
                for(var i=1;i<=4;i++) {
                    var more = {
                        'id': 16,
                        'url': require("../assets/"+i+".jpg"),
                    };
                    this.imgList.push(more);
                }
                
            }
        }
    }
</script>

<style>
    .search {
        width: 40%;
        margin-top: 50px;
        margin-left: 30%;
    }
    .classify {
        flex-wrap: flex;
        margin-top: 30px;
        margin-left: 15%;
        margin-right: 15%;
    }
    .classify>div {
        display:inline-block;
        margin-left: 15px;
        cursor: pointer;
        font-size: 18px;
    }
    .classify>div:hover {
        color: blue
    }
    .divider {
        margin-top: 30px
    }

    .popular {
        width: 98%;
        padding-left: 10%;
        flex-wrap: flex;
    }
    .popular>div{
        width: 307px;
        height: 173px;
        margin-top: 30px
    }
    img {
        width: 100%;
        height: 173px;
    }
    .account-cue {
        padding-left: 32%;
        font-size: 18px;
    }
</style>