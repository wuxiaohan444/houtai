<template>
    <div id="home">
        <el-container class="my-box">
            <!--菜单-->
            <el-row class="my-menu">
                <el-col :span="24">
                    <div class="topic">新华医院科研管理</div>
                    <el-menu
                            :default-active="onRoutes"
                            class="el-menu-vertical-demo"
                            background-color="#28333E"
                            text-color="#B3B4B7"
                            @open="handleOpen"
                            @close="handleClose"
                            unique-opened
                            router
                            active-text-color="#ffffff">
                        <template v-for="item in items">
                            <template v-if="item.subs">
                                <el-submenu :index="item.index" :key="item.index">
                                    <template slot="title">
                                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                                    </template>
                                    <template v-for="subItem in item.subs">
                                        <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                            <template slot="title">{{ subItem.title }}</template>
                                            <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                                {{ threeItem.title }}
                                            </el-menu-item>
                                        </el-submenu>
                                        <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                            {{ subItem.title }}
                                        </el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.index" :key="item.index">
                                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-col>
            </el-row>
            <el-container>
                <el-header>
                    <el-col :span="24" class="topbar-wrap">
                        <div class="topbar-account topbar-btn" style="display: flex;align-items: center">
                            <el-button type="info" icon="el-icon-message" circle></el-button>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link userinfo-inner">
                                    <img src="../assets/logo.png" alt="" class="userinfo-img">管理员
                                    <i class="el-icon-caret-bottom"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <div @click="jumpTo('/user/profile')"><span
                                                style="color: #555;font-size: 14px;">个人信息</span>
                                        </div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div @click="jumpTo('/user/changepwd')"><span
                                                style="color: #555;font-size: 14px;">修改密码</span></div>
                                    </el-dropdown-item>
                                    <el-dropdown-item divided>
                                        <div @click="logout">退出登录</div>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: "home",
        data() {
            return {
                // index: '1-3-1'
                items: ''
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
       created() {
            this.items = [
                {
                    icon: 'el-icon-lx-home',
                    index: 'index',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'fatherTable',
                    title: '父子表'
                },
                {
                    icon: 'el-icon-setting',
                    index: 'home',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'index',
                            title: '三级菜单',
                            subs: [
                                {
                                    index: 'level',
                                    title: '随便'
                                },
                            ]
                        },
                    ]
                },
                {
                    icon: 'el-icon-lx-favor',
                    index: 'myEcharts',
                    title: 'schart图表'
                },
            ];
        },
        mounted() {
            // console.log(this.$store.state.menu);
            // console.log(this.$router.options.routes);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            // 退出
            logout() {
                console.log(1);
                this.$router.push({name: 'login'});
            }
        },
    }
</script>

<style scoped>
    #home {
        height: 100%;
    }
</style>