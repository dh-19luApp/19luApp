import api from '../../api/gameDetail'

const state = {
  all: {},//所有属性
  id: '',
  group: [],//赛事组别
  selectedPlayer: '',//所选择的选手 set 结构
  server: ''//赛事服务
}

const getters = {
  getAll: state => state.all,
  getServerPrice: state =>(id)=> {
    //获取服务价格
    let price = 0;
    state.selectedPlayer.forEach((value)=>{
      if(value.id == id){
        if(value.server){
          [...value.server.values()].forEach((priceValue)=>{
            price+=parseInt(priceValue.detail.price)*parseInt(priceValue.purchaseNum);
          })
        }
      }
    });
    return price;
  },
  getApplyPrice:state=>(id)=>{
    //获取报名价格
    let apply={
      price:0,
      name:'',
      id:'',
    };
    state.selectedPlayer.forEach((value)=>{
      if(value.id == id){
        if(value.group){
          apply.price+=parseInt(value.group.price);
          apply.name=value.group.group_name;
          apply.id=value.group.id;
        }
      }
    });
    return apply;
  },
  getServerList:state=>(id)=>{
    //获取服务数组列表
    state.selectedPlayer.forEach((value)=>{
      if(value.id=id){
        if(value.server){
          return [...value.server.values()];
        }
      }
    })
  },
  getTotalPrice:(state,getters)=>{
    //获取订单总价
    let totalPrice=0;
    state.selectedPlayer.forEach((value)=>{
      totalPrice+=getters['getServerPrice'](value.id)+getters['getApplyPrice'](value.id).price;
    });
    return totalPrice;
  },
  getSelectedGroup:(state,getters)=>{
    //获取已选的参赛组别
    let selectedGroup=new Map();
    let trueLength;
    let hasSelected=0;
    state.selectedPlayer.forEach((value)=>{
      let selectedGroupItem=getters['getApplyPrice'](value.id);
      if(selectedGroupItem.id!=''){
        selectedGroup.set(selectedGroupItem.id,selectedGroupItem);
        hasSelected++;
      }
    });
    trueLength=[...selectedGroup.values()].slice(0).length;
    let blankItem = {
      id: 'blankId',
      name: '未选择组别',
      price: 'noPrice'
    };
    selectedGroup.set('blankId',blankItem);
    return {values:[...selectedGroup.values()],trueLength:trueLength,hasSelected:hasSelected};
  }
}

const actions = {
  getAllMsg(context) {
    api.getGameDetail(context.state.id, data => {
      context.commit('setAllData', data)
    });
    api.getGameGroup(context.state.id, data => {
      context.commit('setGroup', data)
    });
    api.getGameServe(context.state.id, data => {
      context.commit('setServer', data)
    });
  }
}

const mutations = {
  setAllData(state, allData) {
    state.all = allData
  },
  setId(state, id) {
    state.id = id
  },
  setGroup(state, group) {
    state.group = group
  },
  setSelectedPlayer(state, players) {
    state.selectedPlayer = players
  },
  setServer(state, server) {
    state.server = server
  },
  addGroup(state, data) {
    //添加组别
    let res = new Set();
    state.selectedPlayer.forEach((value)=>{
      if(value.id==data.id){
        res.add(Object.assign(value,data.data))
      }else {
        res.add(value)
      }
    });
    state.selectedPlayer = res;
  },
  addServer(state, data){
    //添加服务
    let res = new Set();
    state.selectedPlayer.forEach((value)=>{
      if(value.id==data.id){
        if(value.server){
          for (let [dataKey, dataValue] of data.data.server.entries()) {
            value.server.set(dataKey,dataValue)
          }
          res.add(value)
        }else {
          res.add(Object.assign(value,data.data))
        }
      }else {
        res.add(value)
      }
    });
    state.selectedPlayer = res;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
