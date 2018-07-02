import api from '../../api/order'

const state = {
    all: {},//所有属性
    current: null,
}
const getters = {
    getAll:state=>state.all,
}

const actions ={
    getAllMsg(context,payload){
        api.getOrder(payload.id,data=>{
            context.commit('setAllData',data)
        })
    }
}
const mutations = {
    setAllData(state,allData){
        state.all=allData
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
