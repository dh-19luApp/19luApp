import axios from 'axios'

export default {
  login(params,fn){
    axios.post('http://19lu-api.hayzon.com/v1/auth/login',{
      phone:params.phone,
      password:params.pwd
    }).then((response)=>{
      console.log(response.data)
      fn(response.data.data)
    }).catch(
      (error)=>{
        console.log(error)
      }
    )
  }
}
