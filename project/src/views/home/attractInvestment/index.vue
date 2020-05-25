<template>
  <div class="attractInvestment">
    <div class="content-title">
      <p>{{contentTitle}}</p>
      <el-menu default-active="/resources"
               router
               mode="horizontal"
               text-color="#999999"
               color="#144a9e"
               active-text-color="#ffffff">
        <el-menu-item :index="items.src"
                      v-for="(items,index) in relations"
                      :key='index'
                      @click="changeTitle(items.text)">{{items.text}}</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
    <div class="second-content">
      <p class="content2-title">{{contentTitle2}}</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentTitle: '招商',
      contentTitle2: '资源',
      relations: [
        { text: '资源', id: 'program', src: '/resources' },
        { text: '合同', id: 'person', src: '/contract' },
        { text: '客户', id: 'organization', src: '/customer' },
        { text: '合同模板', id: 'tech', src: '/contractTemplate' },
      ],
      nowIndex: 0
    }
  },
  methods: {
    changeTitle (text) {
      this.contentTitle2 = text;

      // this.contentTitle2 = this.realtions[index].text
    }
    

  }
};
</script>

<style lang="less" scope>
.attractInvestment {
  height: 100%;
  width: 100%;

    .content-title {
      padding-left: 31px;
      padding-right: 31px;
      padding-bottom: 20px;
      width: 100%;
      background: url("../../../assets/comment/path.png") no-repeat;
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
      background: url("../../../assets/comment/type.png") no-repeat;
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
</style>