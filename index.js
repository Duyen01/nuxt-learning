import Vuex from 'vuex'
// import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            setDecks(state, decks){
                state.decks = decks
            }
        },
        actions: {
            // nuxtServerInt(vuexContext, context){
            //     return axios
            //     .get('https://nuxt-learning-2866a-default-rtdb.firebaseio.com/decks.json')
            //     .then((response) => {
            //         const decksArr = []
            //         for(const key in response.data) {
            //             decksArr.push({ ...response.data[key], id: key})
            //         }
            //         vuexContext.commit('setDecks', decksArr)
            //     })
            // },
            setDecks(vuexContext, decks){
                vuexContext.commit('setDecks', decks)
            }
        },
        getters: {
            decks(state){
                return state.decks
            }
        },
    })
}

export default createStore