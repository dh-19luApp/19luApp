import axios from 'axios'

export default {
  login(params,fn){
    axios.post('http://home.19road.com/19lu/api/web/v1/auth/login',{
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
