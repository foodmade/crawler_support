<template>
    <div class="setting">
        <codemirror
                ref="mycode"
                :value="code"
                :options="cmOptions"
                class="code" @ready="onCmReady" @focus="onCmFocus" @input="onCmCodeChange">
        </codemirror>

    </div>
</template>

<script>

    let CodeMirror = require("codemirror/lib/codemirror");

    import "codemirror/theme/ambiance.css";
    import "codemirror/lib/codemirror.css";
    import "codemirror/addon/hint/show-hint.css";
    import "codemirror/theme/monokai.css"; 

    require("codemirror/addon/edit/matchbrackets");

    require("codemirror/mode/javascript/javascript");

    //代码折叠文件
    require('codemirror/addon/fold/foldcode.js');
    require('codemirror/addon/fold/foldgutter.js');
    require('codemirror/addon/fold/brace-fold.js');

    //选中行高亮文件
    require('codemirror/addon/selection/active-line.js');
    //缩进文件
    require('codemirror/addon/fold/indent-fold.js');
    //代码只能提示
    require('codemirror/addon/hint/show-hint.js');
    require('codemirror/addon/hint/sql-hint.js');
    require("codemirror/addon/hint/javascript-hint");
    //addon文件夹放的是Code Mirror的功能插件
    require('codemirror/addon/fold/comment-fold.js');

    
    export default {
        name: "codeMirror",
        data () {
            return {
                code: '',
                cmOptions:{
                    mode:"text/javascript",
                    theme: "monokai",
                    indentWithTabs: true,
                    smartIndent: true,
                    lineNumbers: true,
                    matchBrackets: true,
                    lineWrapping:true,
                    indentUnit:4,
                    showCursorWhenSelecting:true,
                    autofocus:true,
                    line: true,
                    extraKeys:{"Ctrl-Space":"autocomplete"},//ctrl-space唤起智能提示
                    hintOptions: {tables: {
                        users: ["name", "score", "birthDate"],
                        countries: ["name", "population", "size"]
                    }},
                }
            }
        },
        methods:{

        },
        computed:{

        },
        mounted:{
            
        },
        comments:{
            CodeMirror
        }
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