import {createStore} from 'vuex'

// mutations和actions只接受一个参数值

export default createStore({
    state: {
        userList: [],
        // activeIndex:"slackerPerson/slackerPerson"
    },
    getters: {},
    mutations: {
        change(state, userList){
            state.userList = userList
        },
        changeActiveIndex(state, activeIndex){
            state.activeIndex = activeIndex
        }
    },
    actions: {},
    modules: {}
})
