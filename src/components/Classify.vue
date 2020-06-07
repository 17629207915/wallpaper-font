<template>
    <div>
        <div class='search'>
            <el-input placeholder="请输入内容" v-model="searchContent" @keyup.enter.native="search">
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
        </div>
        <div class='selective'>
            <div class='sort-type'>
                <div class='item-class'>顺序</div>
                <div class='inline-content'>
                    <div @click="changeSortActive(index)" v-for="(item, index) in sortList" :key="index">
                        <span :class='{"classify-active":index==sortActiveIndex}'>{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class='select-type'>
                <div class='item-class'>分类</div>
                <div class='inline-content'>
                    <div @click="changeSelectActive(index)" v-for="(item, index) in classifyList" :key="index">
                        <span :class='{"classify-active":selectActiveIndexs.indexOf(index)!= -1}'>{{item.classifyName}}</span>
                    </div>
                </div>
            </div>
            <div class='ratio-type'>
                <div class='item-class'>分辨率</div>
                <div class='inline-content'>
                    <div @click="changeRatioActive(index)" v-for="(item, index) in resolutionList" :key="index">
                        <span :class='{"classify-active":ratioActiveIndexs.indexOf(index)!= -1}'>{{item.value}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"><el-divider></el-divider></div>

    </div>
</template>

<script>
export default {
    name: "Classify",
    data() {
        return {
            searchContent:"",
            sortActiveIndex: 0,
            selectActiveIndexs: [],
            ratioActiveIndexs: [],
            sortList: [
                {
                    name: "默认排序"
                },
                {
                    name: "最近上传"
                },
                {
                    name: "最多观阅"
                },
                {
                    name: "最多下载"
                }
            ],
            classifyList: [
                {
                    classifyName: "动物"
                },
                {
                    classifyName: "动漫"
                },
                {
                    classifyName: "卡通"
                },
                {
                    classifyName: "网络朋克"
                },
                {
                    classifyName: "游戏"
                },
                {
                    classifyName: "风景"
                },
                {
                    classifyName: "音乐"
                },
                {
                    classifyName: "自然"
                },
                {
                    classifyName: "复古"
                },
                {
                    classifyName: "科技"
                },
                {
                    classifyName: "运动"
                },
                {
                    classifyName: "男性"
                },
                {
                    classifyName: "女性"
                },

            ],
            resolutionList:[
                {
                    value:"3840*2160"
                },
                {
                    value:"3840*1600"
                },
                {
                    value:"3440*1440"
                },
                {
                    value:"2560*1600"
                },
                {
                    value:"2560*1440"
                },
                {
                    value:"2560*1080"
                },
                {
                    value:"1920*1440"
                },
                {
                    value:"1920*1200"
                },
                {
                    value:"1600*1200"
                },
                {
                    value:"1600*1000"
                },
                {
                    value:"1600*900"
                },
                {
                    value:"1440*900"
                },
                {
                    value:"1366x768"
                },
                {
                    value:"1280x800"
                }
            ]
        }
    },
    methods:{
        changeSortActive(index){
            this.sortActiveIndex = index;
            // console.log("sortActiveIndex:"+this.sortActiveIndex);

        },
        changeSelectActive(index) {
            var selectIndex = this.selectActiveIndexs.indexOf(index);
            if(selectIndex == -1){
                this.selectActiveIndexs.push(index);
            } else {
                this.selectActiveIndexs.splice(selectIndex, 1);
            }
        },
        changeRatioActive(index) {
            var ratioIndex = this.ratioActiveIndexs.indexOf(index);
            if(ratioIndex == -1){
                this.ratioActiveIndexs.push(index);
            } else {
                this.ratioActiveIndexs.splice(ratioIndex, 1);
            }
        },
        search(){
            
            alert("搜索关键词:"+this.searchContent);
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
    .selective {
        width: 60%;
        height: auto;
        margin-left: 20%;
        margin-top: 50px;
        min-height: 64px;
    }

    .item-class{
        float: left;
        width: 10%;
        text-align: right;
    }

    .selective>div{
        margin-top: 20px;
        height: auto;
        min-height: 21px;
        overflow:auto
    }

    .select-type, .ratio-type {
        margin-top: 20px;
    }

    .inline-content {
        float: right;
        width: 90%;
        
    }

    .inline-content>div {
        margin-left: 3%;
        width: auto;
        float: left;
        cursor: pointer;
        color: cornflowerblue;
    }
     
    .inline-content>div:hover {
        color: darkcyan;
    }

    .classify-active {
        color: darkcyan;
    }
</style>