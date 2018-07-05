import axios from 'axios'

export default {
    getPlayer(id,fn){
        axios.get('http://home.19road.com/19lu/api/web/v1/players/'+id).then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()
    }
}
