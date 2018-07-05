<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="更换手机号" back-link="Back"></f7-navbar>
        <f7-block-title >您当前的手机号是180XXXXXXXX</f7-block-title>
        <f7-list form style="background-color: white;border-bottom:1px solid #e5e5e5;border-top:1px solid #e5e5e5;" id="my-form">
                <!-- Text Input -->
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">新手机号</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input name="phone" v-model="phone" type="text" placeholder="输入新的手机号" class="">
                        </div>
                    </div>
                </div>
            </li>
                <!-- Password -->
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">验证码</div>
                        <div class="item-input col-60" style="margin-right: -30%; ">
                            <input type="text" v-model="code" name="code" placeholder="验证码" class="">
                        </div>
                        <div class="col-40">
                            <f7-button active>获取验证码</f7-button>
                        </div>
                    </div>
                </div>
            </li>

            </f7-list>

            <f7-button @click="sendMsg" active style="border-radius: 8px;margin:0px 20px ">确定</f7-button>


    </f7-page>
</template>

<script>
    export default {
      data(){
        return{
          code:'',
          phone:''
        }
      },
      methods:{
        sendMsg(){
          this.axios.post('http://home.19road.com/19lu/api/web/v1/user/modifyphone',{
              phone:this.phone,
            code:this.code
          }).then((response)=>{
            if(response.data.data){
              alert('修改成功')
            }else {
              alert('修改失败')
            }
          })
        }
      },
      updated(){

      }
    }
</script>
