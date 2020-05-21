<template>
  <div class="login">
    <div class="center-bar">
      <div class="login-logo">
        <div class="logo-nav">
          <img src="./images/logo.png" alt class="logo" />
          <div class="content">
            <p class="name-chinese">百川智慧园区</p>
            <p class="name-english">Baichuan Wisdom Park</p>
          </div>
        </div>
        <img src="./images/nav.png" alt class="nav-underline" />
      </div>
      <div class="login-wrap">
        <h2>账号登录</h2>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号" class="login-form"></el-input>
          </el-form-item>
          <el-form-item class="code-bar clearfix" prop="code">
            <el-input v-model="form.code" placeholder="请输入验证码" class="login-form"></el-input>
            <el-button :disabled="isDisabled" class="login-button" @click="getCode()">{{ btnText}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="loding" @click="doLogin('form')" :loading="isLoding">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "@/http/login.js";
export default {
  data() {
    return {
      form: {
        mobile: "",
        code: ""
      },
      rules: {
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: "0?(13|14|15|18|17)[0-9]{9}",
            message: "请输入正确的手机号",
            trigger: "blur"
          }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { len: 6, message: "验证码必须为6位", trigger: "blur" }
        ]
      },
      isDisabled: false,
      btnText: "获取验证码",
      isLoding: false
    };
  },
  methods: {
    doLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isLoding = true;
          //   login(this.form)
          //   .then(res => {
          //     this.$message.success("登录成功");
          //     this.$router.push("/attractInvestment");
          //     window.console.log(res);
          //   })
          //   .catch(error => {
          //     window.console.log(error);
          //     this.$message.error("手机号或验证码错误");
          //     this.isLoding = false;
          //   });
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    getCode() {
      this.isDisabled = true;
      this.btnText = "还有60秒";
      let sec = 60;
      let timerID = setInterval(() => {
        sec--;
        this.btnText = "还有" + sec + "秒";
        if (sec == 0) {
          this.btnText = "获取验证码";
          clearInterval(timerID);
          this.isDisabled = false;
        }
      }, 1000);
    }
  }
};
</script>

<style lang='less' scope>
.login {
  background: url("./images/bg03.png") no-repeat center / cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */
    color: #bdc1e0;
    font-size: 16px;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    color: #bdc1e0;
    font-size: 16px;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ 适配火狐 */
    color: #bdc1e0;
    font-size: 16px;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    color: #bdc1e0;
    font-size: 16px;
  }

  .login-logo {
    text-align: center;
    .logo-nav {
      .logo {
        display: inline-block;
        width: 48px;
        height: 48px;
      }
      .content {
        display: inline-block;
        .name-chinese {
          font-size: 30px;
          font-family: HYe3gj;
          color: #fff;
          line-height: 30px;
        }
        .name-english {
          font-size: 19px;
          font-family: HYg2gj;
          color: #fff;
          line-height: 19px;
        }
      }
    }
    .nav-underline {
      margin: 0 auto;
      width: 597px;
      margin-top: -30px;
    }
  }
  .login-wrap {
    margin: 0 auto;
    width: 420px;
    // height: 386px;
    background: rgba(10, 18, 31, 1);
    border-radius: 2px;
    opacity: 0.75;
    padding: 30px 35px;

    h2 {
      color: #bdc1e0;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      text-align: center;
      margin-bottom: 58px;
    }

    .code-bar {
      .login-form {
        float: left;
        width: 65%;
      }
      .login-button {
        float: right;
        width: 30%;
      }
    }
    /deep/ .el-input__inner {
      background-color: #0a121f;
      border: none;
      border-bottom: 1px solid #9ea2c0;
      color: #fff;
    }
    .code-bar {
      margin-bottom: 100px;
      /deep/ .el-button {
        padding: 12px 0;
        border-radius: 10px;
        border: 1px solid rgba(113, 188, 255, 1);
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(113, 188, 255, 1);
        background: rgba(10, 18, 31, 1);
        font-size: 16px;
        &:hover {
          background-color: #fff;
        }
      }
    }
    /deep/.loding {
      width: 100%;
      height: 44px;
      padding: 12px 10px;
      //   background: #52a0fd;
      //   background: -webkit-linear-gradient(
      //     left,
      //     #3669DA 0%,
      //     #7F60F7 87%,
      //     #57C8FF 100%
      //   );
      background: linear-gradient(
        323deg,
        #3669da 0%,
        #7f60f7 87%,
        #57c8ff 100%
      );
      border-radius: 2px;
      border: none;

      outline: none;
      color: #fff;
      font-size: 16px;
      &:active {
        opacity: 0.9;
      }
    }
  }
}
</style>
