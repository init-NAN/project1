<template>
  <div class="contract">
    <el-table :data="tableData"
              resizable
              stripe
              ref="table">
      <el-table-column prop="date"
                       label="管理区"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="合同编号"
                       width="120">
      </el-table-column>
      <el-table-column prop="address"
                       label="合同名称"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="租户姓名"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="资源代码"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="收费标准"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="收费标准"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="费用应收日期"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="费用周期"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="应收金额"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="已缴金额"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="退款金额"
                       width="120">
      </el-table-column>
      <el-table-column prop="name"
                       label="欠费金额"
                       width="120">
      </el-table-column>
    </el-table>
    <div class="pager-box">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="page1"
                     :page-size="100"
                     :page-sizes="[100, 200, 300, 400]"
                     layout="prev, pager, next"
                     :total="400">
      </el-pagination>
    </div>
    <el-dialog title="新建合同"
               :visible.sync="dialogFormVisible">
      <div class="flex-space-between____c">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>合同基本信息</span>
          </div>
          <el-form :model="form"
                   :rules="rules"
                   hide-required-asterisk
                   ref="form">
            <el-row :gutter="30">
              <el-col :span="11">
                <el-form-item label="管理区:">
                  <el-input v-model="form.name"
                            autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="租户:">
                  <el-select v-model="form.region">
                    <el-option label="餐饮"
                               value="shanghai"
                               selected></el-option>
                    <el-option label="IT"
                               value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="11">
                <el-form-item label="合同编号:">
                  <el-input v-model="form.name"
                            autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="合同名称:">
                  <el-input v-model="form.name"
                            autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="11">
                <el-form-item label="合同起始时间:">
                  <el-date-picker type="date"
                                  placeholder="选择时间"
                                  v-model="form.date1"
                                  style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="合同结束时间:">
                  <el-date-picker type="date"
                                  placeholder="选择时间"
                                  v-model="form.date2"
                                  style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="22">
                <el-form-item label="备注:">
                  <el-input type="textarea"
                            v-model="form.desc"
                            placeholder="请输入备注"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="22">
                <el-form-item label="附件:">
                  <el-upload ref="upload"
                             :show-upload-list="false"
                             :default-file-list="defaultList"
                             :on-success="handleSuccess"
                             :on-error="handleError"
                             :format="['xlsx','xls']"
                             :max-size="fileSize"
                             :on-format-error="handleFormatError"
                             :on-exceeded-size="handleMaxSize"
                             :before-upload="handleBeforeUpload"
                             action="//jsonplaceholder.typicode.com/posts/"
                             style="display: inline-block;width:58px;">
                    <el-button type="primary"
                               class="del-btn">上传文件</el-button>
                  </el-upload>
                </el-form-item>

              </el-col>
            </el-row>
          </el-form>
        </el-card>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>租赁房产信息</span>
          </div>
          <el-button class="addChose">+添加</el-button>

        </el-card>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary"
               class="add-contract"
               @click="dialogFormVisible=true">新建合同</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },],
      page1: 1,
      dialogFormVisible: false,
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
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
      //shangchuan
      fileName: '',
      fileTemArr: ['购买明细表', '索赔记录表'],
      fileSize: 10,
      defaultList: [],
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    handleSizeChange (val) {
      window.console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      window.console.log(`当前页: ${val}`);
    },
    //shangchuan
    handleSuccess (res, file) {
      if (res.errcode === 0) {
        window.console.log(file)
        this.$Message.success("数据导入成功！")
        this.$refs.upload.clearFiles()
      }
    },
    handleError (error, file) {
      this.$Message.error("数据导入失败！")
      window.console.log(error)
      window.console.log(file)
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件 ' + file.name + ' 格式不正确，请上传.xls,.xlsx文件。'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '文件大小错误',
        desc: 'File  ' + file.name + ' 文件大小不得超过' + this.fileSize + 'M'
      });
    },
    pro (file) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$Notice.warning({
            title: '文件名称错误',
            desc: 'File  ' + file.name
          });
          reject(new Error('err'))
        }, 100)
      })
    },
    //阻止上传//上传前判断用户选择的模板与实际上传的模板是否相同（文件名判断）
    handleBeforeUpload (file) {
      let name = '';
      if (file.name) {
        // name = file.name.replace(/\s/g,"").split('.')[0]
        name = file.name.split('.')[0]
        alert(name)
        if (name !== this.fileName) {
          return this.pro(file)
        }
      }
    }
  }
}

</script>

<style lang="less">
.el-table {
  /* 表格字体颜色 */
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(158, 162, 192, 1);
  line-height: 18px;
  /* 表格边框颜色 */
  /* border: 0.5px solid #758a99; */
}
.contract /deep/ .el-table__row > td {
  /* 去除表格线 */
  border: none;
}
.contract /deep/ .el-table th.is-leaf {
  /* 去除上边框 */
  border: none;
}
.el-table th {
  background-color: transparent;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 18px;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(0, 0, 0, 0) !important;
}
.contract /deep/ .el-table--fit {
  padding: 20px;
}
.contract /deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}

.contract /deep/ .el-table tr {
  background-color: transparent !important;
}
.contract /deep/ .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: transparent;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: rgba(158, 162, 192, 0.05);
}
// fenye
.pager-box {
  text-align: right;
}
.pager-box /deep/ button,
.pager-box /deep/ .el-pager li {
  background-color: transparent !important;
}
.pager-box
  /deep/
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #0ffff3 !important;
}
.pager-box /deep/.el-pagination {
  color: rgba(255, 255, 255, 0.65);
}
.pager-box /deep/.el-pagination button:disabled {
  color: rgba(0, 0, 0, 0.35);
}
.pager-box /deep/ .el-pager {
  color: rgba(255, 255, 255, 0.65);
}

.contract {
  position: relative;
  .flex-space-between____c {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-card {
      width: 570px;
      height: 704px;

      .addChose {
        width: 100%;
      }

      .digo-list-title {
        margin-top: 25px;
      }
    }
    .el-select {
      width: 100%;
    }
    /deep/ .el-card__header {
      border: none;
      color: #fff;
    }
    /deep/ .el-card {
      background-color: rgba(0, 0, 0, 0.3);
      border: none;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 16px;
      .el-form {
        .el-form-item__label {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  //dialog 页眉页脚
  /deep/ .el-dialog__header {
    background: url("../../../../assets/comment/type(1).png") no-repeat;
    padding: 10px 20px 10px;
  }
  /deep/ .el-dialog__footer {
    background: url("../../../../assets/comment/type(2).png") no-repeat right;
    padding: 50px 20px 20px;
  }
  .add-contract {
    position: absolute;
    top: -20px;
    right: 0;
  }
}
//模态框
.el-dialog {
  margin-top: 0;
  background-color: rgba(10, 13, 51, 0.7);
  color: #fff;
  width: 1200px;
  transform-origin: 1281px 246px;
  .el-dialog__title {
    color: #fff;
  }
  /deep/ .el-input__inner,
  .el-textarea__inner {
    background-color: transparent;
    border: 1px solid rgba(158, 162, 192, 1);
    color: #fff;
  }
}
</style>