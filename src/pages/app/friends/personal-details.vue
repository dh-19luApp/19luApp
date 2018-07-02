<template>
    <f7-page>
        <f7-navbar title="管理者信息" back-link="Back"></f7-navbar>

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
                <p style="color: gray">倪坤</p>
            </f7-list-item>
            <f7-list-item title="手机号">
                <p style="color: gray">18062881711</p>
            </f7-list-item>
            <f7-list-item
                    title="我的二维码"
                    link
            >
                <div slot="after">
                    <img src="http://lorempixel.com/88/88/fashion/4" width="60" height="60">
                </div>
            </f7-list-item>
            <f7-list-item
                    title="我的地址" style="position: relative">
                <div solt="after" style="color: gray;position: absolute;right:10px">
                    北京市昌平区百嘉城14号楼9单元101
                </div>

            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {

    }
</script>
