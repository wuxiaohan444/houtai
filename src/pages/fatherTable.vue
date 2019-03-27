<template>
    <div class="table">
        <el-container class="my-main">
            <div class="my-main-content">
                <!--父子表结构-->
                <el-table :data="tableData5" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-table
                                    ref="multipleTable"
                                    :data="props.row.tableOne"
                                    tooltip-effect="dark"
                                    style="width: 100%">
                                <el-table-column
                                        type="selection"
                                        width="55">
                                </el-table-column>
                                <el-table-column
                                        label="日期"
                                        width="120">
                                    <template slot-scope="scope">{{scope.row.date }}</template>
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
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="商品 ID"
                            prop="id">
                    </el-table-column>
                    <el-table-column
                            label="商品名称"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="描述"
                            prop="desc">
                    </el-table-column>
                </el-table>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "table",
        data(){
            return{
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333',
                    tableOne: [{
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
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
            }
        },
        methods:{
            // 选中
            handleSelectionChange(e) {
                console.log(e);
            },
        }
    }
</script>

<style scoped>

</style>