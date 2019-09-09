<template>
    <div>
        <el-tabs type="border-card" style="width: 40%">
            <!--<el-tab-pane label="Parser" :lazy="true">-->
                <MyEditor
                        :language="'javascript'"
                        :codes="javascriptCodes"
                        @onMounted="javascriptOnMounted"
                        @onCodeChange="javascriptOnCodeChange" />
            <!--</el-tab-pane>-->
        </el-tabs>
    </div>
</template>

<script>
    import MyEditor from './MonacoBack'
    export default {
        components:{
            MyEditor
        },
        data () {
            return {
                javascriptCodes:'function helloWord(){' +
                    '\n' +
                    '\n' +
                    '}',
                jsEditor:null,
            }
        },
        methods:{

            javascriptOnMounted(edit){
                this.jsEditor = edit;
            },
            javascriptOnCodeChange(){},
        }
    }
</script>

<style scoped>

</style>