<template lang="pug">
.repos-item 
    .repos-item-left 
        h3 {{repos.name}}
        p Кол-во звёзд: {{repos.stargazers_count}} ⭐
        p Дата добавления: {{new Date(repos.created_at).toLocaleDateString() }}
    a(:href="repos.html_url" target="_blank").repos__link ПОСЕТИТЬ  
</template>


<script>
export default {
    props: {
        repos: Object,
    }
}
</script>


<style lang="scss">
.repos-item {
    max-width: 585px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background: #FFF;
    margin: 10px auto;

    h3 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
        margin: 4px 0;
    }

    a {
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        line-height: 120%;
        border-radius: 6px;
        background: #3F3F3F;
        padding: 9px 15px;
    }
}
</style>