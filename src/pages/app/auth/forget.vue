<template>
  <f7-page style="background-color: #f5f5f5">
    <f7-navbar title="忘记密码" back-link="Back">
    </f7-navbar>
    <f7-block-title >您当前的手机号是180XXXXXXXX</f7-block-title>
    <f7-list form style="background-color: white;border-top: 1px solid #e5e5e5;border-bottom: 1px solid #e5e5e5;">
      <!-- Text Input -->
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">手机号</div>
            <div class="item-input" style="margin-right:10%; ">
              <input type="text" placeholder="输入手机号" class="">
            </div>
          </div>
        </div>
      </li>
      <!-- Password -->
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">验证码</div>
            <div class="item-input col-60" style="margin-right: -35%; ">
              <input type="text" placeholder="验证码" class="">
            </div>
            <div class="col-40">
              <f7-button active>获取验证码</f7-button>
            </div>
          </div>
        </div>
      </li>
      <li style="position:relative ">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">输入新密码</div>
            <div class="item-input" style="margin-right:10%; ">
              <input type="password" placeholder="输入新密码" class="">
              <f7-icon f7="eye" size="16px" style="position: absolute;right: 20%;top:20px;color: gray;"></f7-icon>
            </div>
          </div>
        </div>
      </li>
      <li style="position: relative">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">再次输入密码</div>
            <div class="item-input" style="margin-right:10%; ">
              <input type="password" placeholder="再次输入密码" class="">
              <f7-icon f7="eye" size="16px" style="position: absolute;right: 20%;top:20px;color: gray;"></f7-icon>
            </div>
          </div>
        </div>
      </li>
    </f7-list>
    <f7-button active style="border-radius: 8px;margin:0px 20px">确定</f7-button>
  </f7-page>
</template>

<script>
    import Password from '../loginPackage/password.vue';
export default {
    components:{
        password: Password,
    }
}
</script>