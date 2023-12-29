import {
    createStore
} from "vuex";
import axios from 'axios'
const store = createStore({
    state: { // это типа data (типа переменные)
        url: ' https://api.github.com/users/',
        user: null,
        repositories: null,
        error: null, /* 'К сожалению такой пользователь не существует!' */
        currentSort: 'name'
    },
    mutations: { // позволяют изменить stete
        userInfo(state, data){
            state.user = data
            state.error = null
        },
        userReset(state){
            state.user = null
            state.error = null
        },
        userError(state, error){
            state.error = error.response.data.message
        },
        reposInfo(state, repos){
            state.repositories = repos
        }, 
        changeSort(state, payload){
            state.currentSort = payload
        }
    },
    actions: { // позволяют изменить stete
        async userInfo({
            commit, state
        }, search) {
            try {
                const res = await axios.get(`${state.url}${search}`)
                const repos = await axios.get(`${state.url}${search}/repos`)// zapros na repozitoriy
                commit('userInfo', res.data)
                commit('reposInfo', repos.data)
            } catch (error) {
                commit('userError', error)
                console.clear()
                state.user = null
            }
        }
    },
    getters: { // позволяют видоизменить (например фильтровать)
        getReposSort(state){

            if (state.repositories != null){
               return state.repositories.sort((prev, next) => {
                let mod = 1
                if(prev[state.currentSort] < next[state.currentSort]){
                    return -1 * mod
                }
            }) 


            }
            
        }
    }
})

export default store