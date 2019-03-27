<template>
    <div id="indexBox">
        <!--导航条-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container class="my-main">
            <div class="my-main-content">
                <!--搜索-->
                <el-form :model="formInline" :inline="true" label-width="80px" class="search-from">
                    <el-form-item label="审批人">
                        <el-input placeholder="审批人" v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select placeholder="活动区域" v-model="formInline.region" value="">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <br>
                    <el-form-item>
                        <button type="button" class="my-button" style="margin-left: 80px">查询</button>
                        <button type="button" class="my-button">重置</button>
                    </el-form-item>
                </el-form>
                <!--按钮区域-->
                <div class="area-button">
                    <el-button size="small" type="primary" @click="add()">新增</el-button>
                    <el-button size="small" type="primary">删除</el-button>
                    <el-button size="small" type="primary">下载模板</el-button>
                    <el-button size="small" type="primary">导入</el-button>
                </div>
                <!--单个表格-->
                <el-row>
                    <el-col :span="24"> <el-table
                            ref="multipleTable"
                            :data="tableData3"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
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
                    </el-table></el-col>
                </el-row>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        data: function () {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData3: [{
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
            }
        },
        mounted() {

        },
        methods: {
            add(){

            },
            handleSelectionChange(e) {
                console.log(e);
            },
            goParam() {
                this.$router.push({name: 'test', params: {id: 1}})
            },

        }
    }
</script>

<style scoped>

</style>