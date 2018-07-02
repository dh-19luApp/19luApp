import api from '../../api/user'
import axios from 'axios'

const state ={
  token:'',//验证
  msg:''//用户信息
}

const getters = {

}

const mutations = {
  setToken(state,token){
    state.token=token;
    axios.defaults.headers.common['Authorization'] = 'Basic '+window.btoa(token+':');
  }
}

const actions ={
  login(context,params){
    api.login(params,data=>{
      context.commit('setToken',data)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
