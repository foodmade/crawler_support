<template>
    <div class="">
        <codemirror
                ref="mycode"
                :value="code"
                :options="cmOptions"
                class="code">
        </codemirror>
    </div>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    import "codemirror/theme/monokai.css"; // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
    require("codemirror/mode/javascript/javascript"); // 这里引入的模式的js，根据设置的mode引入，一定要引入！！

    export default {
        name: "codeMirror",
        data () {
            return {
                code: 'function test ()',
                cmOptions:{
                    mode:"text/javascript",
                    theme: "monokai",
                    readOnly:false,
                    indentWithTabs: true,
                    smartIndent: false,
                    lineNumbers: true,
                    matchBrackets: true,
                    lineSeparator:'\n'
                }
            }
        },
        components:{
            codemirror
        },
    }
</script>

<style scoped>
    .setting{
        margin: 0;
        width: 500px;
        height: 300px;
        padding: 10px 10px 10px 10px;
        background-color: rgba(255, 255, 255, 0.01);
    }
</style>