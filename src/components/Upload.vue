<template>
    <div>
        <el-form class="upload-form">
            <el-form-item label="类别">
                <el-autocomplete
                    class="inline-input"
                    v-model="selectClassify"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    :trigger-on-focus="false"></el-autocomplete>
            </el-form-item>
            <el-form-item label="图片" prop="picture">
                <el-upload
                    class="upload-demo"
                    drag
                    :limit=1
                    :on-exceed="limitHandle"
                    :auto-upload="false"
                    :on-change="handleChange"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                <i class="el-icon-upload">
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>(仅限jpg/png文件)</div>
                </i>
            </el-upload>
            </el-form-item>
            
        </el-form>
        
    </div>
</template>
<script>
export default {
    name: "Upload",
    data() {
        return {
            selectClassify: "",
            classifys:[
                {
                    value: "动物"
                },
                {
                    value: "动漫"
                },
                {
                    value: "游漫"
                },
                {
                    value: "卡通"
                },
                {
                    value: "网络朋克"
                },
                {
                    value: "游戏"
                },
                {
                    value: "风景"
                },
                {
                    value: "音乐"
                },
                {
                    value: "自然"
                },
                {
                    value: "复古"
                },
                {
                    value: "科技"
                },
                {
                    value: "运动"
                },
                {
                    value: "男性"
                },
                {
                    value: "女性"
                },
            ]
        }
    },
    methods:{
        querySearch(queryString, cb) {
            var classifys = this.classifys;
            var result = this.filtClassify(queryString, classifys);
            // 调用 callback 返回建议列表的数据
            cb(result);
        },
        filtClassify(queryString, classifys) {
            var result = new Array();
            for(var i=0;i<classifys.length;i++){
                if(classifys[i].value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1) {
                    var tmp = classifys[i];
                    result.push(tmp);
                    console.log(tmp);
                }
            }
            return result;
        },
        handleChange(file) {
            let fileSize = file.size / 1024 / 1024;
            fileSize = Math.floor(fileSize * 1000) / 1000
            console.log("fileSize:"+fileSize);
        },
        limitHandle(){
            alert("上传文件超过限制")
        }
    }
}
</script>
<style>
    .upload-form{
        width: 48%;
        margin-left: 26%;
        margin-top: 80px;
        height: auto;
    }
</style>