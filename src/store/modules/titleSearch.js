import api from '../../api/titleSearch'

const state = {
    all: {},//所有属性
}

const getters = {
    getAll:state=>state.all
}

const actions = {
    getAllMsg(context) {
        api.getSearch(data=>{
            context.commit('setAllData',data)
        })
    }
}

const mutations = {
    setAllData(state,allData){
        state.all=allData
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
