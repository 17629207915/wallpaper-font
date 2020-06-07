<template>
    <div>
        <el-menu class="wrap" background-color="#000000" :default-active="activeIndex" mode="horizontal" active-text-color="#ffffff" @select="handleSelect">
            <el-menu-item index="1"  @click="dispatch('/Wrap/Home')"><span>首页</span></el-menu-item>
            <el-menu-item index="2" @click="dispatch('/Wrap/Classify')"><span>分类</span></el-menu-item>
            <el-menu-item index="3" @click="dispatch('/Wrap/Upload')"><span>上传</span></el-menu-item>
            <el-menu-item index="4" @click="dispatch('/Wrap/Contact')"><span>联系我们</span></el-menu-item>
            <el-menu-item index="5" @click="dispatch('/Wrap/Mine')"><span>我的</span></el-menu-item>
            <el-menu-item>
              <el-avatar :size="40" @error="errorHandler">
                <img src="../assets/2.jpg"/>
              </el-avatar>
            </el-menu-item>
            
        </el-menu>
        <router-view></router-view>

    </div>

</template>

<script>
import Home from "./Home";
import Classify from "./Classify";
import Upload from "./Upload";
import Contact from "./Contact";
import Mine from "./Mine";
export default {
    name: "Wrap",
    components: {
      Home,
      Classify,
      Upload,
      Contact,
      Mine
    },
    data() {
      return {
        $router: "/Wrap/Home",
        activeIndex: '1',
      };
    },
    mounted:function(){
      this.dispatch("/Wrap/Home");
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      dispatch(path) {
          this.$router.replace(path);
      },
      errorHandler() {
        return true
      }
    }
}
</script>

<style>
  .wrap {
      width: 84%;
      padding-left: 16%;
      padding-top: 20px;
      background-color: #000000;
  }
  .el-menu-item {
    width: 16%;
    height: 36px;
    text-align: center;
    
  }
  .el-menu-item.is-active {
    background-color: #000000
  }
  .person {
    float: left;
    width:40px;
    height: 40px;
    background-color: yellow;
  }
</style>