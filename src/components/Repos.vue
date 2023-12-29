<template lang="pug">
ReposItem(v-for="repos in getReposSort" :key="repos.id" :repos="repos")
</template>



<script>
import ReposItem from '@/components/ReposItem.vue'
import {mapGetters} from "vuex"
export default {
    components: {ReposItem},
    computed: {
        ...mapGetters(['getReposSort'])
    },
}
</script>


<style lang="scss">
   
</style>