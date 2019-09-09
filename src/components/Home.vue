<template>
    <!--<monaco :codes='content' :read-only="false"></monaco>-->
    <h1>Hello word</h1>
</template>

<script>

    // import monaco from './Monaco';

    export default {
        name: "Home",
        data(){
            return{
                content:'function test()'
            }
        },
        props:{
            message:String
        },
        // components:{
        //     monaco
        // }
    }
</script>

<style scoped>


</style>