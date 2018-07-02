<template>
    <f7-page login-screen>
        <f7-navbar title="登录">
        </f7-navbar>
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
            <li style="border-bottom: 1px solid #f3f3f3;position: relative">
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">密码</div>
                        <div class="item-input" style="margin-right:15%;">
                            <input type="password" placeholder="请输入您的密码" class="">
                            <f7-icon f7="eye" size="16px" style="position: absolute;right: 20%;top:20px;color: gray;"></f7-icon>
                        </div>
                    </div>
                </div>
            </li>
        </f7-list>
        <f7-list>
            <f7-row tag="p">
                <f7-button class="col" raised fill style="border-radius: 8px;margin: 0 20px">登录</f7-button>

            </f7-row>
            <f7-block-footer style="position: relative">
                <f7-link href="/register/" style="position: absolute;left: 20px;">注册成为会员</f7-link>
                <f7-link href="/forget/" style="position: absolute;right: 20px;">忘记密码?</f7-link>
            </f7-block-footer>
        </f7-list>
    </f7-page>
</template>
<script>
    export default {
        data(){
            return{}
        },

    }
</script>