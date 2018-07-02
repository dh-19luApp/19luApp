<template>
        <f7-list form style="background-color: white;border-top: 1px solid #e5e5e5;border-bottom: 1px solid #e5e5e5;">
            <!-- Text Input -->
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">手机号</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input v-model="phone" type="text" placeholder="输入手机号" class="">
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
                            <input v-model="code" type="text" placeholder="验证码" class="">
                        </div>
                        <div class="col-40">
                            <f7-button active>获取验证码</f7-button>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">输入新密码</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input v-model="password" type="text" placeholder="输入新密码" class="">
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">再次输入密码</div>
                        <div class="item-input" style="margin-right:15%; ">
                            <input v-model="repassword" type="text" placeholder="再次输入密码" class="">
                        </div>
                    </div>
                </div>
            </li>
        </f7-list>
</template>

<script>
    export default {
      data(){
        return{
          phone:'',
          code:'',
          password:'',
          repassword:''
        }
      },
      updated(){
        this.$emit('postData',this.$data)
      }
    }
</script>
