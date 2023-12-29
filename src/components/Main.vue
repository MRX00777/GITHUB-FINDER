<template lang="pug">
main.main
    Search()
    h2.error(v-if="error") {{ error }}
    User()    
    Repos()
</template>


<script>
import Search from './Search.vue'
import User from './User.vue'
import Repos from './Repos.vue'
import { mapState } from "vuex";
export default {
    components: {Search, User, Repos},
    computed: {
        ...mapState(['error'])
    }
}
</script>

<style lang="scss">
    .error{
        color: red;
        margin: 30px auto;
        text-align: center;
        font-size: 22px;
        max-width: 600px;
    }
</style>