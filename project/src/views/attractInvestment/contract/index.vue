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
      }, ],
      page1: 1,
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
.contract /deep/ .el-table__row>td{
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
  background-color:rgba(158,162,192,.05);
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
</style>