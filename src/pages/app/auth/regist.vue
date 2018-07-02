<template>
  <f7-page>
    <f7-navbar title="注册" back-link="Back"></f7-navbar>
      <f7-list form>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">手机号</div>
              <div class="item-input" style="margin-right:15%; ">
                <input type="text" placeholder="请输入您的手机号" class="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">验证码</div>
              <div class="item-input col-60" style="margin-right: -30%; ">
                <input type="text" placeholder="验证码" class="">
              </div>
              <div class="col-40">
                <f7-button active>获取验证码</f7-button>
              </div>
            </div>
          </div>
        </li>
        <li style="position: relative">
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">密码</div>
              <div class="item-input" style="margin-right:15%; ">
                <input type="password" placeholder="请输入您的密码" class="">
                <f7-icon f7="eye" size="16px" style="position: absolute;right: 20%;top:20px;color: gray;"></f7-icon>
              </div>
            </div>
          </div>
        </li>
        <li style="position: relative">
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">确认密码</div>
              <div class="item-input" style="margin-right:15%; ">
                <input type="password" placeholder="请确认您的密码" class="">
                <f7-icon f7="eye" size="16px" style="position: absolute;right: 20%;top:20px;color: gray"></f7-icon>
              </div>
            </div>
          </div>
        </li>
        <f7-row tag="p">
          <f7-button class="col" raised fill style="border-radius: 8px;margin:20px">注册</f7-button>

        </f7-row>
      </f7-list>
  </f7-page>
</template>

<script>
export default {}
</script>