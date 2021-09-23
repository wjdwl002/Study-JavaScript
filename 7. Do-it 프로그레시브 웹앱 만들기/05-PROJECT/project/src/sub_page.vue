<template lang="html">
    <div>
        <h2>THIS IS SUB PAGE</h2>
        <button @click="fnMainPage">TO MAIN PAGE(using router function)</button>
    </div>
</template>
<script>
export default{
    methods:{
        fnMainPage(){
            this.$router.push('/main')
        }
    }
}</script>