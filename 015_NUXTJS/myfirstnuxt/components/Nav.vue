<template>
    <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/">home</nuxt-link></li>

        <li @click="send()">Clickme</li>
    </ul>

</template>

<script>
export default {
    data () {
        return {
            phone:0,
            code:0
        }
    },
    methods: {
        send(){
            console.log(this.phone);
        }
    }

}
</script>

<style>

</style>
