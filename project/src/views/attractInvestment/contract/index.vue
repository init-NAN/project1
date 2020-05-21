<template>
  <div class="contract">
    <el-table :data="tableData"
              resizable
              stripe
              ref="table">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
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
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
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

</style>