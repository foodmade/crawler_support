<template>
    <div class="monaco-container">
        <div ref="container" class="monaco-editor"></div>
    </div>
</template>

<script>

    import monacoEditor from 'monaco-editor'

    export default {
        name: "monaco",
        props: {
            codes: {
                type: String,
                default: function () {
                    return ''
                }
            },
            readOnly: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            // 主要配置
            editorOptions: {
                type: Object,
                default: function () {
                    return {
                        selectOnLineNumbers: true,
                        roundedSelection: false,
                        readOnly: this.readOnly, // 只读
                        cursorStyle: 'line', // 光标样式
                        automaticLayout: false, // 自动布局
                        glyphMargin: true, // 字形边缘
                        useTabStops: false,
                        fontSize: 15, // 字体大小
                        autoIndent: false // 自动布局
                    }
                }
            }
        },
        data() {
            return {
                language: 'javaScript',	 //语言
                options: {
                    acceptSuggestionOnCommitCharacter:true,
                    acceptSuggestionOnEnter:'off',               //接受建议OnEnter
                    autoIndent:true,                             //自动缩进
                    colorDecorators:true,                        //颜色装饰器
                    cursorBlinking:'blink',                      //光标闪烁  'blink'，'smooth'，'phase'，'expand'和'solid'
                    folding:true,                                //显示折叠控件
                    foldingStrategy:'auto',                      //折叠策略  "auto" | "indentation"
                    glyphMargin:true,                            //字形边距
                    letterSpacing:0,                             //字母间距
                    lineNumbers:'on',                            //"on" | "off" | "relative" | "interval" | function
                    matchBrackets:true,                          //匹配括号
                    parameterHints:{                             //参数提示设置
                        cycle:true,
                        enabled:true
                    },
                    showFoldingControls:'always',                 //"always" | "mouseover"
                    snippetSuggestions:'bottom',                  //代码段建议  "top" | "bottom" | "inline" | "none"
                    ISuggestOptions:{
                        filterGraceful:true,
                        snippetsPreventQuickSuggestions:false
                    },
                    theme:'vs-dark',
                    selectOnLineNumbers:false,
                    roundedSelection: false,
                    readOnly: false,		// 只读
                    cursorStyle: 'line',		//光标样式
                    automaticLayout: false,	//自动布局
                    useTabStops: false
                },
                newCode: '',
            }
        },
        methods: {

        },
        mounted() {
            // this.monacoEditor = monacoEditor.editor.create(this.$refs.container, {
            //     value: this.codes, // 见props
            //     language: 'python',
            //     theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
            //     editorOptions: this.editorOptions // 同codes
            // })
        }
    }
</script>

<style scoped>
    .code_editor #language_options{
        padding: 16px;
    }
    .code_editor #language_options select{
        height: 33px;
        width: 20%;
    }
</style>