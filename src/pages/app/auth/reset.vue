<template>
    <f7-page style="background-color: #f5f5f5">
        <f7-navbar title="重置密码" back-link="Back">
        </f7-navbar>
        <f7-block-title >您当前的手机号是180XXXXXXXX</f7-block-title>
        <password @postData="getData"></password>
        <f7-button @click="postData" active style="border-radius: 8px;margin:0px 20px">确定</f7-button>
    </f7-page>
</template>

<script>
    import Password from '../loginPackage/password.vue';
    export default {
        components:{
            password: Password,
        },
        data(){
          return{
            form:''
          }
        },
        methods:{
          getData(data){
            this.form=data;
          },
          postData(){
            if(this.form){
              this.axios.post('http://home.19road.com/19lu/api/web/v1/auth/reset',this.form).then((response)=>{
                if(response.data.data){
                  alert('修改成功')
                }else {
                  alert('修改失败')
                }
              })
            }else {
              alert('数据空')
            }
          }
        }
    }
</script>
