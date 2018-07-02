import api from '../../api/player'

const state = {
    all: {},//所有属性
    id:''
}

const getters = {
    getAll:state=>state.all
}

const actions = {
    getAllMsg(context) {
        api.getPlayer(context.state.id,data=>{
            context.commit('setAllData',data)
        })
    }
}

const mutations = {
    setAllData(state,allData){
        state.all=allData
    },
    setId(state,id){
        state.id=id
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
