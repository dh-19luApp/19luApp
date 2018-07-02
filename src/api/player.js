import axios from 'axios'

export default {
    getPlayer(id,fn){
        axios.get('http://19lu-api.hayzon.com/v1/players/'+id).then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()
    }
}
