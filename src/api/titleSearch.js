import axios from 'axios'

export default {
    getSearch(fn){
        axios.get('http://home.19road.com/19lu/api/web/v1/games/search?title').then((response)=>{
            fn(response.data.data)
            console.log(response.data.data);
        }).catch()

    }
}