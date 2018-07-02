import Vue from 'vue'
import Vuex from 'vuex'
import mainMenu from './modules/MainMenu'

import gameDetail from './modules/gameDetail'

import order from './modules/order'
import user from './modules/user'
import titleSearch from './modules/titleSearch'
import player from './modules/player'
import selectPlayer from './modules/selectPlayer'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        mainMenu,
        gameDetail,
        order,
        user,
        titleSearch,
        player,
        selectPlayer,

    },
})
