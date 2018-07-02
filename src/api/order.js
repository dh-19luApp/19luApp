import axios from 'axios'

export default {
    getOrder(id,fn){
        axios.get('http://sign.19road.com/19lu/api/web/v1/orders/'+id+'?feilds=order').then((response)=>{
            console.log(response.data);
            fn(response.data.data)
        }).catch()

    }
}
