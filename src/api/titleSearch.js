import axios from 'axios'

export default {
    getSearch(fn){
        axios.get('http://19lu-api.hayzon.com/v1/games/search?title').then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()

    }
}