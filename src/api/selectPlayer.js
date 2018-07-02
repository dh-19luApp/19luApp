import axios from 'axios'

export default {
    getSelectPlayer(fn){
        axios.get('http://19lu-api.hayzon.com/v1/relations/search').then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()

    }
}