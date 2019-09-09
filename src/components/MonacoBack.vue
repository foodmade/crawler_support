<template>
    <div class="myEditor">
        <div id="container" ref="container" style="height:600px"></div>
    </div>
</template>
<script>
    import * as monaco from 'monaco-editor';
    export default {
        props:{
            codes:{
                type:String,
                default:function(){
                    return ''
                }
            },
            language:{
                type:String,
                default:function(){
                    return 'html'
                }
            },
            editorOptions:{
                type:Object,
                default:function(){
                    return {
                        selectOnLineNumbers: true,
                        roundedSelection: false,
                        readOnly: false,		            // 只读
                        cursorStyle: 'line',		        //光标样式
                        automaticLayout: false,	            //自动布局
                        glyphMargin: true,                 //字形边缘
                        useTabStops: false,
                        fontSize: 28,		                //字体大小
                        autoIndent:true,                     //自动布局
                        foldingStrategy:'auto',                      //折叠策略  "auto" | "indentation"
                        parameterHints:{                             //参数提示设置
                            cycle:true,
                            enabled:true
                        },
                    }
                }
            }
        },
        data(){
            return{

            }
        },
        mounted(){
            let self = this;
            function initEditor(){
                self.$refs.container.innerHTML = '';
                self.monacoEditor = monaco.editor.create(self.$refs.container, {
                    value:self.codes,
                    language: self.language,
                    theme: 'hc-black',//vs, hc-black, or vs-dark
                    editorOptions:self.editorOptions,
                });
                self.$emit('onMounted',self.monacoEditor);
            }
            initEditor();
            window.addEventListener('resize',function(){
                initEditor();
            })
        },
        methods:{
            RunResult(){
                console.log(this.monacoEditor.getValue());
            }
        }
    }
</script>
<style scoped>
    #container{
        height:100%;
        text-align: left;
    }
</style>