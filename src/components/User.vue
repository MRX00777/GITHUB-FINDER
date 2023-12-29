<template lang="pug">
.user-content(v-if="user") 
    .user-content-left 
        img(:src="user.avatar_url", alt="alt")
        a(:href="user.html_url") Посетить
    .user-content-right 
        h2 Имя: <span>{{ user.login }}</span>
        p Репозиториев: <span>{{user.public_repos}}</span> 
        p Создан:  <span>{{new Date(user.created_at).toLocaleDateString() }}</span> 
        p Подписчиков: <span>{{user.followers}}</span> 
        p Подписок: <span>{{user.following}}</span> 
.user-content(v-else) 
    .user-content-left 
        img(src="https://res.cloudinary.com/apideck/image/upload/v1598543613/icons/github.png", alt="alt")
        a(href="") Посетить
    .user-content-right 
         
        p Удобно смотри github акаунты знакомых
.sort 
    .sort-box 
        button.sort-box__btn(v-for="(btn, index) in btns"
         :key="btn.name" :class="{active: isActive == index}" 
         @click="sort(index, btn.sortType)") {{ btn.name }}
</template>


<script>
import { mapState, mapMutations } from "vuex"
export default {
    data() {
        return {
            isActive: 0,
            btns: [
                { name: 'ИМЯ' , sortType: 'name'},
                { name: 'ЗВЕЗДЫ' , sortType: 'stargazers_count'},
                { name: 'ДАТА' , sortType: 'created_at'},
            ]
        }
    },
    computed: {
        ...mapState(['user']),

    },
    methods: {
        ...mapMutations(['changeSort']),
        sort(index, sortType){
            this.isActive = index
            this.changeSort(sortType)
        }
    }
}
</script>

<style lang="scss">
.user-content {
    max-width: 500px;
    max-height: 300px;
    padding: 25px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #FFF;
    margin: 30px auto;
    gap: 30px;

    &-left {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 3px;

        a {
            color: #FFF;
            font-size: 14px;
            font-weight: 300;
            line-height: 120%;
            border-radius: 6px;
            background: #3F3F3F;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
        }

        img {
            border-radius: 6px;
            border: 2px double #3F3F3F;
            width: 200px;
            height: 200px;
        }
    }
    &-right p {
        font-size: 18px;
        color: black;
        font-weight: 600;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        span{
            font-weight: 400;
        }
    }
}

.sort {
    display: flex;
    justify-content: center;

    &-box {
        padding: 2px;
        border-radius: 0px;
        background: #E0E0E0;

        &__btn {
            color: #3F3F3F;
            font-family: Open Sans;
            font-size: 16px;
            font-weight: 700;
            line-height: 120%;
            text-transform: capitalize;
            border: none;
            outline: none;
            width: 112px;
            height: 32px;
            background: #E0E0E0;
            cursor: pointer;

            &.active {
                border-radius: 6px;
                background: #FFF;
            }
        }
    }
}
</style>