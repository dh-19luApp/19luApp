import axios from 'axios'

export default {
    getSelectPlayer(fn){
        axios.get('http://home.19road.com/19lu/api/web/v1/relations/search').then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()

    }
}