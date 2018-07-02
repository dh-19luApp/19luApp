import axios from 'axios'

export default {
    //获取赛事信息
    getGameDetail(id,fn) {
        axios.get('http://19lu-api.hayzon.com/v1/games/' + id).then((response) => {
            fn(response.data.data)

        }).catch()
    },
    //获取赛事组别
    getGameGroup(id,fn){
      axios.get('http://19lu-api.hayzon.com/v1/groups/search',{
        eventid:id
      }).then((response)=>{
        fn(response.data.data.items)
      })
    },
    //获取赛事的服务分类
    getGameServe(id,fn){
      axios.get('http://19lu-api.hayzon.com/v1/types/search',{
        eventid:id
      }).then((response)=>{
        fn(response.data.data.items)
      })
    },
}
