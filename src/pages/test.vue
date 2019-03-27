<template>
    <div class="test">
        <input type="file" @change="importf(this)"
               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <!--单个表格-->
        <el-row>
            <el-col :span="24">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="日期"
                            width="120"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button></span>
        </el-dialog>
        <el-button plain @click="open2">
            不会自动关闭
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogVisible: false,
                index: 1,
            }
        },
        created() {

        },
        methods: {
            //一定要安装xlsx;导入表格
            importf(obj) {

                let _this = this;

                let inputDOM = this.$refs.inputer;

                // 通过DOM取文件数据

                this.file = event.currentTarget.files[0];

                var rABS = false; //是否将文件读取为二进制字符串

                var f = this.file;

                var reader = new FileReader();

                //if (!FileReader.prototype.readAsBinaryString) {

                FileReader.prototype.readAsBinaryString = function (f) {

                    var binary = "";

                    var rABS = false; //是否将文件读取为二进制字符串

                    var pt = this;

                    var wb; //读取完成的数据

                    var outdata;

                    var reader = new FileReader();

                    reader.onload = function (e) {

                        var bytes = new Uint8Array(reader.result);

                        var length = bytes.byteLength;

                        for (var i = 0; i < length; i++) {

                            binary += String.fromCharCode(bytes[i]);

                        }

                        var XLSX = require('xlsx');

                        if (rABS) {

                            wb = XLSX.read(btoa(fixdata(binary)), { //手动转化

                                type: 'base64'

                            });

                        } else {

                            wb = XLSX.read(binary, {

                                type: 'binary'

                            });

                        }

                        outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);//outdata就是你想要的东西

                        this.da = [...outdata]

                        let arr = [];
                        console.log(_this.tableData);
                        // console.log(outdata);
                        _this.tableData = outdata;

                        console.log(this.tableData);

                        this.da.map(v => {

                            let obj = {}

                            obj.id = v.id

                            obj.status = v.status

                            arr.push(obj)

                        });

                        let para = {

                            //withList: JSON.stringify(this.da)

                            withList: arr

                        };

                        _this.$message({

                            message: '请耐心等待导入成功',

                            type: 'success'

                        });
                        this.tableData = outdata;

                    };

                    reader.readAsArrayBuffer(f);

                };

                if (rABS) {

                    reader.readAsArrayBuffer(f);

                } else {

                    reader.readAsBinaryString(f);

                }

            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            open2() {
                this.$notify({
                    title: '提示',
                    message: '您有' + this.index + '条消息',
                    duration: 0,
                    onClick: function () {
                        this.close()
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>