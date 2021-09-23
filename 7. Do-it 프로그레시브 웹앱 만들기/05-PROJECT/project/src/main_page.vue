<template lang="html">
    <div>
        <h2>THIS IS MAIN PAGE</h2>
        <button @click="fnSubPage">TO SUB PAGE(using router function)</button>
    </div>
</template>
<script>
export default{
    methods:{
        fnSubPage(){
            this.$router.push('/sub')
        }
    }
}</script>