<template>
    <f7-page>
        <f7-navbar title="个人信息详情" back-link="Back"></f7-navbar>

        <f7-list>
            <f7-list-item
                    title="头像"
                    link
            >
              <div slot="after">
                <img src="http://lorempixel.com/88/88/fashion/4" width="60" height="60">
              </div>
            </f7-list-item>
            <f7-list-item title="名字">
                <p>倪坤</p>
            </f7-list-item>
            <f7-list-item title="手机号">
                <p>18062881711</p>
            </f7-list-item>
            <f7-list-item hidden
                    title="我的二维码"
                    link
            >
              <div slot="after">
                <img src="http://lorempixel.com/88/88/fashion/4" width="60" height="60">
              </div>
            </f7-list-item>
            <f7-list-item hidden
                    title="我的地址"
                    link="/my/my-address/:id"
            ></f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {}
</script>
