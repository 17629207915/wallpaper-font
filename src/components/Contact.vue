<template>
    <div>
        <el-form v-model="contactInfo" status-icon class="contact-form">
            <el-form-item label="昵称" label-width="80px" prop="nikname">
                <el-input type="text" clearable maxlength="16" v-model="contactInfo.nikname" placeholder="请填写您的昵称" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" label-width="80px" prop="contactWay">
                <el-input type="text" clearable maxlength="20" v-model="contactInfo.contactWay" placeholder="请填写您的联系方式(不限于手机号码、邮箱等)" autocomplete="off" required></el-input>
            </el-form-item>
            <el-form-item label="问题" label-width="80px" prop="problem">
                <el-input type="textarea" :rows="5" clearable maxlength="300" placeholder="请描述您遇到的问题,最多400字" v-model="contactInfo.problem"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class='btn-sub' type="primary" @click="submitForm('contactInfo')">提交</el-button>
                <el-button class="btn-reset" @click="resetForm('contactInfo')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: "Contact",
    data() {
        return {
            contactInfo:{
                nikname:"",
                contactWay:"",
                problem:""
            }
        }
    },
    methods:{
        submitForm(){

        },
        resetForm(){

        }
    }
}
</script>
<style>
    .contact-form{
        width: 36%;
        margin-left: 32%;
        margin-top: 80px;
        height: auto;
    }

    .btn-sub{
        margin-left: 64%;
    }
</style>