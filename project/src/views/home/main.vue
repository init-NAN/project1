<template>
  <div class="home-main">
    <el-container class="content">
      <el-header class="top-nav"
                 height="130px">
        <img src="@/assets/comment/logo(1).png"
             alt />
      </el-header>
      <el-container>
        <el-aside width="148px"
                  class="aside">
          <el-menu default-active="2"
                   router
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   background-color="transparent"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="/resources">
              <i class="el-icon-help"></i>
              <span slot="title">招商详情</span>
            </el-menu-item>
            <el-menu-item index="/customer">
              <i class="el-icon-data-analysis"></i>
              <span slot="title">客户管理</span>
            </el-menu-item>
            <el-menu-item index="/contract">
              <i class="el-icon-s-data"></i>
              <span slot="title">物业详情</span>
            </el-menu-item>
            <el-menu-item index="/contractTemplate">
              <i class="el-icon-video-play"></i>
              <span slot="title">物业报修</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    changeTitle (text) {
      this.contentTitle2 = text;

      // this.contentTitle2 = this.realtions[index].text
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }


  }
};
</script>

<style lang="less" scope>
.home-main {
  height: 100%;
  width: 100%;
  .content {
    height: 100%;
    background: url("../../assets/comment/nav.png");
    background-size: 1920px 240px;
    background-repeat: no-repeat;
    .top-nav {
      img {
        margin-top: 24px;
        width: 306px;
        height: 38px;
      }
    }
    .aside {
      background-color: rgba(10, 13, 51, 0.7);
      margin-right: 19px;
      /deep/ .el-menu {
        border: none;
      }
      /deep/ .el-menu-item {
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        line-height: 20px;
        [class^=el-icon-] {
          margin: 0;
          margin-bottom: 10px;
        }
      }
      aside {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 140px;

        .aside-items {
          text-align: center;
          p {
            margin-top: 5px;
            display: block;
            color: #fff;
          }
        }
      }
    }
    .main {
      .content-title {
        padding-left: 31px;
        padding-right: 31px;
        padding-bottom: 20px;
        width: 100%;
        background: url("../../assets/comment/path.png") no-repeat;
        background-color: rgba(10, 13, 51, 0.7);
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 56px;

        /deep/ .el-menu--horizontal {
          background-color: transparent !important;
        }
        /deep/ .el-menu-item {
          background-color: transparent !important;
        }
        /deep/ .el-menu.el-menu--horizontal {
          border: transparent;
        }
        /deep/ .is-active {
          border-image: -webkit-linear-gradient(red, blue) 30 30;
          border-image: -moz-linear-gradient(red, blue) 30 30;
          border-image: linear-gradient(red, blue) 30 30;
        }
      }
      .second-content {
        margin-top: 15px;
        background: url("../../assets/comment/type.png") no-repeat;
        background-color: rgba(10, 13, 51, 0.7);
        // height: 200px;
        padding: 0 31px;

        .content2-title {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
        }
      }
    }
  }
}
</style>