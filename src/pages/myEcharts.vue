<template>
    <div class="mybox">
        <el-container class="my-main">
            <div class="my-main-content">
                <!--图表-->
                <el-row class="echatrs-item">
                    <el-col :span="8" :style="{height:'100%'}">
                        <div id="myChart1" :style="{height:'100%',width:'100%'}"></div>
                    </el-col>
                </el-row>
                <el-button type="primary" @click="change">主要按钮</el-button>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "my-echarts",
        data() {
            return {}
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
            // 绘制图表
            myChart1.setOption({
                title: {text: '在Vue中使用echarts'},
                tooltip: {
                    show: false
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
            window.addEventListener("resize", function () {
                myChart1.resize();
            })
        },
        methods: {
            change() {
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
                // 绘制图表
                myChart1.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                });
                window.addEventListener("resize", function () {
                    myChart1.resize();
                })
            }
        }

    }
</script>

<style scoped>
    @media (min-width: 1024px) {
        .echatrs-item {
            height: 300px;
        }
    }

    /*>=1024的设备*/

    @media (min-width: 1100px) {
        .echatrs-item {
            height: 315px;
        }
    }

    /*>=1100的设备*/
    @media (min-width: 1280px) {
        .echatrs-item {
            height: 325px;
        }
    }

    /*>=1280的设备*/

    @media (min-width: 1366px) {
        .echatrs-item {
            height: 340px;
        }
    }

    @media (min-width: 1440px) {
        .echatrs-item {
            height: 350px;
        }
    }

    @media (min-width: 1680px) {
        .echatrs-item {
            height: 375px;
        }
    }

    @media (min-width: 1920px) {
        .echatrs-item {
            height: 400px;
        }
    }

</style>