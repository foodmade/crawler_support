<template>
    <div style="width: 100%">
        <el-menu router :default-active="this.$router.path"
                 class="el-menu-demo" mode="horizontal"
                 @select="handleSelect" unique-opened
                 active-text-color="#ffd04b">

            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                {{ item.navItem }}
            </el-menu-item>

        </el-menu>
        <div class="loginDiv">
            <el-button size="small" round icon="el-icon-s-custom">登陆/注册</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                toPath: '',
                navList:[
                    {name:'/home',navItem:'工作台'},
                    {name:'/record',navItem:'操作记录'},
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

    .loginDiv{
        left: 80%;
        position: absolute;
        top: 2.5%;
    }

</style>